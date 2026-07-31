"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { CONTACT_INFO, WHATSAPP_MESSAGES, NAVIGATION } from "@/lib/constants"
import { trackWhatsAppClick } from "@/lib/analytics"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.replace("+", "")}?text=${encodeURIComponent(WHATSAPP_MESSAGES.help)}`
    trackWhatsAppClick("header")
    window.open(whatsappUrl, "_blank")
    setIsMenuOpen(false)
  }

  const navLinks = [
    { label: "El problema", id: NAVIGATION.sections.problem.replace("#", "") },
    { label: "El camino", id: NAVIGATION.sections.path.replace("#", "") },
    { label: "Comunidad", id: NAVIGATION.sections.community.replace("#", "") },
    { label: "Contacto", id: NAVIGATION.sections.contact.replace("#", "") },
  ]

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/92 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-6 px-5 py-7 sm:px-10">
        <div className="flex items-baseline gap-3">
          <img src="/logo_transparent.png" alt="Grupo La Fe Cartagena" className="h-7 w-7 self-center object-contain" />
          <div>
            <span className="font-serif text-xl font-bold">Grupo La Fe</span>
            <span className="mt-1 block font-mono text-[0.66rem] uppercase tracking-widest text-muted-foreground">
              Cartagena · Jugadores Anónimos
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 font-mono text-[0.74rem] uppercase tracking-widest md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="border-b border-transparent pb-0.5 hover:border-accent"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={openWhatsApp}
            className="border-b border-transparent pb-0.5 text-primary hover:border-accent"
          >
            WhatsApp
          </button>
        </nav>

        <button
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border px-5 py-5 font-mono text-sm uppercase tracking-widest md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-left">
                {link.label}
              </button>
            ))}
            <button onClick={openWhatsApp} className="text-left text-primary">
              WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
