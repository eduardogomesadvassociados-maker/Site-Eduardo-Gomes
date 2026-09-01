import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, FIRM } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${FIRM.shortName} — Direito Previdenciário e Trabalhista`,
    template: `%s | ${FIRM.shortName}`,
  },
  description:
    "Escritório de advocacia com mais de 18 anos de atuação em Direito Previdenciário e Trabalhista. Atendimento online para todo o Brasil, com sede em Nova Iguaçu/RJ.",
  applicationName: FIRM.shortName,
  authors: [{ name: FIRM.lawyer }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: FIRM.shortName,
    url: SITE_URL,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${FIRM.shortName} — Direito Previdenciário e Trabalhista`,
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  category: "Advocacia",
};

export const viewport: Viewport = {
  themeColor: "#0E1A3A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
