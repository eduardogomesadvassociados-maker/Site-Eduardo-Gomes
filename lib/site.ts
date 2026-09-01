/**
 * Constantes do site Eduardo Gomes Advocacia.
 *
 * NOTA: SITE_URL (domínio) ainda a confirmar com o cliente. Horário conforme
 * briefing (9h–18h); o Google Meu Negócio mostra abertura às 8h — confirmar.
 */

export const SITE_URL = "https://eduardogomesadvogados.com.br";

/**
 * Vira `true` quando o domínio definitivo estiver apontado para este deploy.
 * Enquanto o site vive só numa URL `.vercel.app` (e o cliente tem um site no ar),
 * mantemos tudo fora dos buscadores para não gerar conteúdo duplicado.
 * Ao ativar: trocar também o SITE_URL acima pelo domínio real.
 */
export const SITE_INDEXABLE = false;

export const FIRM = {
  legalName: "Eduardo Gomes Sociedade Individual de Advocacia",
  shortName: "Eduardo Gomes Advogados",
  lawyer: "Dr. Eduardo da Silva Gomes",
  oab: "OAB/RJ 146.846",
  since: 2008,
  experienceYears: new Date().getFullYear() - 2008 >= 18 ? 18 : 18, // "mais de 18 anos"
  hours: "Segunda a sexta, das 9h às 18h",
  address: {
    building: "Edifício Lumina Corporate",
    street: "R. Cel. Bernardino de Melo, 2201 — Sala 1110",
    district: "Centro",
    city: "Nova Iguaçu",
    state: "RJ",
    postalCode: "26255-140",
    mapsUrl: "https://maps.google.com/?q=Eduardo+Gomes+Advogado,+Nova+Igua%C3%A7u+-+RJ",
  },
  city: "Nova Iguaçu",
  state: "RJ",
  region: "Baixada Fluminense e Região Metropolitana do Rio de Janeiro",
  areasServed: [
    "Nova Iguaçu",
    "Baixada Fluminense",
    "Rio de Janeiro",
    "Brasil",
    "Portugal",
    "Espanha",
    "Estados Unidos",
  ],
} as const;

/** Nº de processos exibido no "cronômetro" — valores a confirmar com o cliente. */
export const STATS = {
  processosTotal: 10000,
  processosPrevidenciario: 5000,
  processosTrabalhista: 10000,
  experiencia: 18,
} as const;

export const CONTACT = {
  whatsappNumber: "552126674120",
  whatsappUrl: "https://wa.me/552126674120",
  phoneDisplay: "(21) 2667-4120",
  phoneE164: "+552126674120",
  instagram: "https://www.instagram.com/eduardogomesadvogado/",
  instagramHandle: "@eduardogomesadvogado",
} as const;

/** Texto padrão dos CTAs do site — todos abrem o WhatsApp do escritório. */
export const CTA_LABEL = "Falar com um advogado";

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Previdenciário", href: "/previdenciario" },
  { label: "Trabalhista", href: "/trabalhista" },
  { label: "O escritório", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const;
