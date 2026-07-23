import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "STIV",
    short_name: "STIV",
    description:
      "Premium, purpose-built enterprise software for every business division.",
    start_url: "/",
    display: "standalone",
    background_color: "#040508",
    theme_color: "#040508",
    icons: [
      {
        src: "/stiv-logo-mark.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

