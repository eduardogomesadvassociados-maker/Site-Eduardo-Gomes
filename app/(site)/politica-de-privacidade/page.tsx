import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";
import { CONTACT, FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o site Eduardo Gomes Advogados trata dados de navegação, cookies e informações compartilhadas por meio dos canais de contato.",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

// TODO (Fase 5): revisão jurídica final do texto (LGPD) com o cliente.

export default function PoliticaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Política de Privacidade", path: "/politica-de-privacidade" },
        ])}
      />
      <Section tone="navy" pad="hero">
        <Container className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl">Política de Privacidade</h1>
          <p className="mt-4 font-sans text-sm text-text-3">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="prose-eg mt-10 space-y-8 font-sans text-text-2">
            <section>
              <h2 className="font-display text-2xl text-text-1">
                1. Quem somos
              </h2>
              <p className="mt-3 leading-relaxed">
                Este site é mantido pelo {FIRM.legalName}, com sede em{" "}
                {FIRM.city}/{FIRM.state}. Para tratar de assuntos relacionados a
                privacidade e proteção de dados, entre em contato pelo WhatsApp{" "}
                {CONTACT.phoneDisplay}.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-1">
                2. Dados que tratamos
              </h2>
              <p className="mt-3 leading-relaxed">
                O site não possui formulários de cadastro e não coleta dados
                pessoais para fins de captação. Tratamos apenas:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-text-1">Dados de navegação</strong>:
                  informações técnicas coletadas automaticamente (endereço IP,
                  tipo de dispositivo, páginas visitadas), usadas para
                  segurança e melhoria do site.
                </li>
                <li>
                  <strong className="text-text-1">
                    Informações que você compartilha ao entrar em contato
                  </strong>
                  : ao iniciar uma conversa pelo WhatsApp, os dados enviados
                  por você são tratados para responder à sua solicitação.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-1">
                3. Cookies e medição de anúncios
              </h2>
              <p className="mt-3 leading-relaxed">
                Podemos utilizar cookies e tecnologias semelhantes, inclusive de
                terceiros (como Google e Meta), para medir a eficácia de
                campanhas publicitárias que direcionam visitantes a este site.
                Você pode gerenciar cookies nas configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-1">
                4. Compartilhamento
              </h2>
              <p className="mt-3 leading-relaxed">
                Não vendemos dados pessoais. O compartilhamento ocorre apenas
                com provedores de infraestrutura e de medição de anúncios, na
                medida necessária para operar o site, ou quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-text-1">
                5. Seus direitos
              </h2>
              <p className="mt-3 leading-relaxed">
                Nos termos da Lei Geral de Proteção de Dados (Lei nº
                13.709/2018), você pode solicitar confirmação de tratamento,
                acesso, correção, anonimização ou eliminação dos seus dados,
                entre outros direitos, pelo canal de contato informado acima.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
