// The "Intelligence, orchestrated." design uses flat charcoal surfaces
// with a single soft radial wash instead of animated aurora blobs.
export default function AuroraBackground({
  variant = "full",
}: {
  variant?: "full" | "subtle";
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          variant === "full"
            ? "radial-gradient(ellipse at 50% 0%, rgba(29,43,59,0.45), transparent 65%)"
            : "radial-gradient(ellipse at 50% 0%, rgba(29,43,59,0.3), transparent 60%)",
      }}
    />
  );
}
