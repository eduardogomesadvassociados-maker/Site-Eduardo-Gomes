import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { SobreEscritorio } from "@/components/sections/SobreEscritorio";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight, MapPin, Clock } from "@/components/icons";
import { breadcrumbSchema, personSchema } from "@/lib/structured-data";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "O escritório",
  description:
    "Eduardo Gomes Advogados — advocacia especializada em Direito Previdenciário e Trabalhista, à frente o Dr. Eduardo da Silva Gomes (OAB/RJ 146.846), com mais de 18 anos de atuação e sede em Nova Iguaçu/RJ.",
  alternates: { canonical: "/sobre" },
};

// TODO: biografia completa do Dr. Eduardo (o cliente vai enviar) — entra aqui,
// entre a SobreEscritorio e as áreas de atuação.

const areas = [
  { href: "/previdenciario", label: "Direito Previdenciário" },
  { href: "/trabalhista", label: "Direito Trabalhista" },
];

export default function SobrePage() {
  return (
    <>
      <JsonLd
        data={[
          personSchema(),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "O escritório", path: "/sobre" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="O escritório"
        title="Conhecimento especializado a serviço dos seus"
        accentWord="direitos"
        intro={`O ${FIRM.legalName} atua desde ${FIRM.since} em Direito Previdenciário e Trabalhista, com sede em ${FIRM.city}/${FIRM.state} e atendimento online para todo o Brasil.`}
      />

      <SobreEscritorio tone="deep" />

      {/* ÁREAS DE ATUAÇÃO */}
      <Section tone="navy">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-4xl">
              Áreas de <span className="accent-word">atuação</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {areas.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group flex items-center justify-between rounded-[var(--radius-m)] border border-border bg-bg-2 px-5 py-4 font-sans text-sm font-semibold text-text-1 transition-colors hover:border-accent/50"
              >
                {a.label}
                <ArrowRight
                  width={16}
                  height={16}
                  className="text-accent transition-transform group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CONTATO / SEDE */}
      <Section tone="deep">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-4xl">
              Onde <span className="accent-word">estamos</span>
            </h2>
            <div className="mt-8 space-y-3">
              <p className="flex items-start gap-3 font-sans text-text-2">
                <MapPin width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  {FIRM.address.building} — {FIRM.address.street}
                  <br />
                  {FIRM.address.district}, {FIRM.city}/{FIRM.state} · CEP{" "}
                  {FIRM.address.postalCode}
                </span>
              </p>
              <p className="flex items-start gap-3 font-sans text-text-2">
                <Clock width={18} height={18} className="mt-0.5 shrink-0 text-accent" />
                {FIRM.hours}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppCta />
              <Link
                href={FIRM.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center rounded-full border border-accent/45 px-6 font-sans text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/10"
              >
                Ver no Google Maps
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
