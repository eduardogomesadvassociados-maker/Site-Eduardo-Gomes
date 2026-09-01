import { Section, Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CredibilityBar } from "./CredibilityBar";
import { FIRM, STATS } from "@/lib/site";

/**
 * Bloco "Sobre o escritório" reutilizado nas LPs. O texto-base vem das copies,
 * corrigido o erro de copy/paste que citava apenas "Direito do Trabalho".
 */
export function SobreEscritorio({
  processos = STATS.processosTotal,
  withStats = true,
}: {
  processos?: number;
  withStats?: boolean;
}) {
  return (
    <Section tone="navy" id="escritorio">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="eyebrow">Sobre o escritório</p>
          <p className="mt-6 font-sans text-lg leading-relaxed text-text-2">
            Com atuação em todo o Brasil, nosso escritório oferece soluções
            jurídicas especializadas em Direito Previdenciário e Trabalhista,
            unindo experiência, rigor técnico e atendimento próximo.
          </p>
          <p className="mt-4 font-sans leading-relaxed text-text-2">
            À frente da equipe está o{" "}
            <strong className="font-semibold text-text-1">{FIRM.lawyer}</strong>,
            advogado com mais de {FIRM.experienceYears} anos de experiência, com
            atuação estratégica na defesa dos direitos e interesses de seus
            clientes.
          </p>
          <p className="mt-4 font-sans leading-relaxed text-text-2">
            Acreditamos que o conhecimento especializado é a maior ferramenta
            contra a injustiça. Por isso, oferecemos um atendimento pautado pela
            transparência, pela confiança e pela busca do reconhecimento integral
            dos seus direitos.
          </p>
        </Reveal>
        {withStats ? (
          <div className="mt-12">
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
