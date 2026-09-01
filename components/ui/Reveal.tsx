"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  as?: ElementType;
  delayMs?: number;
};

/**
 * Entrada suave ao rolar. Degrada com segurança: sem JS (ou se o
 * IntersectionObserver não disparar) o conteúdo permanece visível.
 * Só escondemos e animamos elementos que estão ABAIXO da viewport no
 * momento da montagem — nunca o conteúdo já visível.
 */
export function Reveal({
  as,
  delayMs = 0,
  className = "",
  style,
  ...rest
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "in">("static");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const rect = node.getBoundingClientRect();
    const belowFold = rect.top > window.innerHeight * 0.9;
    if (!belowFold) return; // já visível — deixa como está

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("in");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const cls =
    state === "hidden"
      ? "opacity-0"
      : state === "in"
        ? "animate-step-in"
        : "";

  return (
    <Tag
      ref={ref}
      className={`${cls} ${className}`}
      style={{ animationDelay: `${delayMs}ms`, ...style }}
      {...rest}
    />
  );
}
