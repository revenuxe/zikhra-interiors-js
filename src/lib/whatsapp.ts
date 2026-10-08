/** WhatsApp Business number without + prefix (India). */
export const WHATSAPP_E164_LOCAL = "919886579923";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Assalamu alaikum, I would like to enquire about Umrah, Hajj, or a family journey from Bangalore. Please help me with travel options and a quotation.";

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_E164_LOCAL}?text=${encodeURIComponent(message)}`;
}
