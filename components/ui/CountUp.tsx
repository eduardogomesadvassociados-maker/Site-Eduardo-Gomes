"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Contador animado ("cronômetro de credibilidade"). Degrada com segurança:
 * o valor final é renderizado no HTML (SSR) e só é animado a partir do zero
 * quando o elemento entra na viewport num cliente com JS.
 */
export function CountUp({
  target,
  durationMs = 1400,
  prefix = "",
  suffix = "",
  format = true,
}: {
  target: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  format?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(target);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const rect = node.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) return; // não anima o que já está na tela

    setValue(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, durationMs]);

  const shown = format ? value.toLocaleString("pt-BR") : String(value);
  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
