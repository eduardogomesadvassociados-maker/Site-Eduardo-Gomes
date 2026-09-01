import { SITE_URL, FIRM, CONTACT } from "@/lib/site";
import type { FaqItem } from "@/lib/faq";

/** Entidade principal do escritório — referenciada por @id nas demais. */
export function legalServiceSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Attorney"],
    "@id": `${SITE_URL}/#escritorio`,
    name: FIRM.shortName,
    legalName: FIRM.legalName,
    url: SITE_URL,
    image: `${SITE_URL}/brand/logo-lockup-ouro.png`,
    logo: `${SITE_URL}/brand/monogram-ouro.png`,
    description:
      "Escritório de advocacia especializado em Direito Previdenciário e Direito Trabalhista, com mais de 18 anos de atuação.",
    foundingDate: String(FIRM.since),
    telephone: CONTACT.phoneE164,
    priceRange: "$$",
    areaServed: FIRM.areasServed.map((name) => ({ "@type": "AdministrativeArea", name })),
    knowsAbout: [
      "Direito Previdenciário",
      "Direito Trabalhista",
      "Aposentadoria",
      "Aposentadoria especial",
      "Aposentadoria de trabalhadores offshore",
      "BPC/LOAS",
      "Benefícios por incapacidade",
      "Revisão de benefício do INSS",
      "Previdência internacional",
      "Rescisão indireta",
      "Horas extras",
      "Verbas rescisórias",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: FIRM.city,
      addressRegion: FIRM.state,
      addressCountry: "BR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [CONTACT.instagram],
    founder: {
      "@type": "Person",
      name: FIRM.lawyer,
      jobTitle: "Advogado",
      description: "Advogado com mais de 18 anos de experiência em Direito Previdenciário e Trabalhista.",
    },
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: FIRM.shortName,
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}/#escritorio` },
  };
}

export function faqPageSchema(items: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { "@id": `${SITE_URL}/#escritorio` },
    areaServed: "BR",
  };
}
