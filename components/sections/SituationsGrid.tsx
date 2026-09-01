import { Reveal } from "@/components/ui/Reveal";

export interface Situation {
  title: string;
  text: string;
}

/**
 * Lista editorial de situações — funciona com qualquer quantidade de itens
 * (não "sobra canto" como num grid de 3 colunas). Título em ouro, descrição
 * em destaque, linhas separadas por fio.
 */
export function SituationsGrid({ items }: { items: Situation[] }) {
  return (
    <ol className="border-t border-border">
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item.title}
          delayMs={Math.min(i, 4) * 55}
          className="grid gap-2 border-b border-border py-7 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-10 md:py-8"
        >
          <h3 className="flex items-baseline gap-3 font-display text-xl font-semibold text-accent md:text-2xl">
            <span
              aria-hidden
              className="font-sans text-xs font-semibold text-text-3"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.title}
          </h3>
          <p className="font-sans text-[0.975rem] font-bold leading-relaxed text-text-1">
            {item.text}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}
