import { Section, Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="text-accent"
      aria-label={`${rating} de 5 estrelas`}
      role="img"
    >
      {"★".repeat(Math.round(rating))}
      <span className="text-text-3">{"★".repeat(5 - Math.round(rating))}</span>
    </span>
  );
}

/** Depoimentos do Google Meu Negócio. Não renderiza nada se ainda não há dados. */
export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <Section tone="navy">
      <Container>
        <Reveal>
          <h2 className="text-4xl">
            Veja o que nossos clientes <span className="accent-word">falam</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delayMs={i * 80}
              className="flex flex-col gap-4 rounded-[var(--radius-l)] border border-border bg-bg-2 p-7"
            >
              <Stars rating={t.rating} />
              <p className="flex-1 font-sans text-sm leading-relaxed text-text-2">
                “{t.text}”
              </p>
              <p className="font-sans text-sm font-semibold text-text-1">
                {t.name}
                {t.source ? (
                  <span className="ml-2 font-normal text-text-3">
                    · {t.source}
                  </span>
                ) : null}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
