"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MessageCircle, CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const phoneNumber = "+573203639742"
  const whatsappMessage = "Hola, me gustaría obtener información sobre el Grupo La Fe Cartagena"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact-section" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contáctanos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Tu información es completamente confidencial.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <ScrollAnimation animation="slide-in-left">
            <div className="space-y-6">
              <Card
                className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`
                  window.open(whatsappUrl, "_blank")
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-accent" />
                    Línea de ayuda confidencial
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-accent">{phoneNumber}</div>
                    <div className="text-sm text-muted-foreground">
                      Disponible para ti • Completamente confidencial
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        Llamar
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex-1 bg-transparent transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a
                        href={`https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Confidencialidad Garantizada</h3>
                <p className="text-sm text-muted-foreground">
                  Tu información es completamente confidencial. No compartimos tus datos con terceros. Nuestro
                  compromiso es brindarte un espacio seguro para tu recuperación.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation animation="slide-in-right">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-accent" />
                  Envíanos un Mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-green-800 font-medium">¡Mensaje enviado exitosamente!</p>
                      <p className="text-green-600 text-sm">Nos pondremos en contacto contigo pronto.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background transition-all duration-300 focus:scale-105"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Tu correo electrónico"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background transition-all duration-300 focus:scale-105"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tu mensaje..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-background resize-none transition-all duration-300 focus:scale-105"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
