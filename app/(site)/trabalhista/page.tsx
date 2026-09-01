import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { AtendimentoSteps } from "@/components/sections/AtendimentoSteps";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import { STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Advogado Trabalhista — Rescisão, Horas Extras e Verbas",
  description:
    "Orientação em rescisão indireta, horas extras não pagas, verbas rescisórias, FGTS, acúmulo ou desvio de função, assédio moral e outras questões trabalhistas.",
  alternates: { canonical: "/trabalhista" },
};

// TODO (Fase 2): blocos de situações, depoimentos, "sobre o escritório" e FAQ
// completos a partir de Copy/COPY LANDINGPAGE | EDUARDO GOMES.pdf.

export default function TrabalhistaPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Direito Trabalhista",
            serviceType: "Assessoria jurídica trabalhista",
            description:
              "Atuação em rescisão indireta, horas extras, verbas rescisórias, FGTS, acúmulo e desvio de função e assédio moral.",
            path: "/trabalhista",
          }),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Direito Trabalhista", path: "/trabalhista" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Direito Trabalhista"
        title="Está com um problema no trabalho e não sabe se seus direitos foram respeitados?"
        intro="Se você passou por problemas com sua jornada, rescisão, funções exercidas ou outras situações no ambiente de trabalho, conte o que aconteceu para receber uma orientação jurídica adequada ao seu caso."
      />

      <Section tone="deep">
        <Container>
          <Reveal>
            <h2 className="text-4xl">
              Um atendimento estruturado para entender a{" "}
              <span className="accent-word">sua situação</span>
            </h2>
          </Reveal>
          <div className="mt-12">
            <AtendimentoSteps />
          </div>
        </Container>
      </Section>

      <Section tone="navy">
        <Container className="max-w-3xl">
          <CredibilityBar
            stats={[
              { value: STATS.experiencia, label: "anos de experiência", format: false },
              { value: STATS.processosTrabalhista, label: "processos realizados" },
            ]}
          />
          <div className="mt-10 flex justify-center">
            <WhatsAppCta />
          </div>
        </Container>
      </Section>
    </>
  );
}
