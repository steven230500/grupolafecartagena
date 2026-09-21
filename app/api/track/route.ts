import { type NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// La ruta es pública, así que solo se reenvían los eventos que el sitio emite.
const ALLOWED_EVENTS = new Set(["whatsapp_click", "page_view"])
const MAX_BODY_BYTES = 4096
const MAX_PROPERTIES = 12
const MAX_VALUE_LENGTH = 200

const noContent = () => new NextResponse(null, { status: 204 })

function sanitizeProperties(input: unknown): Record<string, string> {
  if (!input || typeof input !== "object" || Array.isArray(input)) return {}

  const properties: Record<string, string> = {}
  for (const [key, value] of Object.entries(input).slice(0, MAX_PROPERTIES)) {
    if (value === null || typeof value === "object") continue
    properties[key] = String(value).slice(0, MAX_VALUE_LENGTH)
  }
  return properties
}

export async function POST(request: NextRequest) {
  const apiUrl = process.env.IFOREVENTS_API_URL
  const projectKey = process.env.IFOREVENTS_PROJECT_KEY
  if (!apiUrl || !projectKey) return noContent()

  const raw = await request.text()
  if (raw.length > MAX_BODY_BYTES) return noContent()

  let payload: { event_name?: unknown; event_type?: unknown; properties?: unknown }
  try {
    payload = JSON.parse(raw)
  } catch {
    return noContent()
  }

  if (typeof payload.event_name !== "string" || !ALLOWED_EVENTS.has(payload.event_name)) {
    return noContent()
  }

  // Sin X-Custom-UUID ni reenvío de IP: en un sitio de ludopatía los eventos van anónimos.
  try {
    await fetch(`${apiUrl.replace(/\/+$/, "")}/v1/events/track`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Project-Key": projectKey,
      },
      body: JSON.stringify({
        event_name: payload.event_name,
        event_type: payload.event_type === "page_view" ? "page_view" : "track",
        properties: sanitizeProperties(payload.properties),
      }),
      signal: AbortSignal.timeout(3000),
    })
  } catch {
    // Analytics nunca debe tumbar la página ni bloquear el clic a WhatsApp.
  }

  return noContent()
}
