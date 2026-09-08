import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Section";
import {
  WhatsAppIcon,
  InstagramIcon,
  MapPin,
  Clock,
  Phone,
} from "@/components/icons";
import { CONTACT, FIRM } from "@/lib/site";
import lockup from "@/public/brand/logo-lockup-ouro.png";

const areas = [
  { label: "Direito Previdenciário", href: "/previdenciario" },
  { label: "Direito Trabalhista", href: "/trabalhista" },
];

const institucional = [
  { label: "O escritório", href: "/sobre" },
  { label: "Contato", href: "/contato" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-1">
      <Container className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:grid-cols-4 md:py-20">
        <div className="col-span-2 space-y-5 md:col-span-1">
          <Image
            src={lockup}
            alt={FIRM.shortName}
            width={180}
            height={112}
            className="h-auto w-36"
          />
          <p className="max-w-xs font-sans text-sm leading-relaxed text-text-2">
            Advocacia especializada em Direito Previdenciário e Trabalhista, com
            mais de {FIRM.experienceYears} anos de atuação.
          </p>
          <div className="flex gap-2.5">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp do escritório"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-text-1 transition-colors hover:border-accent hover:text-accent"
            >
              <WhatsAppIcon width={17} height={17} />
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do escritório"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-text-1 transition-colors hover:border-accent hover:text-accent"
            >
              <InstagramIcon width={17} height={17} />
            </a>
          </div>
        </div>

        <FooterCol title="Áreas de atuação" links={areas} />
        <FooterCol title="Institucional" links={institucional} />

        <div className="space-y-3">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-text-3">
            Atendimento
          </p>
          <p className="flex items-start gap-2.5 font-sans text-sm text-text-2">
            <MapPin width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
            <span>
              {FIRM.address.street}
              <br />
              {FIRM.address.district}, {FIRM.city}/{FIRM.state}
              <br />
              Atendimento online para todo o Brasil
            </span>
          </p>
          <p className="flex items-start gap-2.5 font-sans text-sm text-text-2">
            <Clock width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
            {FIRM.hours}
          </p>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent hover:text-accent-strong"
          >
            <WhatsAppIcon width={16} height={16} />
            {CONTACT.whatsappDisplay} · WhatsApp
          </a>
          <a
            href={CONTACT.phoneTel}
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent hover:text-accent-strong"
          >
            <Phone width={16} height={16} />
            {CONTACT.phoneDisplay} · ligação
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent hover:text-accent-strong"
          >
            <InstagramIcon width={16} height={16} />
            {CONTACT.instagramHandle}
          </a>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-1.5 py-6 font-sans text-xs text-text-3 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {FIRM.legalName}
          </p>
          <p>
            {FIRM.lawyer} — {FIRM.oab}
          </p>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="space-y-3">
      <p className="font-sans text-xs font-bold uppercase tracking-[0.16em] text-text-3">
        {title}
      </p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="font-sans text-sm text-text-2 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
