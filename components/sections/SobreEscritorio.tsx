import Image from "next/image";
import { Section, Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CredibilityBar } from "./CredibilityBar";
import { FIRM, STATS } from "@/lib/site";
import retrato from "@/public/brand/eduardo-sobre.jpg";

/**
 * Bloco "Sobre o escritório" reutilizado nas LPs e na Home. O texto-base vem
 * das copies, corrigido o erro de copy/paste que citava apenas "Direito do
 * Trabalho".
 */
export function SobreEscritorio({
  processos = STATS.processosTotal,
  withStats = true,
  tone = "deep",
}: {
  processos?: number;
  withStats?: boolean;
  tone?: "navy" | "deep";
}) {
  return (
    <Section tone={tone} id="escritorio">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-[1fr_20rem] md:gap-14 lg:grid-cols-[1fr_24rem]">
          <Reveal>
            <p className="eyebrow">Sobre o escritório</p>
            <p className="mt-6 font-sans text-lg leading-relaxed text-text-2">
              Com atuação em todo o Brasil, nosso escritório oferece soluções
              jurídicas especializadas em Direito Previdenciário e Trabalhista,
              unindo experiência, rigor técnico e atendimento próximo.
            </p>
            <p className="mt-4 font-sans leading-relaxed text-text-2">
              À frente da equipe está o{" "}
              <strong className="font-semibold text-text-1">
                {FIRM.lawyer}
              </strong>{" "}
              ({FIRM.oab}), advogado com mais de {FIRM.experienceYears} anos de
              experiência, com atuação estratégica na defesa dos direitos e
              interesses de seus clientes.
            </p>
            <p className="mt-4 font-sans leading-relaxed text-text-2">
              Acreditamos que o conhecimento especializado é a maior ferramenta
              contra a injustiça. Por isso, oferecemos um atendimento pautado
              pela transparência, pela confiança e pela busca do reconhecimento
              integral dos seus direitos.
            </p>
          </Reveal>

          <Reveal delayMs={120} className="relative mx-auto w-full max-w-xs md:max-w-none">
            <div className="overflow-hidden rounded-[var(--radius-l)] border border-border">
              <Image
                src={retrato}
                alt={`${FIRM.lawyer}, advogado responsável pelo escritório`}
                sizes="(max-width: 768px) 20rem, 24rem"
                className="h-auto w-full"
                placeholder="blur"
              />
            </div>
            <p className="mt-3 font-sans text-xs text-text-3">
              {FIRM.lawyer} — {FIRM.oab}
            </p>
          </Reveal>
        </div>

        {withStats ? (
          <div className="mt-14">
            <CredibilityBar
              stats={[
                {
                  value: STATS.experiencia,
                  label: "anos de experiência",
                  format: false,
                },
                { value: processos, label: "processos realizados" },
              ]}
            />
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
