import Link from "next/link";
import type { AnchorHTMLAttributes, ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "min-h-[46px] px-6 py-2.5 text-sm",
  lg: "min-h-[56px] px-8 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary: "bg-cta text-cta-fg hover:bg-cta-h",
  outline:
    "border border-accent/45 text-accent hover:border-accent hover:bg-accent/10",
  ghost: "text-text-1 hover:bg-white/5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type LinkProps = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & { href: string };
type NativeButtonProps = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

export function Button(props: LinkProps | NativeButtonProps) {
  const { variant = "primary", size = "lg", className = "", ...rest } = props;
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (typeof rest.href === "string") {
    const { href, children, ...anchorRest } = rest as LinkProps & {
      children?: React.ReactNode;
    };
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(external
          ? ({ target: "_blank", rel: "noopener noreferrer" } as AnchorHTMLAttributes<HTMLAnchorElement>)
          : {})}
        {...anchorRest}
      >
        {children}
      </Link>
    );
  }

  const { children, ...buttonRest } = rest as NativeButtonProps;
  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
