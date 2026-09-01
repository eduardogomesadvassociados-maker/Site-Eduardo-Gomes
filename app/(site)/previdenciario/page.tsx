import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { SituationsGrid } from "@/components/sections/SituationsGrid";
import { ArgumentBlock } from "@/components/sections/ArgumentBlock";
import { AtendimentoSteps } from "@/components/sections/AtendimentoSteps";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { SobreEscritorio } from "@/components/sections/SobreEscritorio";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";
import { STATS } from "@/lib/site";
import type { FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Advogado Previdenciário — Aposentadoria, INSS e BPC/LOAS",
  description:
    "Orientação jurídica em aposentadoria, aposentadoria especial e de trabalhadores offshore, BPC/LOAS, benefícios por incapacidade, benefício negado pelo INSS e Previdência Internacional. Atendimento online para todo o Brasil.",
  alternates: { canonical: "/previdenciario" },
};

const situations = [
  {
    title: "Aposentadoria",
    text: "Dúvidas sobre o momento de se aposentar, tempo de contribuição, regras aplicáveis ou necessidade de planejamento antes de solicitar o benefício.",
  },
  {
    title: "Aposentadoria especial",
    text: "Atuação relacionada a trabalhadores que exerceram atividades em condições que podem envolver exposição a agentes prejudiciais à saúde ou à integridade física.",
  },
  {
    title: "Aposentadoria para trabalhadores offshore",
    text: "Análise da atividade exercida em plataformas e do histórico profissional para avaliar questões relacionadas ao tempo especial e às possibilidades de aposentadoria.",
  },
  {
    title: "BPC/LOAS",
    text: "Orientação para pessoas com deficiência ou idosos que buscam entender os requisitos para acesso ao Benefício de Prestação Continuada e situações relacionadas ao pedido do benefício.",
  },
  {
    title: "Benefícios por incapacidade",
    text: "Situações em que problemas de saúde ou incapacidade para o trabalho geram dúvidas sobre a possibilidade de solicitar benefícios previdenciários.",
  },
  {
    title: "Benefício negado pelo INSS",
    text: "O pedido foi indeferido ou o benefício foi interrompido e você precisa entender o motivo da decisão e quais possibilidades existem para o seu caso.",
  },
  {
    title: "Previdência internacional",
    text: "Orientação relacionada a períodos de contribuição ou trabalho em outros países, incluindo situações envolvendo acordos previdenciários internacionais.",
  },
];

const faq: FaqItem[] = [
  {
    question: "O INSS negou meu benefício. O que posso fazer?",
    answer:
      "Primeiro, é importante entender o motivo do indeferimento. O INSS pode negar um pedido por diferentes razões, como falta de documentação, não cumprimento dos requisitos ou informações insuficientes no processo. A análise da decisão e dos documentos permite avaliar quais medidas podem ser tomadas no seu caso.",
  },
  {
    question: "Quem pode ter direito ao BPC/LOAS?",
    answer:
      "O BPC/LOAS é destinado a pessoas com deficiência de qualquer idade e idosos com 65 anos ou mais que atendam aos requisitos previstos para o benefício. Diferentemente da aposentadoria, o BPC não exige contribuições ao INSS. No caso da pessoa com deficiência, é necessário avaliar também a existência de impedimento de longo prazo e as condições socioeconômicas do grupo familiar.",
  },
  {
    question: "Como saber se posso solicitar minha aposentadoria?",
    answer:
      "É necessário analisar principalmente idade, tempo de contribuição, períodos registrados no INSS e as atividades profissionais exercidas. Dependendo do histórico, diferentes regras podem se aplicar. Por isso, antes de solicitar a aposentadoria, uma análise previdenciária pode ajudar a identificar qual regra se enquadra na sua situação.",
  },
  {
    question: "Trabalhei ou contribuí em outro país. Esse período pode ser considerado?",
    answer:
      "Pode ser possível utilizar períodos de contribuição realizados no exterior quando existe acordo previdenciário entre o Brasil e o país em questão. O escritório atua com situações relacionadas a Portugal, Espanha e Estados Unidos, analisando como esses períodos podem ser considerados conforme o acordo aplicável ao caso.",
  },
  {
    question: "Preciso reunir documentos antes de falar com um advogado?",
    answer:
      "Se você já tiver documentos como CNIS, carteira de trabalho, documentos de contribuição, decisões do INSS ou comprovantes relacionados ao benefício, é interessante tê-los em mãos. Mas não é necessário saber previamente quais documentos são necessários: durante o atendimento, a equipe poderá orientar sobre o que deve ser apresentado para a análise do caso.",
  },
  {
    question: "O atendimento pode ser realizado de forma online?",
    answer:
      "Sim, o escritório oferece atendimento online, permitindo que você converse com a equipe sem precisar se deslocar. O formato do atendimento pode variar de acordo com a situação e a necessidade de cada caso.",
  },
];

export default function PrevidenciarioPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Direito Previdenciário",
            serviceType: "Assessoria jurídica previdenciária",
            description:
              "Atuação em aposentadorias, aposentadoria especial e offshore, BPC/LOAS, benefícios por incapacidade, revisão de benefícios negados pelo INSS e Previdência Internacional.",
            path: "/previdenciario",
          }),
          faqPageSchema(faq),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Direito Previdenciário", path: "/previdenciario" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Direito Previdenciário"
        title={
          <>
            Precisa de orientação sobre{" "}
            <span className="accent-word">
              aposentadoria ou algum benefício do INSS?
            </span>
          </>
        }
        intro={
          <>
            Converse com um advogado e entenda quais caminhos podem existir para
            a sua situação previdenciária. Aposentadoria, BPC/LOAS, benefícios por
            incapacidade e outras questões podem depender do seu histórico e das
            particularidades do seu caso.
          </>
        }
      />

      {/* SITUAÇÕES */}
      <Section tone="deep" id="situacoes">
        <Container>
          <Reveal>
            <h2 className="text-4xl">
              Encontre a orientação para a situação que você está{" "}
              <span className="accent-word">enfrentando</span>
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-text-2">
              Cada situação previdenciária possui regras e particularidades
              próprias. Entender o seu caso é o primeiro passo para saber como
              proceder.
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
              { value: STATS.processosPrevidenciario, label: "processos realizados" },
            ]}
          />
        </Container>
      </Section>

      {/* DEPOIMENTOS */}
      <Testimonials tone="deep" />

      {/* ENTENDA SUA SITUAÇÃO */}
      <ArgumentBlock
        tone="navy"
        eyebrow="Entenda sua situação previdenciária"
        title="Cada histórico de contribuição pode levar a uma análise"
        accentWord="diferente"
        paragraphs={[
          "Tempo de contribuição, atividade profissional, idade, documentos e histórico junto ao INSS são alguns dos fatores que podem influenciar uma questão previdenciária.",
          "Por isso, antes de fazer um pedido ou tomar uma decisão, é importante entender como as regras se aplicam ao seu caso.",
        ]}
      />

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

      <SobreEscritorio processos={STATS.processosPrevidenciario} tone="navy" />

      {/* FAQ */}
      <Section tone="deep" id="faq">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-4xl">
              Perguntas frequentes sobre Direito Previdenciário
            </h2>
          </Reveal>
          <div className="mt-10">
            <FaqAccordion items={faq} />
          </div>
        </Container>
      </Section>

      {/* CTA FINAL */}
      <Section tone="navy" pad="lg">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <h2 className="max-w-2xl text-4xl md:text-5xl">
              Converse com um advogado e entenda o seu{" "}
              <span className="accent-word">caso</span>
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
