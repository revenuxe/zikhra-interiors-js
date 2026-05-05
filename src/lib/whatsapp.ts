/** WhatsApp Business number without + prefix (India). */
export const WHATSAPP_E164_LOCAL = "919886579923";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Zikhra, I'd like to speak about premium interior design for my home in Hyderabad.";

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_E164_LOCAL}?text=${encodeURIComponent(message)}`;
}
