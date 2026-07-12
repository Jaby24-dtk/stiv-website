import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageAlt = "STIV — Premium software, division by division";
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
          background: "#040508",
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 35%), linear-gradient(315deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 40%)",
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
              color: "#f2f2f2",
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
              color: "#8a8a8a",
              textTransform: "uppercase",
            }}
          >
            EST. 2026 · SINGAPORE
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#f2f2f2",
            }}
          >
            <span>Premium software,</span>
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #6e6e6e, #ffffff)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              division by division.
            </span>
          </div>
          <span style={{ display: "flex", fontSize: 24, color: "#8a8a8a" }}>
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
              color: "#8a8a8a",
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
              color: "#8a8a8a",
              letterSpacing: "0.05em",
            }}
          >
            7 DIVISIONS · ONE STANDARD
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
