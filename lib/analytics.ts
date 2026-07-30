import { track } from "@vercel/analytics"

export function trackWhatsAppClick(source: string) {
  track("whatsapp_click", { source })
}
