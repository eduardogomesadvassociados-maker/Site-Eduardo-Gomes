import { SITE_URL, FIRM, CONTACT } from "@/lib/site";
import { TESTIMONIALS, GOOGLE_RATING } from "@/lib/testimonials";
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
      streetAddress: `${FIRM.address.street}, ${FIRM.address.district}`,
      addressLocality: FIRM.city,
      addressRegion: FIRM.state,
      postalCode: FIRM.address.postalCode,
      addressCountry: "BR",
    },
    hasMap: FIRM.address.mapsUrl,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GOOGLE_RATING.value,
      reviewCount: GOOGLE_RATING.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.text,
      publisher: { "@type": "Organization", name: t.source ?? "Google" },
    })),
    sameAs: [CONTACT.instagram],
    founder: {
      "@type": "Person",
      name: FIRM.lawyer,
      jobTitle: "Advogado",
      description:
        "Advogado com mais de 18 anos de experiência em Direito Previdenciário e Trabalhista.",
      identifier: FIRM.oab,
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Inscrição na Ordem dos Advogados do Brasil",
        recognizedBy: {
          "@type": "Organization",
          name: "Ordem dos Advogados do Brasil — Seccional Rio de Janeiro",
        },
      },
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

export function personSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/sobre#dr-eduardo`,
    name: FIRM.lawyer,
    jobTitle: "Advogado",
    identifier: FIRM.oab,
    worksFor: { "@id": `${SITE_URL}/#escritorio` },
    knowsAbout: [
      "Direito Previdenciário",
      "Direito Trabalhista",
      "Aposentadoria especial",
      "Previdência internacional",
      "Rescisão indireta",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Inscrição na Ordem dos Advogados do Brasil",
      recognizedBy: {
        "@type": "Organization",
        name: "Ordem dos Advogados do Brasil — Seccional Rio de Janeiro",
      },
    },
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
