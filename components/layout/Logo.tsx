import Image from "next/image";
import Link from "next/link";
import monogram from "@/public/brand/monogram-ouro.png";

/**
 * Assinatura da marca: monograma EG (ouro) + wordmark em tipografia dual
 * (serifada "EDUARDO GOMES" + sans-serif espaçada "ADVOGADOS"), conforme
 * o Manual de Identidade Visual.
 */
export function Logo({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Eduardo Gomes Advogados — página inicial"
      className={`flex items-center gap-3 ${className}`}
    >
      <Image
        src={monogram}
        alt=""
        width={40}
        height={43}
        priority
        className="h-9 w-auto"
      />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-[0.06em] text-text-1">
            EDUARDO GOMES
          </span>
          <span className="font-sans text-[0.6rem] font-semibold tracking-[0.42em] text-text-2">
            ADVOGADOS
          </span>
        </span>
      )}
    </Link>
  );
}
