# Site — Eduardo Gomes Advogados

Site institucional do escritório **Eduardo Gomes Sociedade Individual de
Advocacia** (Direito Previdenciário e Trabalhista). Landing pages estáticas,
sem formulários — todos os CTAs abrem o WhatsApp do escritório.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Fontes self-hosted via `next/font` (Cormorant Garamond + Inter)
- 100% estático (SSG) — sem banco de dados

## Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # build de produção
npm run start      # serve o build
npm run lint
```

## Estrutura

| Caminho | Descrição |
|---|---|
| `app/(site)/` | páginas públicas (Home, /previdenciario, /trabalhista, /sobre, /contato, /politica-de-privacidade) |
| `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` | SEO / PWA |
| `components/sections/` | blocos de página reutilizáveis |
| `components/ui/` | componentes de interface |
| `lib/site.ts` | dados do escritório (contato, OAB, horário) |
| `lib/structured-data.ts` | JSON-LD (LegalService, Attorney, FAQPage, …) |
| `public/brand/` | assets da marca (logo, monograma, favicon) |
| `public/llms.txt` | resumo para motores de busca generativos (GEO) |

## Configuração pendente

- `SITE_URL` em `lib/site.ts` — trocar pelo domínio definitivo.
- Depoimentos: preencher `lib/testimonials.ts` com as avaliações do Google Meu Negócio.

## Deploy

Deploy contínuo na Vercel a partir da branch `main`. DNS na Cloudflare.
