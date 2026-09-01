import { Section, Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS, GOOGLE_RATING } from "@/lib/testimonials";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span
      className="text-sm tracking-[0.15em] text-accent"
      aria-label={`${rating} de 5 estrelas`}
      role="img"
    >
      {"★".repeat(full)}
      <span className="text-text-3">{"★".repeat(5 - full)}</span>
    </span>
  );
}

/** Depoimentos do Google Meu Negócio. Não renderiza nada se ainda não há dados. */
export function Testimonials({ tone = "deep" }: { tone?: "navy" | "deep" }) {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <Section tone={tone} id="depoimentos">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-4xl">
              Veja o que os clientes falam{" "}
              <span className="accent-word">sobre nós</span>
            </h2>
            <p className="font-sans text-sm text-text-2">
              <span className="font-display text-2xl font-semibold text-accent">
                {GOOGLE_RATING.value.toLocaleString("pt-BR", {
                  minimumFractionDigits: 1,
                })}
              </span>{" "}
              <span className="align-middle text-accent">★★★★★</span>
              <br className="hidden sm:block" />
              {GOOGLE_RATING.count} avaliações no Google
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delayMs={Math.min(i, 3) * 70}
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
