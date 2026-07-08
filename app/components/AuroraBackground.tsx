export default function AuroraBackground({
  variant = "full",
}: {
  variant?: "full" | "subtle";
}) {
  const opacity = variant === "full" ? 1 : 0.55;

  return (
    <div className="aurora-field" style={{ opacity }} aria-hidden>
      <div
        className="aurora-blob aurora-blob-a"
        style={{
          top: "-10%",
          left: "-5%",
          width: "45%",
          height: "45%",
          background:
            "radial-gradient(circle, rgba(184,115,74,0.55), transparent 70%)",
        }}
      />
      <div
        className="aurora-blob aurora-blob-b"
        style={{
          top: "10%",
          right: "-10%",
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle, rgba(236,202,156,0.4), transparent 70%)",
        }}
      />
      <div
        className="aurora-blob aurora-blob-c"
        style={{
          bottom: "-15%",
          left: "20%",
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(140,80,50,0.35), transparent 70%)",
        }}
      />
    </div>
  );
}
