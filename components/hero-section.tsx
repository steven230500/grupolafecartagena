import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ArrowDown } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"

export function HeroSection() {
  const phoneNumber = "+573014585476"
  const whatsappMessage = "Hola, me gustaría obtener información sobre el Grupo La Fe Cartagena"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl text-center px-4 py-20">
        <ScrollAnimation animation="fade-in" delay={200}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance leading-tight">
            No estás <span className="text-primary">solo</span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="slide-in-up" delay={400}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent mb-8 text-balance">
            Apoyo para dejar el juego compulsivo
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation="slide-in-up" delay={600}>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
            Somos <strong className="text-primary">Grupo La Fe Cartagena</strong>, parte de la comunidad internacional
            de Jugadores Anónimos. Ofrecemos un espacio seguro y confidencial para tu recuperación.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="slide-in-up" delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                Llámanos Ahora
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-6 text-xl font-semibold bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href={`https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Escríbenos
              </a>
            </Button>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in" delay={1000}>
          <div className="bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl p-8 inline-block shadow-2xl">
            <p className="text-sm text-muted-foreground mb-3">Línea de ayuda confidencial</p>
            <p className="text-3xl font-bold text-foreground mb-2">{phoneNumber}</p>
            <p className="text-sm text-muted-foreground">Disponible para ti • Completamente confidencial</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in" delay={1200}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
