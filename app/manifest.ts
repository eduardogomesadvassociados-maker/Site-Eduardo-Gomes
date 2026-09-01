import type { MetadataRoute } from "next";
import { FIRM } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${FIRM.shortName} — Direito Previdenciário e Trabalhista`,
    short_name: FIRM.shortName,
    description:
      "Advocacia especializada em Direito Previdenciário e Trabalhista, com mais de 18 anos de atuação.",
    start_url: "/",
    display: "browser",
    lang: "pt-BR",
    background_color: "#0E1A3A",
    theme_color: "#0E1A3A",
    icons: [
      { src: "/brand/favicon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/brand/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
