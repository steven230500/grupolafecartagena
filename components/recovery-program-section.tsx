import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"
import { WaveSeparator } from "@/components/wave-separator"

export function RecoveryProgramSection() {
  const phoneNumber = "+573203639742"
  const whatsappMessage = "Me interesa conocer más sobre el programa de 12 pasos"

  const steps = [
    {
      number: 1,
      title: "Admisión",
      description: "Admitimos que somos impotentes ante el juego, que nuestras vidas se han vuelto ingobernables.",
    },
    {
      number: 2,
      title: "Esperanza",
      description: "Llegamos a creer que un Poder más grande que nosotros puede devolvernos el sano juicio.",
    },
    {
      number: 3,
      title: "Decisión",
      description:
        "Decidimos poner nuestras voluntades y nuestras vidas al cuidado de Dios, como nosotros lo concebimos.",
    },
    {
      number: 4,
      title: "Inventario",
      description: "Sin miedo hicimos un minucioso inventario moral de nosotros mismos.",
    },
    {
      number: 5,
      title: "Admisión",
      description:
        "Admitimos ante Dios, ante nosotros mismos y ante otro ser humano, la naturaleza exacta de nuestros defectos.",
    },
    {
      number: 6,
      title: "Preparación",
      description:
        "Estuvimos enteramente dispuestos a dejar que Dios nos liberase de todos estos defectos de carácter.",
    },
  ]

  const remainingSteps = [
    "Humildemente le pedimos que nos liberase de nuestros defectos",
    "Hicimos una lista de todas aquellas personas a quienes habíamos ofendido",
    "Reparamos directamente a cuantos nos fue posible el daño causado",
    "Continuamos haciendo nuestro inventario personal",
    "Buscamos a través de la oración y la meditación mejorar nuestro contacto consciente con Dios",
    "Habiendo obtenido un despertar espiritual como resultado de estos pasos, tratamos de llevar este mensaje a otros jugadores compulsivos",
  ]

  return (
    <>
      <WaveSeparator flip />
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestro Programa de Recuperación</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Los 12 pasos de Jugadores Anónimos son la base de nuestro programa de recuperación. Te acompañamos en
                cada paso del proceso hacia una vida libre del juego compulsivo.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {steps.map((step, index) => (
              <ScrollAnimation key={step.number} delay={index * 0.1}>
                <Card className="border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground text-lg px-3 py-1">
                        {step.number}
                      </Badge>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.8}>
            <Card className="bg-accent/5 border-accent/20 mb-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-accent">Los 12 Pasos Completos</CardTitle>
                <p className="text-muted-foreground">
                  Los pasos restantes (7-12) continúan el proceso de transformación personal:
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {remainingSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <strong>Paso {index + 7}:</strong> {step}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation delay={1.0}>
            <div className="text-center bg-primary/5 rounded-xl p-8 hover:bg-primary/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-foreground mb-4">¿Listo para comenzar tu recuperación?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Te acompañamos paso a paso en este proceso. No tienes que hacerlo solo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-200"
                  asChild
                >
                  <a href={`tel:${phoneNumber}`} className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Solicita una Reunión
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent hover:scale-105 transition-all duration-200"
                  asChild
                >
                  <a
                    href={`https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Más Información
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
