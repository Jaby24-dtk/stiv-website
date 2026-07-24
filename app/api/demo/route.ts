import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const recentRequests = new Map<string, number>();

function text(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.trim().replace(/\0/g, "").slice(0, maxLength)
    : "";
}

function applicationReference() {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  return `STIV-${date}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
}

function qualificationSummary({
  companySize,
  timeline,
  role,
  division,
}: {
  companySize: string;
  timeline: string;
  role: string;
  division: string;
}) {
  const factors: string[] = [];
  let score = 0;

  if (companySize === "1000+") {
    score += 3;
    factors.push("Enterprise-scale organization");
  } else if (companySize === "200-999") {
    score += 2;
    factors.push("Mid-market organization");
  } else if (companySize === "50-199") {
    score += 1;
  }

  if (timeline === "0-3 months") {
    score += 3;
    factors.push("Active evaluation within 3 months");
  } else if (timeline === "3-6 months") {
    score += 2;
    factors.push("Evaluation within 6 months");
  } else if (timeline === "6-12 months") {
    score += 1;
  }

  if (
    /\b(founder|owner|chief|ceo|coo|cfo|cto|cio|cmo|general manager|vp|vice president|director|head)\b/i.test(
      role,
    )
  ) {
    score += 2;
    factors.push("Senior decision-maker or functional leader");
  }

  if (division === "STIV Unified") {
    score += 1;
    factors.push("Evaluating a company-wide deployment");
  }

  return {
    score,
    readiness: score >= 7 ? "Priority review" : score >= 4 ? "Standard review" : "Nurture review",
    factors: factors.length > 0 ? factors : ["No priority indicators selected"],
  };
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const lastRequest = recentRequests.get(ip) ?? 0;
  if (Date.now() - lastRequest < 15_000) {
    return NextResponse.json(
      { error: "Please wait before sending another enquiry." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot field: real visitors never see or fill this.
  if (text(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = text(body.name, 100);
  const email = text(body.email, 200).toLowerCase();
  const company = text(body.company, 150);
  const role = text(body.role, 120);
  const companySize = text(body.companySize, 50);
  const division = text(body.division, 80);
  const timeline = text(body.timeline, 80);
  const message = text(body.message, 2_000);
  const source = text(body.source, 200) || "Website";
  const reference = applicationReference();

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid work email." },
      { status: 400 },
    );
  }
  if (!name || !company || !role || !companySize || !division || !timeline) {
    return NextResponse.json(
      { error: "Complete all required application fields." },
      { status: 400 },
    );
  }
  if (message.length < 30) {
    return NextResponse.json(
      { error: "Tell us a little more about the priority workflow." },
      { status: 400 },
    );
  }

  const smtpUser = process.env.ZOHO_SMTP_USER;
  const smtpPassword = process.env.ZOHO_SMTP_APP_PASSWORD;
  const recipient = process.env.LEADS_TO_EMAIL ?? "director@iamstivai.com";

  if (!smtpUser || !smtpPassword) {
    return NextResponse.json(
      {
        error: "Online delivery is being configured.",
        fallback: `mailto:${recipient}?subject=${encodeURIComponent(
          "STIV private briefing application",
        )}&body=${encodeURIComponent(
          `Name: ${name || "Not provided"}\nEmail: ${email}\nCompany: ${
            company || "Not provided"
          }\nRole: ${role}\nCompany size: ${companySize}\nPriority division: ${division}\nTimeline: ${timeline}\nSource: ${source}\n\n${message}`,
        )}`,
      },
      { status: 503 },
    );
  }

  recentRequests.set(ip, Date.now());

  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST ?? "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });
  const qualification = qualificationSummary({
    companySize,
    timeline,
    role,
    division,
  });
  const submittedAt = new Intl.DateTimeFormat("en-SG", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Singapore",
  }).format(new Date());

  await transporter.sendMail({
    from: `"STIV Website" <${smtpUser}>`,
    to: recipient,
    replyTo: email,
    subject: `[${qualification.readiness}] ${reference} — ${company}`,
    text: [
      `Application reference: ${reference}`,
      `Review queue: ${qualification.readiness}`,
      `Internal fit score: ${qualification.score}/9`,
      `Priority indicators: ${qualification.factors.join("; ")}`,
      `Submitted: ${submittedAt} SGT`,
      "",
      `Name: ${name || "Not provided"}`,
      `Work email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Role: ${role}`,
      `Company size: ${companySize}`,
      `Priority division: ${division}`,
      `Evaluation timeline: ${timeline}`,
      `Source: ${source}`,
      "",
      message || "No additional message.",
      "",
      "Suggested next step:",
      qualification.readiness === "Priority review"
        ? "Review promptly and send an approved private scheduling link if the workflow is a strong fit."
        : qualification.readiness === "Standard review"
          ? "Review the workflow and request clarification or approve a private briefing."
          : "Assess strategic fit and consider a tailored follow-up or nurture response.",
    ].join("\n"),
  });

  let acknowledgementSent = true;
  try {
    await transporter.sendMail({
      from: `"STIV Private Access" <${smtpUser}>`,
      to: email,
      replyTo: recipient,
      subject: `Your STIV application has been received — ${reference}`,
      text: [
        `Dear ${name},`,
        "",
        "Thank you for applying for a private STIV briefing.",
        "",
        "Our team reviews every request individually against the workflow, deployment scope, and readiness described in the application. If there is a strong fit, we will contact you within two business days with the next step.",
        "",
        `Application reference: ${reference}`,
        `Company: ${company}`,
        `Priority division: ${division}`,
        "",
        "This confirmation is not an acceptance or a commitment to provide access.",
        "",
        "Please reply to this email if material details change. Do not send confidential, personal, or regulated data by email.",
        "",
        "STIV Private Access",
        "STIV Pte. Ltd.",
        "50 Raffles Place #30-00, Singapore 048623",
      ].join("\n"),
    });
  } catch (error) {
    acknowledgementSent = false;
    console.error("Application acknowledgement email failed", {
      reference,
      error,
    });
  }

  return NextResponse.json({ ok: true, reference, acknowledgementSent });
}
