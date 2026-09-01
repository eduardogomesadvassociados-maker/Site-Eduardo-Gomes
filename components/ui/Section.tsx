import type { ComponentPropsWithoutRef } from "react";

type Tone = "navy" | "deep" | "marfim";
type Pad = "default" | "hero" | "tight" | "lg";

const toneClasses: Record<Tone, string> = {
  navy: "bg-bg-0 text-text-1",
  deep: "bg-bg-1 text-text-1",
  marfim: "bg-bg-0 text-text-1",
};

const padClasses: Record<Pad, string> = {
  default: "py-20 md:py-28",
  hero: "pt-14 pb-20 md:pt-20 md:pb-24",
  tight: "py-12 md:py-16",
  lg: "py-24 md:py-32",
};

export function Section({
  tone = "navy",
  pad = "default",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"section"> & { tone?: Tone; pad?: Pad }) {
  return (
    <section
      data-tone={tone === "marfim" ? "marfim" : undefined}
      className={`w-full ${padClasses[pad]} ${toneClasses[tone]} ${className}`}
      {...props}
    />
  );
}

export function Container({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}
      {...props}
    />
  );
}
