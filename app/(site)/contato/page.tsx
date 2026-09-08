import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import {
  WhatsAppIcon,
  InstagramIcon,
  MapPin,
  Clock,
  Phone,
} from "@/components/icons";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { CONTACT, FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o escritório Eduardo Gomes Advogados pelo WhatsApp. Atendimento online para todo o Brasil, de segunda a sexta, das 8h às 17h.",
  alternates: { canonical: "/contato" },
};

const items = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: CONTACT.whatsappUrl,
    external: true,
  },
  {
    icon: Phone,
    label: "Telefone (ligação)",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneTel,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagram,
    external: true,
  },
  {
    icon: MapPin,
    label: "Sede",
    value: `${FIRM.address.street} — ${FIRM.address.district}, ${FIRM.city}/${FIRM.state}`,
    href: FIRM.address.mapsUrl,
    external: true,
  },
  { icon: Clock, label: "Horário", value: FIRM.hours },
];

export default function ContatoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Contato", path: "/contato" },
        ])}
      />

      <PageHero
        eyebrow="Contato"
        title="Converse com a equipe pelo"
        accentWord="WhatsApp"
        intro="O primeiro contato é feito diretamente pelo WhatsApp do escritório. Você conta a sua situação e a equipe direciona o atendimento — sem formulário, sem intermediários."
      />

      <Section tone="deep">
        <Container className="max-w-3xl">
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-l)] border border-border bg-border sm:grid-cols-2">
            {items.map(({ icon: Icon, label, value, href, external }, i) => {
              const inner = (
                <>
                  <Icon width={20} height={20} className="text-accent" />
                  <span className="mt-3 block font-sans text-xs font-bold uppercase tracking-[0.16em] text-text-3">
                    {label}
                  </span>
                  <span className="mt-1 block font-sans text-base text-text-1">
                    {value}
                  </span>
                </>
              );
              return (
                <Reveal key={label} delayMs={i * 60} className="bg-bg-2 p-7">
                  {href ? (
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="block transition-colors hover:text-accent"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
