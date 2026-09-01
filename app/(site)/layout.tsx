import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { JsonLd } from "@/components/seo/JsonLd";
import { legalServiceSchema, websiteSchema } from "@/lib/structured-data";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={[legalServiceSchema(), websiteSchema()]} />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cta focus:px-5 focus:py-2 focus:font-sans focus:text-sm focus:font-semibold focus:text-cta-fg"
      >
        Ir para o conteúdo
      </a>
      <NavBar />
      <main id="conteudo" className="flex flex-1 flex-col">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
