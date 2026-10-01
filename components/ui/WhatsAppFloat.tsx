import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

/** Botão flutuante persistente de WhatsApp (mobile e desktop). */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com um advogado no WhatsApp"
      data-cta="whatsapp-float"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cta text-cta-fg shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 md:h-16 md:w-16"
    >
      <WhatsAppIcon width={26} height={26} />
    </a>
  );
}
