import { Button } from "./Button";
import { WhatsAppIcon } from "@/components/icons";
import { CONTACT, CTA_LABEL } from "@/lib/site";

/** CTA padrão do site — abre o WhatsApp do escritório. */
export function WhatsAppCta({
  label = CTA_LABEL,
  variant = "primary",
  size = "lg",
  className = "",
  withIcon = true,
}: {
  label?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  withIcon?: boolean;
}) {
  return (
    <Button
      href={CONTACT.whatsappUrl}
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
