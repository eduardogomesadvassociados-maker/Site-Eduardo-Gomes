import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { AtendimentoSteps } from "@/components/sections/AtendimentoSteps";
import { ArgumentBlock } from "@/components/sections/ArgumentBlock";
import { Testimonials } from "@/components/sections/Testimonials";
import { SobreEscritorio } from "@/components/sections/SobreEscritorio";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight } from "@/components/icons";
import { faqPageSchema } from "@/lib/structured-data";
import { STATS, FIRM } from "@/lib/site";
import eduardoCutout from "@/public/brand/eduardo-hero-cutout.webp";
import monogram from "@/public/brand/monogram-ouro.png";
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
    desc: "Atuação em aposentadorias, BPC/LOAS, benefícios por incapacidade, questões relacionadas ao INSS, aposentadoria de trabalhadores offshore e Previdência Internacional.",
    topics: ["Aposentadoria", "Aposentadoria especial", "Offshore", "BPC/LOAS", "Benefício negado", "Previdência internacional"],
    cta: "Conheça nossa atuação previdenciária",
  },
  {
    href: "/trabalhista",
    title: "Direito Trabalhista",
    desc: "Orientação jurídica para situações relacionadas à relação de trabalho, como problemas com jornada, horas extras, rescisão, FGTS, acúmulo ou desvio de função e outras questões trabalhistas.",
    topics: ["Rescisão indireta", "Horas extras", "Verbas rescisórias", "FGTS", "Acúmulo de função", "Assédio moral"],
    cta: "Conheça nossa atuação trabalhista",
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
      <section className="relative isolate overflow-hidden bg-[#0a1430]">
        {/* atmosfera */}
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0a1430] via-[#0e1a3a] to-[#0a1430]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[radial-gradient(115%_75%_at_74%_10%,rgba(201,162,74,0.13),transparent_58%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />

        {/* monograma — símbolo da marca, em escala, ao fundo */}
        <Image
          src={monogram}
          alt=""
          aria-hidden
          priority
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[38rem] max-w-none -translate-x-[70%] -translate-y-1/2 opacity-[0.06] blur-[0.5px] sm:w-[46rem]"
        />

        {/* Dr. Eduardo, sangrando à direita */}
        <Image
          src={eduardoCutout}
          alt={FIRM.lawyer}
          priority
          sizes="(max-width: 1024px) 92vw, 55vw"
          className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[82%] w-auto max-w-none object-contain object-bottom opacity-45 drop-shadow-[0_0_70px_rgba(201,162,74,0.16)] [mask-image:linear-gradient(to_bottom,#000_72%,transparent)] sm:h-[92%] sm:opacity-70 lg:h-[106%] lg:opacity-100 lg:[mask-image:linear-gradient(to_right,transparent,#000_12%)]"
        />

        {/* scrim para legibilidade */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a1430] via-[#0a1430]/80 to-transparent lg:from-[#0a1430]/95 lg:via-[#0a1430]/30 lg:to-transparent"
        />

        <div className="mx-auto flex min-h-[clamp(34rem,74vh,45rem)] w-full max-w-6xl flex-col justify-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-xl">
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
              <p className="mt-6 font-sans text-lg leading-relaxed text-text-2">
                Conte sua situação e receba orientação jurídica especializada em
                Direito Previdenciário e Trabalhista, com a transparência de quem
                prioriza o seu direito.
              </p>
            </Reveal>
            <Reveal delayMs={180}>
              <div className="mt-9">
                <WhatsAppCta />
              </div>
            </Reveal>
            <Reveal delayMs={240}>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-text-3">
                <li>Mais de {FIRM.experienceYears} anos de atuação</li>
                <li aria-hidden>·</li>
                <li>
                  Sede em {FIRM.city}/{FIRM.state}
                </li>
                <li aria-hidden>·</li>
                <li>Atendimento online para todo o Brasil</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <Section tone="deep" id="areas">
        <Container>
          <Reveal>
            <h2 className="text-4xl">
              Encontre orientação jurídica para a{" "}
              <span className="accent-word">sua situação</span>
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-text-2">
              Atuamos em diferentes demandas do Direito Previdenciário e do
              Direito do Trabalho, sempre considerando as particularidades de
              cada caso.
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
                  <p className="mt-3 font-sans text-sm leading-relaxed text-text-2">
                    {area.desc}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {area.topics.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border px-3 py-1 font-sans text-xs text-text-2"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent">
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

      {/* DEPOIMENTOS */}
      <Testimonials tone="navy" />

      {/* POR QUE BUSCAR ORIENTAÇÃO */}
      <ArgumentBlock
        tone="deep"
        eyebrow="Por que buscar orientação jurídica?"
        title="Antes de tomar uma decisão, entenda as possibilidades do"
        accentWord="seu caso"
        paragraphs={[
          "Pedir demissão, aceitar um acordo, solicitar um benefício ou tomar qualquer outra decisão relacionada à sua situação jurídica pode exigir uma análise cuidadosa.",
          "Uma orientação profissional ajuda você a compreender melhor seus direitos, avaliar as circunstâncias do caso e tomar decisões com mais segurança e informação.",
        ]}
      />

      {/* COMO FUNCIONA */}
      <Section tone="marfim" id="atendimento">
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

      <SobreEscritorio processos={STATS.processosTotal} tone="deep" />

      {/* FAQ */}
      <Section tone="navy" id="faq">
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
      <Section tone="deep" pad="lg">
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
