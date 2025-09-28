import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, Heart, Clock } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Users,
      title: "Grupo de Apoyo",
      description: "Reuniones regulares con personas que comparten experiencias similares",
    },
    {
      icon: Shield,
      title: "Confidencialidad",
      description: "Ambiente seguro y privado donde puedes hablar sin temor al juicio",
    },
    {
      icon: Heart,
      title: "Programa de 12 Pasos",
      description: "Metodología probada internacionalmente para la recuperación",
    },
    {
      icon: Clock,
      title: "Disponibilidad",
      description: "Apoyo continuo y línea de ayuda disponible cuando la necesites",
    },
  ]

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sobre Nosotros</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Brindamos acompañamiento confidencial a quienes sufren de ludopatía. Nuestras reuniones están abiertas a
            cualquier persona que busque ayuda para superar la adicción al juego y recuperar el control de su vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">¿Necesitas Ayuda?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty leading-relaxed">
                Si tú o alguien que conoces está luchando contra la ludopatía, no estás solo. El primer paso hacia la
                recuperación es reconocer que necesitas ayuda. Estamos aquí para acompañarte en este proceso.
              </p>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-sm text-foreground font-medium mb-2">
                  "La recuperación es posible. Un día a la vez."
                </p>
                <p className="text-xs text-muted-foreground">- Grupo La Fe Cartagena</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
