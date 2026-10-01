import { Button } from "./Button";
import { WhatsAppIcon } from "@/components/icons";
import { CTA_LABEL, whatsappLink, type WhatsAppTopic } from "@/lib/site";

/** CTA padrão do site — abre o WhatsApp do escritório. */
export function WhatsAppCta({
  label = CTA_LABEL,
  variant = "primary",
  size = "lg",
  className = "",
  withIcon = true,
  topic = "geral",
}: {
  label?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  withIcon?: boolean;
  /** Define a mensagem pré-preenchida do WhatsApp. */
  topic?: WhatsAppTopic;
}) {
  return (
    <Button
      href={whatsappLink(topic)}
      variant={variant}
      size={size}
      className={className}
      data-cta="whatsapp"
    >
      {withIcon && <WhatsAppIcon width={18} height={18} />}
      {label}
    </Button>
  );
}
