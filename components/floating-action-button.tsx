"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, X } from "lucide-react"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const phoneNumber = "+573203639742"
  const whatsappMessage = "Hola, me gustaría obtener información sobre el Grupo La Fe Cartagena"

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (!isMobile) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col gap-3 animate-in slide-in-from-bottom-2 duration-300">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg rounded-full w-14 h-14 p-0"
              asChild
            >
              <a
                href={`https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </Button>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-full w-14 h-14 p-0"
              asChild
            >
              <a href={`tel:${phoneNumber}`} className="flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </a>
            </Button>
          </div>
        )}

        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg rounded-full w-16 h-16 p-0 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
        </Button>
      </div>
    </div>
  )
}
