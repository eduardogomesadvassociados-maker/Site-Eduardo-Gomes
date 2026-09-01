import { Section, Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

export function ArgumentBlock({
  eyebrow,
  title,
  accentWord,
  paragraphs,
  tone = "navy",
  cta = true,
  id,
}: {
  eyebrow?: string;
  title: string;
  accentWord?: string;
  paragraphs: string[];
  tone?: "navy" | "deep";
  cta?: boolean;
  id?: string;
}) {
  return (
    <Section tone={tone} id={id}>
      <Container className="max-w-3xl">
        <Reveal>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className={`text-4xl ${eyebrow ? "mt-6" : ""}`}>
            {title}
            {accentWord ? (
              <>
                {" "}
                <span className="accent-word">{accentWord}</span>
              </>
            ) : null}
          </h2>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 font-sans leading-relaxed text-text-2">
              {p}
            </p>
          ))}
          {cta ? (
            <div className="mt-8">
              <WhatsAppCta />
            </div>
          ) : null}
        </Reveal>
      </Container>
    </Section>
  );
}
