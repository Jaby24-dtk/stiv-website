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

  await transporter.sendMail({
    from: `"STIV Website" <${smtpUser}>`,
    to: recipient,
    replyTo: email,
    subject: `New STIV private briefing application — ${company}`,
    text: [
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
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}
