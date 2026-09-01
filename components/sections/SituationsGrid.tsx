import { Reveal } from "@/components/ui/Reveal";

export interface Situation {
  title: string;
  text: string;
}

export function SituationsGrid({ items }: { items: Situation[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-[var(--radius-l)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal
          key={item.title}
          delayMs={(i % 3) * 70}
          className="flex flex-col gap-2.5 bg-bg-2 p-6 md:p-7"
        >
          <h3 className="font-display text-xl font-semibold text-text-1">
            {item.title}
          </h3>
          <p className="font-sans text-sm leading-relaxed text-text-2">
            {item.text}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
