"use client"

import { Phone, MessageCircle } from "lucide-react"
import { CONTACT_INFO, WHATSAPP_MESSAGES } from "@/lib/constants"
import { trackWhatsAppClick } from "@/lib/analytics"

export function HeroSection() {
  const phoneNumber = CONTACT_INFO.phone
  const whatsappMessage = WHATSAPP_MESSAGES.default

  return (
    <section className="pt-16 pb-10 sm:pt-24 sm:pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-10 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-14">
        <div>
          <span className="eyebrow">Línea confidencial · Cartagena, Colombia</span>
          <h1 className="mt-4 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hay un <em className="text-primary">camino</em>
            <br />
            de vuelta.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Somos <strong className="text-foreground">Grupo La Fe Cartagena</strong>, parte de la comunidad
            internacional de Jugadores Anónimos. Reuniones confidenciales para quienes buscan dejar atrás el juego
            compulsivo — un día a la vez.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-primary-foreground hover:bg-accent"
            >
              <Phone className="h-4 w-4" />
              Llamar ahora
            </a>
            <a
              href={`https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("hero")}
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div className="border-l-2 border-accent py-1 pl-6">
          <span className="eyebrow">Línea de ayuda</span>
          <div className="mt-2.5 font-mono text-2xl">{CONTACT_INFO.phoneDisplay}</div>
          <p className="mt-2.5 text-sm text-muted-foreground">
            Disponible para ti. Completamente confidencial — nadie más lo sabrá.
          </p>
        </div>
      </div>
    </section>
  )
}
