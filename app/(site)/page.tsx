import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { AtendimentoSteps } from "@/components/sections/AtendimentoSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight } from "@/components/icons";
import { faqPageSchema } from "@/lib/structured-data";
import { STATS, FIRM } from "@/lib/site";
import type { FaqItem } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Advocacia em Direito Previdenciário e Trabalhista",
  description:
    "Antes de tomar uma decisão, conheça seus direitos. Orientação jurídica especializada em Direito Previdenciário e Trabalhista, com mais de 18 anos de atuação e atendimento online para todo o Brasil.",
  alternates: { canonical: "/" },
};

const areas = [
  {
    href: "/previdenciario",
    title: "Direito Previdenciário",
    desc: "Aposentadorias, BPC/LOAS, benefícios por incapacidade, questões com o INSS, aposentadoria de trabalhadores offshore e Previdência Internacional.",
    cta: "Conheça a atuação previdenciária",
  },
  {
    href: "/trabalhista",
    title: "Direito Trabalhista",
    desc: "Jornada e horas extras, rescisão indireta, verbas rescisórias, FGTS, acúmulo ou desvio de função, assédio moral e outras questões da relação de trabalho.",
    cta: "Conheça a atuação trabalhista",
  },
];

const faq: FaqItem[] = [
  {
    question:
      "Preciso saber exatamente qual é o meu problema jurídico antes de entrar em contato?",
    answer:
      "Não. Você pode explicar a situação da maneira que conseguir. A partir das informações apresentadas, a equipe poderá direcionar o atendimento.",
  },
  {
    question: "O escritório atende somente no Rio de Janeiro?",
    answer:
      "O escritório está localizado em Nova Iguaçu, no Rio de Janeiro, e possui atuação de abrangência nacional.",
  },
  {
    question: "O atendimento pode ser realizado de forma online?",
    answer:
      "Sim, o escritório oferece atendimento online, permitindo que você converse com a equipe sem precisar se deslocar. O formato do atendimento pode variar de acordo com a situação e a necessidade de cada caso.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faq)} />

      {/* HERO */}
      <Section tone="navy" pad="hero" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />
        <Container className="max-w-4xl">
          <Reveal>
            <p className="eyebrow">Advocacia Previdenciária e Trabalhista</p>
          </Reveal>
          <Reveal delayMs={60}>
            <h1 className="mt-6 text-5xl md:text-6xl">
              Antes de tomar uma decisão,{" "}
              <span className="accent-word">conheça seus direitos.</span>
            </h1>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-text-2">
              Conte sua situação e receba orientação jurídica especializada em
              Direito Previdenciário e Trabalhista, com a transparência de quem
              prioriza o seu direito.
            </p>
          </Reveal>
          <Reveal delayMs={180}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <WhatsAppCta />
              <span className="font-sans text-sm text-text-3">
                Atendimento online para todo o Brasil
              </span>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ÁREAS */}
      <Section tone="deep">
        <Container>
          <Reveal>
            <h2 className="text-4xl">
              Encontre orientação jurídica para a{" "}
              <span className="accent-word">sua situação</span>
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-text-2">
              Atuamos em diferentes demandas do Direito do Trabalho e do Direito
              Previdenciário, sempre considerando as particularidades de cada
              caso.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {areas.map((area, i) => (
              <Reveal key={area.href} delayMs={i * 90}>
                <Link
                  href={area.href}
                  className="group flex h-full flex-col rounded-[var(--radius-l)] border border-border bg-bg-2 p-8 transition-colors hover:border-accent/50"
                >
                  <h3 className="font-display text-2xl font-semibold text-text-1">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-text-2">
                    {area.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent">
                    {area.cta}
                    <ArrowRight
                      width={16}
                      height={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* POR QUE BUSCAR ORIENTAÇÃO */}
      <Section tone="navy">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Por que buscar orientação jurídica?</p>
            <h2 className="mt-6 text-4xl">
              Antes de tomar uma decisão, entenda as possibilidades do seu caso
            </h2>
            <p className="mt-5 font-sans text-text-2">
              Pedir demissão, aceitar um acordo, solicitar um benefício ou tomar
              qualquer outra decisão relacionada à sua situação jurídica pode
              exigir uma análise cuidadosa.
            </p>
            <p className="mt-4 font-sans text-text-2">
              Uma orientação profissional ajuda você a compreender melhor seus
              direitos, avaliar as circunstâncias do caso e tomar decisões com
              mais segurança e informação.
            </p>
            <div className="mt-8">
              <WhatsAppCta />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* COMO FUNCIONA */}
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
          <div className="mt-10">
            <WhatsAppCta />
          </div>
        </Container>
      </Section>

      {/* SOBRE + CRONÔMETRO */}
      <Section tone="navy">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Sobre o escritório</p>
            <p className="mt-6 font-sans text-lg leading-relaxed text-text-2">
              À frente da equipe está o{" "}
              <strong className="font-semibold text-text-1">
                {FIRM.lawyer}
              </strong>
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

      {/* FAQ */}
      <Section tone="deep">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="text-4xl">Perguntas frequentes</h2>
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
              Conte sua situação e receba uma{" "}
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
