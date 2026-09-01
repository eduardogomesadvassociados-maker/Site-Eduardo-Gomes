export interface Testimonial {
  name: string;
  text: string;
  rating: number; // 1–5
  source?: string;
}

/**
 * Avaliações reais do perfil do Google Meu Negócio do escritório.
 * PENDENTE: preencher a partir do link do Google Business (ver memória do
 * projeto). Enquanto vazio, a seção de depoimentos não é renderizada.
 */
export const TESTIMONIALS: Testimonial[] = [];
