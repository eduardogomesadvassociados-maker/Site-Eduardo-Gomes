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
  title: "Advogado Previdenciário — Aposentadoria, INSS e BPC/LOAS",
  description:
    "Orientação em aposentadoria, aposentadoria especial e offshore, BPC/LOAS, benefícios por incapacidade, revisão de benefício negado pelo INSS e Previdência Internacional.",
  alternates: { canonical: "/previdenciario" },
};

// TODO (Fase 1): blocos de situações, depoimentos, "sobre o escritório" e FAQ
// completos a partir de Copy/COPY LANDINGPAGE | EDUARDO GOMES-2.pdf.

export default function PrevidenciarioPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Direito Previdenciário",
            serviceType: "Assessoria jurídica previdenciária",
            description:
              "Atuação em aposentadorias, BPC/LOAS, benefícios por incapacidade, revisão de benefícios do INSS e Previdência Internacional.",
            path: "/previdenciario",
          }),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Direito Previdenciário", path: "/previdenciario" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Direito Previdenciário"
        title="Precisa de orientação sobre aposentadoria ou algum benefício do INSS?"
        intro="Aposentadoria, BPC/LOAS, benefícios por incapacidade e outras questões previdenciárias podem depender do seu histórico e das particularidades do seu caso. Converse com um advogado e entenda quais caminhos podem existir para a sua situação."
        tag="Atendimento previdenciário"
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
              { value: STATS.processosPrevidenciario, label: "processos realizados" },
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
