import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { SituationsGrid } from "@/components/sections/SituationsGrid";
import { ArgumentBlock } from "@/components/sections/ArgumentBlock";
import { AtendimentoSteps } from "@/components/sections/AtendimentoSteps";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { SobreEscritorio } from "@/components/sections/SobreEscritorio";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import { STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Advogado Trabalhista — Rescisão, Horas Extras e Verbas",
  description:
    "Orientação jurídica em rescisão indireta, horas extras não pagas, verbas rescisórias, FGTS, acúmulo ou desvio de função, assédio moral e outras questões da relação de trabalho. Atendimento online para todo o Brasil.",
  alternates: { canonical: "/trabalhista" },
};

// TODO: a copy do cliente não traz FAQ para esta LP. Vale adicionar um FAQ
// trabalhista (bom para SEO/GEO e paridade com a LP Previdenciária) — a
// redigir e aprovar com o cliente.

const situations = [
  {
    title: "Rescisão indireta",
    text: "Salários atrasados, FGTS não depositado, horas extras não pagas ou outras irregularidades graves cometidas pela empresa podem tornar insustentável a continuidade do vínculo de trabalho.",
  },
  {
    title: "Horas extras não pagas",
    text: "Trabalho antes ou depois do expediente, aos finais de semana ou em dias de folga sem o devido pagamento ou compensação das horas trabalhadas.",
  },
  {
    title: "Acúmulo de função",
    text: "O trabalhador passa a exercer outras funções ou assumir responsabilidades além daquelas para as quais foi contratado, sem a devida regularização.",
  },
  {
    title: "Problemas com o FGTS",
    text: "Depósitos que não foram realizados, estão atrasados ou apresentam valores divergentes durante o período de trabalho.",
  },
  {
    title: "Problemas na rescisão",
    text: "Dúvidas ou divergências no pagamento de verbas rescisórias, como férias, 13º salário, aviso-prévio, FGTS e demais valores relacionados ao encerramento do contrato.",
  },
  {
    title: "Assédio moral",
    text: "Humilhações, ameaças, constrangimentos, perseguições ou cobranças abusivas que se repetem e ultrapassam os limites da relação profissional.",
  },
  {
    title: "Outras situações trabalhistas",
    text: "Problemas relacionados a salário, jornada, férias, registro, adicionais ou outras obrigações da empresa também podem ser analisados.",
  },
];

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

      {/* SITUAÇÕES */}
      <Section tone="deep" id="situacoes">
        <Container>
          <Reveal>
            <h2 className="text-4xl">
              Você se identifica com alguma destas{" "}
              <span className="accent-word">situações?</span>
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-text-2">
              Se você está passando por uma dessas situações, conversar com um
              advogado pode ajudar a entender o que aconteceu e quais
              possibilidades existem no seu caso.
            </p>
          </Reveal>
          <div className="mt-12">
            <SituationsGrid items={situations} />
          </div>
          <div className="mt-10">
            <WhatsAppCta />
          </div>
        </Container>
      </Section>

      {/* CRONÔMETRO */}
      <Section tone="navy" pad="tight">
        <Container className="max-w-3xl">
          <CredibilityBar
            stats={[
              { value: STATS.experiencia, label: "anos de experiência", format: false },
              { value: STATS.processosTrabalhista, label: "processos realizados" },
            ]}
          />
        </Container>
      </Section>

      {/* COMO FUNCIONA */}
      <Section tone="deep" id="atendimento">
        <Container>
          <Reveal>
            <h2 className="text-4xl">
              Como funciona o <span className="accent-word">atendimento</span>
            </h2>
          </Reveal>
          <div className="mt-12">
            <AtendimentoSteps />
          </div>
          <div className="mt-10">
            <WhatsAppCta />
          </div>
        </Container>
      </Section>

      {/* POR QUE BUSCAR ORIENTAÇÃO ANTES DE DECIDIR */}
      <ArgumentBlock
        tone="navy"
        eyebrow="Por que buscar orientação antes de tomar uma decisão?"
        title="Uma decisão tomada sem informação pode ter"
        accentWord="consequências"
        paragraphs={[
          "Pedir demissão, aceitar um acordo, assinar documentos ou simplesmente deixar uma situação trabalhista sem resposta são decisões que podem ter implicações jurídicas.",
          "Antes de tomar qualquer atitude, é importante entender o que aconteceu, quais direitos podem estar envolvidos e quais caminhos podem ser considerados para a sua situação. Uma orientação jurídica adequada ajuda você a tomar decisões com mais segurança e conhecimento sobre o seu caso.",
        ]}
      />

      <Testimonials />

      <SobreEscritorio processos={STATS.processosTrabalhista} tone="deep" />

      {/* CTA FINAL */}
      <Section tone="navy" pad="lg">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <h2 className="max-w-2xl text-4xl md:text-5xl">
              Conte o que aconteceu e receba uma{" "}
              <span className="accent-word">orientação</span>
            </h2>
            <div className="mt-8">
              <WhatsAppCta />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
