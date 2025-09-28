import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Heart, Shield } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"
import { WaveSeparator } from "@/components/wave-separator"

export function CompulsiveGamblingSection() {
  const signs = [
    "Necesidad de apostar cantidades cada vez mayores",
    "Inquietud o irritabilidad al intentar reducir o parar",
    "Intentos repetidos e infructuosos de controlar el juego",
    "Preocupación frecuente por el juego o por conseguir dinero",
    "Apostar para escapar de problemas o aliviar emociones negativas",
    "Mentir a familiares sobre la magnitud del problema",
    "Poner en riesgo relaciones, trabajo o estudios por el juego",
    "Depender de otros para resolver problemas financieros",
  ]

  return (
    <>
      <WaveSeparator />
      <section className="py-16 px-4 bg-secondary/20 relative">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Qué es el Juego Compulsivo?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                El juego compulsivo es una enfermedad emocional reconocida oficialmente desde 1980 por la Asociación
                Mundial de la Salud. Es progresiva, pero puede detenerse.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollAnimation delay={0.2}>
              <Card className="border-accent/20 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Heart className="w-6 h-6" />
                    Una Enfermedad, No una Debilidad
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    Los jugadores compulsivos no son personas "moralmente débiles", sino personas enfermas que pueden
                    recuperarse siguiendo el programa de Jugadores Anónimos. La recuperación requiere un cambio
                    progresivo de carácter basado en
                    <strong className="text-foreground"> honestidad, receptividad y buena voluntad</strong>.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <Card className="border-primary/20 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Shield className="w-6 h-6" />
                    Hay Esperanza
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    Aunque no tiene cura, el juego compulsivo puede detenerse. Miles de personas han encontrado una
                    nueva forma de vivir a través del programa de 12 pasos. La recuperación es posible cuando se busca
                    ayuda y se sigue el programa con dedicación.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.6}>
            <Card className="border-destructive/20 bg-destructive/5 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="w-6 h-6" />
                  Señales de Alerta
                </CardTitle>
                <p className="text-muted-foreground">
                  Si reconoces estas señales en ti o en alguien cercano, es momento de buscar ayuda:
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {signs.map((sign, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{sign}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
