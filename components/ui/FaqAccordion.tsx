"use client";

import { useId, useState } from "react";
import { ChevronDown } from "@/components/icons";
import type { FaqItem } from "@/lib/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const btnId = `${baseId}-btn-${i}`;
        return (
          <div key={item.question}>
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-start justify-between gap-5 py-6 text-left"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-sans text-xs font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-base font-semibold text-text-1 md:text-lg">
                    {item.question}
                  </span>
                </span>
                <ChevronDown
                  width={20}
                  height={20}
                  className={`mt-1 shrink-0 text-text-3 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="pb-7 pl-9 pr-4"
            >
              <p className="font-sans text-[0.975rem] leading-relaxed text-text-2">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
