import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageAlt = "STIV — Intelligence, orchestrated.";
export const ogImageContentType = "image/png";

const DIVISIONS = [
  "Executive",
  "Sales",
  "Marketing",
  "Finance",
  "Operations",
  "Legal",
  "Support",
];

export async function renderOgImage() {
  const [semibold, bold, mono, logoMark] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/InterTight-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/InterTight-Bold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/GeistMono-Medium.ttf")),
    readFile(join(process.cwd(), "public/stiv-logo-mark.png")),
  ]);

  const logoDataUrl = `data:image/png;base64,${logoMark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#08090b",
          backgroundImage:
            "radial-gradient(ellipse at 80% 20%, rgba(29,43,59,0.65) 0%, rgba(8,9,11,0) 60%)",
          fontFamily: "Inter Tight",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- satori (next/og) requires a plain <img>, not next/image */}
          <img
            src={logoDataUrl}
            alt=""
            width={44}
            height={44}
            style={{ objectFit: "contain" }}
          />
          <span
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: "#f0efea",
              letterSpacing: "-0.03em",
            }}
          >
            STIV
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 22,
              letterSpacing: "0.15em",
              color: "#9aa3af",
              textTransform: "uppercase",
            }}
          >
            THE ORGANIZATIONAL INTELLIGENCE LAYER
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#f0efea",
            }}
          >
            <span>Intelligence,</span>
            <span
              style={{ color: "#c0cedc" }}
            >
              orchestrated.
            </span>
          </div>
          <span style={{ display: "flex", fontSize: 24, color: "#9aa3af" }}>
            {DIVISIONS.join("   ·   ")}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 28,
          }}
        >
          <span
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 20,
              color: "#9aa3af",
              letterSpacing: "0.05em",
            }}
          >
            iamstivai.com
          </span>
          <span
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 20,
              color: "#9aa3af",
              letterSpacing: "0.05em",
            }}
          >
            AI COMMAND CENTER · 7 DIVISIONS
          </span>
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        { name: "Inter Tight", data: semibold, weight: 600, style: "normal" },
        { name: "Inter Tight", data: bold, weight: 700, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
