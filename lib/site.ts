/**
 * Constantes do site Eduardo Gomes Advocacia.
 *
 * NOTA: SITE_URL e OAB ainda a confirmar com o cliente (ver memória do projeto).
 */

export const SITE_URL = "https://eduardogomesadvogados.com.br";

export const FIRM = {
  legalName: "Eduardo Gomes Sociedade Individual de Advocacia",
  shortName: "Eduardo Gomes Advogados",
  lawyer: "Dr. Eduardo da Silva Gomes",
  oab: "OAB/RJ", // nº a confirmar
  since: 2008,
  experienceYears: new Date().getFullYear() - 2008 >= 18 ? 18 : 18, // "mais de 18 anos"
  hours: "Segunda a sexta, das 9h às 18h",
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
  whatsappUrl:
    "https://api.whatsapp.com/send/?phone=552126674120&text&type=phone_number&app_absent=0&",
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
