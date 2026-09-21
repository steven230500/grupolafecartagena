const ENDPOINT = "/api/track"

type Properties = Record<string, string | number | boolean>

function send(eventName: string, eventType: "track" | "page_view", properties: Properties) {
  if (typeof window === "undefined") return

  const body = JSON.stringify({ event_name: eventName, event_type: eventType, properties })

  // sendBeacon sobrevive a la navegación hacia WhatsApp; fetch keepalive es el respaldo.
  try {
    if (navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "application/json" }))) return
  } catch {
    // Navegador sin sendBeacon o con la llamada bloqueada.
  }

  void fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {})
}

export function trackWhatsAppClick(source: string) {
  send("whatsapp_click", "track", { source })
}

export function trackPageView(path: string) {
  send("page_view", "page_view", { path, referrer: document.referrer || "direct" })
}
