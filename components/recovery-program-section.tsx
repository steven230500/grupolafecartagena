"use client"

import { Phone, MessageCircle } from "lucide-react"
import { CONTACT_INFO, WHATSAPP_MESSAGES } from "@/lib/constants"
import { trackWhatsAppClick } from "@/lib/analytics"

export function RecoveryProgramSection() {
  const phoneNumber = CONTACT_INFO.phone
  const whatsappMessage = WHATSAPP_MESSAGES.program

  const steps = [
    {
      title: "Admisión",
      description: "Admitimos que somos impotentes ante el juego, que nuestras vidas se han vuelto ingobernables.",
    },
    {
      title: "Esperanza",
      description: "Llegamos a creer que un Poder más grande que nosotros puede devolvernos el sano juicio.",
    },
    {
      title: "Decisión",
      description:
        "Decidimos poner nuestras voluntades y nuestras vidas al cuidado de Dios, como nosotros lo concebimos.",
    },
    {
      title: "Inventario",
      description: "Sin miedo hicimos un minucioso inventario moral de nosotros mismos.",
    },
    {
      title: "Admisión",
      description:
        "Admitimos ante Dios, ante nosotros mismos y ante otro ser humano, la naturaleza exacta de nuestros defectos.",
    },
    {
      title: "Preparación",
      description:
        "Estuvimos enteramente dispuestos a dejar que Dios nos liberase de todos estos defectos de carácter.",
    },
  ]

  const remainingSteps = [
    "Humildemente le pedimos que nos liberase de nuestros defectos",
    "Hicimos una lista de todas las personas a quienes habíamos ofendido",
    "Reparamos directamente a cuantos nos fue posible el daño causado",
    "Continuamos haciendo nuestro inventario personal",
    "Buscamos mejorar nuestro contacto consciente con Dios",
    "Tratamos de llevar este mensaje a otros jugadores compulsivos",
  ]

  return (
    <section id="camino" className="border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <span className="eyebrow">El camino</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Doce pasos, un día a la vez.</h2>

        <div className="relative mt-10">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0
            return (
              <div key={step.title + index} className="relative grid grid-cols-1 gap-0 py-8 pl-14 md:grid-cols-2 md:gap-x-16 md:pl-0">
                <span className="absolute left-6 top-1 h-[11px] w-[11px] -translate-x-1/2 rounded-full border-2 border-accent bg-background md:left-1/2" />
                <div className={isLeft ? "md:col-start-1 md:text-right" : "md:col-start-2 md:text-left"}>
                  <span className="font-mono text-xs tracking-widest text-primary">
                    Paso {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-bold">{step.title}</h3>
                  <p className={`mt-2 max-w-[42ch] text-sm text-muted-foreground ${isLeft ? "md:ml-auto" : ""}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 pt-2">
          <span className="eyebrow">Pasos 07 – 12</span>
          <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2">
            {remainingSteps.map((step, index) => (
              <div key={step} className="border-t border-border py-3 text-sm text-muted-foreground">
                <strong className="font-mono text-[0.82rem] font-medium text-foreground">{index + 7} ·</strong>{" "}
                {step}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-9">
          <h3 className="max-w-[24ch] text-2xl font-bold">¿Listo para dar el primer paso?</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-primary-foreground hover:bg-accent"
            >
              <Phone className="h-4 w-4" />
              Solicita una reunión
            </a>
            <a
              href={`https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("recovery_program")}
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
