"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    }, 5000)

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

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="bg-background/80 border-primary/20 min-h-[200px] flex items-center">
                <CardContent className="pt-6 text-center">
                  <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <footer className="text-sm font-medium text-primary">— {testimonial.author}</footer>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          className="rounded-full w-10 h-10 p-0 bg-transparent"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-6" : "bg-primary/30"
              }`}
            />
          ))}
        </div>

        <Button variant="outline" size="sm" onClick={goToNext} className="rounded-full w-10 h-10 p-0 bg-transparent">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="text-center mt-4">
        <p className="text-xs text-muted-foreground">
          {isAutoPlaying ? "Avance automático activado" : "Navegación manual"}
        </p>
      </div>
    </div>
  )
}
