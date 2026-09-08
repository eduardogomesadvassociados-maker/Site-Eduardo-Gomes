import Image from "next/image";
import Link from "next/link";
import monogram from "@/public/brand/monogram-ouro.png";

const SIZES = {
  sm: { badge: "h-9", name: "text-lg", sub: "text-[0.6rem] tracking-[0.42em]" },
  md: { badge: "h-12", name: "text-2xl", sub: "text-[0.7rem] tracking-[0.44em]" },
} as const;

/**
 * Assinatura da marca: emblema E+G com aro de proteção (ouro) + wordmark em
 * tipografia dual — serifada "EDUARDO GOMES" + sans espaçada "ADVOGADOS",
 * conforme o Manual de Identidade Visual.
 */
export function Logo({
  compact = false,
  size = "sm",
  className = "",
}: {
  compact?: boolean;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const s = SIZES[size];
  return (
    <Link
      href="/"
      aria-label="Eduardo Gomes Advogados — página inicial"
      className={`flex items-center gap-3 ${className}`}
    >
      <Image
        src={monogram}
        alt=""
        width={44}
        height={42}
        priority
        className={`${s.badge} w-auto`}
      />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display font-semibold tracking-[0.06em] text-text-1 ${s.name}`}
          >
            EDUARDO GOMES
          </span>
          <span
            className={`font-sans font-semibold text-text-2 ${s.sub}`}
          >
            ADVOGADOS
          </span>
        </span>
      )}
    </Link>
  );
}
