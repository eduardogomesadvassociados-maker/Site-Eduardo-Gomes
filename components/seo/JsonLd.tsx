type Node = Record<string, unknown>;

/**
 * Injeta um bloco JSON-LD no <head>. Quando recebe uma lista, agrupa tudo num
 * único `@context` + `@graph` (forma canônica recomendada pelo Google e mais
 * robusta para parsers de terceiros).
 */
export function JsonLd({ data }: { data: Node | Node[] }) {
  const payload = Array.isArray(data)
    ? {
        "@context": "https://schema.org",
        "@graph": data.map(({ "@context": _ctx, ...rest }) => rest),
      }
    : data;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
}
