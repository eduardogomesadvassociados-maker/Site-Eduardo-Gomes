import { CountUp } from "@/components/ui/CountUp";

type Stat = { value: number; suffix?: string; prefix?: string; label: string; format?: boolean };

/** "Formato cronômetro" pedido nas copies — anos de experiência + processos. */
export function CredibilityBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-[repeat(auto-fit,minmax(0,1fr))] sm:divide-x sm:divide-y-0">
      {stats.map((s) => (
        <div key={s.label} className="px-4 py-8 text-center sm:py-10">
          <p className="font-display text-4xl font-semibold text-accent md:text-5xl">
            {s.prefix ?? "+"}
            <CountUp
              target={s.value}
              suffix={s.suffix}
              format={s.format ?? true}
            />
          </p>
          <p className="mt-2 font-sans text-sm text-text-2">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
