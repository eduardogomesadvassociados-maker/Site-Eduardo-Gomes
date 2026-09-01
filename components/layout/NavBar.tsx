"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";
import { Menu, Close } from "@/components/icons";
import { NAV_LINKS } from "@/lib/site";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Fecha o menu mobile ao navegar.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-0/85 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 font-sans text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-accent"
                  : "text-text-2 hover:text-text-1"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <WhatsAppCta size="md" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-text-1 hover:bg-white/5 lg:hidden"
        >
          {open ? <Close width={22} height={22} /> : <Menu width={22} height={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg-0 lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-6">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ animationDelay: `${i * 35}ms` }}
                className="animate-step-in rounded-[var(--radius-m)] px-4 py-3 font-sans text-[0.95rem] font-medium text-text-1 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppCta className="mt-3 w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
