import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, Heart, Lightbulb, HandHeart, Clock } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { WaveSeparator } from "@/components/wave-separator"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Anonimato Total",
      description:
        "Tu identidad y tu historia permanecen completamente confidenciales. Solo compartimos nombres de pila.",
    },
    {
      icon: Users,
      title: "Apoyo Mutuo",
      description:
        "Encuentras personas que entienden exactamente por lo que estás pasando. No estás solo en este camino.",
    },
    {
      icon: Clock,
      title: "Reuniones Regulares",
      description: "Sesiones estructuradas que te brindan estabilidad y un espacio seguro para compartir y crecer.",
    },
    {
      icon: HandHeart,
      title: "Acompañamiento Personal",
      description: "Sistema de padrinos que te guían paso a paso en tu proceso de recuperación.",
    },
    {
      icon: Heart,
      title: "Esperanza Renovada",
      description: "Recuperas la confianza en ti mismo y en tu capacidad de vivir una vida plena sin el juego.",
    },
    {
      icon: Lightbulb,
      title: "Herramientas Prácticas",
      description: "Aprendes estrategias concretas para manejar impulsos, emociones y situaciones de riesgo.",
    },
  ]

  return (
    <section className="relative">
      <WaveSeparator color="fill-secondary/10" />

      <div className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Por qué unirse a Grupo La Fe?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Más que un grupo de apoyo, somos una comunidad que te acompaña hacia una nueva forma de vivir.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <ScrollAnimation key={index} animation="slide-in-up" delay={index * 100}>
                  <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:scale-105 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-accent/10 rounded-xl">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              )
            })}
          </div>

          <ScrollAnimation animation="fade-in" delay={200}>
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Testimonios de Esperanza</h3>

              <TestimonialCarousel />

              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">
                  * Los testimonios son anónimos para proteger la privacidad de nuestros miembros
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <WaveSeparator flip color="fill-secondary/10" />
    </section>
  )
}
