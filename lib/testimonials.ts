export interface Testimonial {
  name: string;
  text: string;
  rating: number; // 1–5
  source?: string;
}

/** Nota agregada do perfil do Google Meu Negócio (Eduardo Gomes Advogado). */
export const GOOGLE_RATING = { value: 5.0, count: 491 } as const;

/**
 * Avaliações reais do perfil do Google Meu Negócio, transcritas (com cortes
 * para caber no bloco, sem alterar o texto do cliente).
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Juliana Morais",
    rating: 5,
    source: "Google",
    text: "Inicialmente tive contato com o Dr. Eduardo, proprietário, que demonstrou ser um profissional extremamente atencioso, educado e com grande conhecimento jurídico, transmitindo muita segurança e confiança desde o primeiro momento. É muito bom encontrar profissionais tão comprometidos, que realmente se preocupam em prestar um atendimento humano e de qualidade.",
  },
  {
    name: "Mariany Marinho",
    rating: 5,
    source: "Google",
    text: "Precisei de ajuda para a aposentadoria da minha vó e só tenho elogios a fazer. Desde o primeiro contato houve muito profissionalismo, atenção e carinho em cada detalhe. O atendimento é humanizado, acolhedor e transmite muita confiança. Me senti cuidada, ouvida e totalmente satisfeita com o serviço.",
  },
  {
    name: "Karina Chaves",
    rating: 5,
    source: "Google",
    text: "Fui atendida na concessão do meu auxílio por incapacidade e só tenho elogios. Um atendimento extremamente competente, atencioso e dedicado do início ao fim do processo, sempre esclarecendo todas as minhas dúvidas com muita paciência e profissionalismo. Um escritório que trabalha com total clareza, transparência e compromisso com o cliente.",
  },
  {
    name: "Gabriel Cardozo",
    rating: 5,
    source: "Google",
    text: "Procurei o escritório para tirar dúvidas sobre um emprego antigo, principalmente em relação a verbas que eu não tinha certeza se estavam corretas. O atendimento foi extremamente atencioso desde o início, com muita paciência para me ouvir e tudo explicado de forma clara e objetiva, trazendo segurança sobre a situação.",
  },
  {
    name: "David Soares",
    rating: 5,
    source: "Google",
    text: "Gratidão ao Dr. Eduardo Gomes pela experiência e clareza entregue ao meu processo. Importante destacar também o atendimento de sua equipe, que me deu todo o suporte necessário até a solução positiva.",
  },
  {
    name: "Luciano Vitorino",
    rating: 5,
    source: "Google",
    text: "O escritório Eduardo Gomes Advocacia demonstra extremo profissionalismo, conhecimento técnico aprofundado e atendimento humanizado. Desde o primeiro contato fui tratado com transparência, clareza e segurança.",
  },
];
