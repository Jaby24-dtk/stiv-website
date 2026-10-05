import Image from "next/image";

// The STIV mark (copper "S" monogram) used wherever the brand appears.
export default function Logo({
  size = 34,
  priority = false,
}: {
  size?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/stiv-logo-mark.png"
      alt=""
      width={size}
      height={size}
      className="logo-mark"
      style={{ width: size, height: size }}
      priority={priority}
    />
  );
}
