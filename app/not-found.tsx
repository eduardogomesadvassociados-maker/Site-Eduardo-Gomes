import Link from "next/link";
import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { Section, Container } from "@/components/ui/Section";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className="flex flex-1 flex-col">
        <Section tone="navy" pad="lg">
          <Container className="max-w-2xl text-center">
            <p className="eyebrow justify-center">Erro 404</p>
            <h1 className="mt-6 text-4xl md:text-5xl">
              Não encontramos a página que você{" "}
              <span className="accent-word">procurava</span>
            </h1>
            <p className="mt-5 font-sans text-text-2">
              O endereço pode ter mudado ou não existe mais. Você pode voltar ao
              início ou falar diretamente com a equipe.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex min-h-[56px] items-center rounded-full border border-accent/45 px-8 font-sans text-base font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/10"
              >
                Voltar ao início
              </Link>
              <WhatsAppCta />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
