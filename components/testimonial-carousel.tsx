"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    text: "Gracias a este grupo encontré la fuerza que no sabía que tenía. Hoy puedo decir que hay vida después del juego.",
    author: "Miembro anónimo",
  },
  {
    text: "El apoyo que recibí aquí me ayudó a reconstruir mi vida y mis relaciones. No hay palabras para agradecer.",
    author: "Participante del grupo",
  },
  {
    text: "Pensé que estaba perdido para siempre, pero este grupo me mostró que la recuperación es posible.",
    author: "Miembro en recuperación",
  },
  {
    text: "La honestidad y el apoyo mutuo que encontré aquí transformaron mi vida completamente.",
    author: "Miembro activo",
  },
  {
    text: "Cada día es una nueva oportunidad gracias al programa y al apoyo incondicional del grupo.",
    author: "Persona en recuperación",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const current = testimonials[currentIndex]

  return (
    <div className="mx-auto max-w-3xl px-5 text-center sm:px-10">
      <blockquote className="font-serif text-2xl italic leading-snug sm:text-3xl">"{current.text}"</blockquote>
      <footer className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        — {current.author}
      </footer>

      <div className="mt-9 flex items-center justify-center gap-5">
        <button onClick={goToPrevious} aria-label="Testimonio anterior" className="text-muted-foreground hover:text-primary">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2.5">
          {testimonials.map((t, index) => (
            <button
              key={t.author}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al testimonio ${index + 1}`}
              aria-current={index === currentIndex}
              className={`h-[3px] transition-all ${index === currentIndex ? "w-6 bg-primary" : "w-[18px] bg-border"}`}
            />
          ))}
        </div>
        <button onClick={goToNext} aria-label="Siguiente testimonio" className="text-muted-foreground hover:text-primary">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
