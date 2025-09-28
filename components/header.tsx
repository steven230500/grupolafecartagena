"use client"

import { useState } from "react"
import { Menu, Phone, MapPin, X } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    const phoneNumber = "+573243217980"
    const message = "Hola, me gustaría obtener información sobre el Grupo La Fe Cartagena"
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsMenuOpen(false)
  }
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl -translate-y-1/3"></div>

      <div className="relative container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/logo_transparent.png"
                  alt="Grupo La Fe Cartagena"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-white text-balance leading-tight">Grupo La Fe</h1>
              <p className="text-white/80 text-sm font-medium tracking-wide">Cartagena • Jugadores Anónimos</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/20"
              onClick={() => scrollToSection("map-section")}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Ubicación
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/20"
              onClick={() => scrollToSection("contact-section")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contacto
            </Button>
            <Button
              className="bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm shadow-lg"
              size="sm"
              onClick={openWhatsApp}
            >
              Obtener Ayuda
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white/90 hover:text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden bg-white/95 backdrop-blur-md border-t border-white/20 shadow-lg">
              <div className="container mx-auto px-4 py-4 space-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:bg-accent/10"
                  onClick={() => scrollToSection("map-section")}
                >
                  <MapPin className="w-4 h-4 mr-3" />
                  Ubicación
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:bg-accent/10"
                  onClick={() => scrollToSection("contact-section")}
                >
                  <Phone className="w-4 h-4 mr-3" />
                  Contacto
                </Button>
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={openWhatsApp}
                >
                  <Phone className="w-4 h-4 mr-3" />
                  Obtener Ayuda
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
    </header>
  )
}
