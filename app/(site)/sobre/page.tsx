import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { STATS, FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "O escritório",
  description:
    "Eduardo Gomes Advogados — advocacia especializada em Direito Previdenciário e Trabalhista, à frente o Dr. Eduardo da Silva Gomes, com mais de 18 anos de atuação.",
  alternates: { canonical: "/sobre" },
};

// TODO (Fase 5): biografia completa do Dr. Eduardo, fotos do ensaio, NAP e mapa.

export default function SobrePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "O escritório", path: "/sobre" },
        ])}
      />

      <PageHero
        eyebrow="O escritório"
        title="Conhecimento especializado a serviço dos seus"
        accentWord="direitos"
        intro={`O ${FIRM.legalName} atua desde ${FIRM.since} em Direito Previdenciário e Trabalhista, com sede em ${FIRM.city}/${FIRM.state} e atendimento online para todo o Brasil.`}
      />

      <Section tone="deep">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="font-sans text-lg leading-relaxed text-text-2">
              À frente da equipe está o{" "}
              <strong className="font-semibold text-text-1">{FIRM.lawyer}</strong>
              , advogado com mais de {FIRM.experienceYears} anos de experiência,
              com atuação estratégica na defesa dos direitos e interesses de seus
              clientes.
            </p>
            <p className="mt-4 font-sans leading-relaxed text-text-2">
              Acreditamos que o conhecimento especializado é a maior ferramenta
              contra a injustiça. Por isso, oferecemos um atendimento pautado
              pela transparência, pela confiança e pela busca do reconhecimento
              integral dos seus direitos.
            </p>
          </Reveal>
          <div className="mt-12">
            <CredibilityBar
              stats={[
                { value: STATS.experiencia, label: "anos de experiência", format: false },
                { value: STATS.processosTotal, label: "processos realizados" },
              ]}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
