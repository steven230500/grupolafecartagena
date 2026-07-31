"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { CONTACT_INFO, WHATSAPP_MESSAGES } from "@/lib/constants"
import { trackWhatsAppClick } from "@/lib/analytics"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", message: "" })
  const phoneNumber = CONTACT_INFO.phone

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const composedMessage = `Hola, soy ${formData.name}. ${formData.message}`
    trackWhatsAppClick("contact_form")
    window.open(`https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(composedMessage)}`, "_blank")
    setFormData({ name: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contacto" className="border-t border-border py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-10 md:grid-cols-[0.9fr_1.1fr] md:gap-18">
        <div>
          <span className="eyebrow">Contacto</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Contáctanos</h2>
          <p className="mt-4 text-muted-foreground">
            Estamos aquí para ayudarte. Tu información es completamente confidencial.
          </p>

          <div className="mt-9">
            <div className="flex justify-between gap-5 border-t border-border py-5 text-[0.95rem]">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Línea de ayuda
              </span>
              <a href={`tel:${phoneNumber}`} className="border-b border-border hover:border-accent hover:text-primary">
                {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
            <div className="flex justify-between gap-5 border-y border-border py-5 text-[0.95rem]">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</span>
              <a
                href={`https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(WHATSAPP_MESSAGES.default)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("contact_card")}
                className="border-b border-border hover:border-accent hover:text-primary"
              >
                Escribir mensaje
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="f-name" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Tu nombre
            </label>
            <input
              id="f-name"
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-b border-border bg-transparent py-2.5 outline-none focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="f-msg" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Tu mensaje
            </label>
            <textarea
              id="f-msg"
              name="message"
              placeholder="Cuéntanos en qué podemos ayudarte..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full resize-y border-b border-border bg-transparent py-2.5 outline-none focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-primary-foreground hover:bg-accent"
          >
            <MessageCircle className="h-4 w-4" />
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
