import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico inicial",
    text: "Avaliamos as informações apresentadas e identificamos a natureza da sua demanda.",
  },
  {
    n: "02",
    title: "Análise do caso",
    text: "Consideramos os documentos, o histórico e demais informações relevantes para compreender a situação.",
  },
  {
    n: "03",
    title: "Orientação jurídica",
    text: "Esclarecemos suas dúvidas e apresentamos as possibilidades aplicáveis ao caso.",
  },
  {
    n: "04",
    title: "Definição dos próximos passos",
    text: "Orientamos sobre os caminhos que podem ser considerados a partir da análise realizada.",
  },
];

export function AtendimentoSteps() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-[var(--radius-l)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((step, i) => (
        <Reveal
          as="li"
          key={step.n}
          delayMs={i * 80}
          className="flex flex-col gap-3 bg-bg-2 p-7"
        >
          <span className="font-display text-3xl font-semibold text-accent">
            {step.n}
          </span>
          <span className="font-sans text-base font-semibold text-text-1">
            {step.title}
          </span>
          <span className="font-sans text-sm leading-relaxed text-text-2">
            {step.text}
          </span>
        </Reveal>
      ))}
    </ol>
  );
}
