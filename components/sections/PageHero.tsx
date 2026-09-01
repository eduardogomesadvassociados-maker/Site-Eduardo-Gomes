import { Section, Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  accentWord,
  intro,
  tag,
  children,
}: {
  eyebrow: string;
  /** String simples ou trecho JSX com <span className="accent-word"> nos destaques. */
  title: ReactNode;
  accentWord?: string;
  intro?: ReactNode;
  tag?: string;
  children?: ReactNode;
}) {
  return (
    <Section tone="navy" pad="hero" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <Container className="max-w-4xl">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delayMs={60}>
          <h1 className="mt-6 text-4xl md:text-5xl">
            {title}
            {accentWord ? (
              <>
                {" "}
                <span className="accent-word">{accentWord}</span>
              </>
            ) : null}
          </h1>
        </Reveal>
        {intro ? (
          <Reveal delayMs={120}>
            <div className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-text-2">
              {intro}
            </div>
          </Reveal>
        ) : null}
        <Reveal delayMs={180}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <WhatsAppCta />
            {tag ? (
              <span className="rounded-full border border-accent/35 px-3.5 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-accent">
                {tag}
              </span>
            ) : null}
          </div>
        </Reveal>
        {children}
      </Container>
    </Section>
  );
}
