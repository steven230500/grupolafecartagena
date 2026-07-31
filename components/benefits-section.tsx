import { TestimonialCarousel } from "@/components/testimonial-carousel"

export function BenefitsSection() {
  const benefits = [
    {
      title: "Anonimato total",
      description:
        "Tu identidad y tu historia permanecen completamente confidenciales. Solo compartimos nombres de pila.",
    },
    {
      title: "Apoyo mutuo",
      description:
        "Encuentras personas que entienden exactamente por lo que estás pasando. No estás solo en este camino.",
    },
    {
      title: "Reuniones regulares",
      description: "Sesiones estructuradas que te brindan estabilidad y un espacio seguro para compartir y crecer.",
    },
    {
      title: "Acompañamiento personal",
      description: "Sistema de padrinos que te guían paso a paso en tu proceso de recuperación.",
    },
    {
      title: "Esperanza renovada",
      description: "Recuperas la confianza en ti mismo y en tu capacidad de vivir una vida plena sin el juego.",
    },
    {
      title: "Herramientas prácticas",
      description: "Aprendes estrategias concretas para manejar impulsos, emociones y situaciones de riesgo.",
    },
  ]

  return (
    <section id="comunidad" className="border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <span className="eyebrow">Comunidad</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">¿Por qué unirse a Grupo La Fe?</h2>

        <div className="mt-10 flex flex-col">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="grid grid-cols-1 gap-2 border-t border-border py-8 last:border-b sm:grid-cols-[90px_1fr_1.3fr] sm:items-baseline sm:gap-8"
            >
              <span className="order-first font-mono text-sm text-primary sm:order-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="text-[0.95rem] text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-card py-14 sm:py-20">
        <TestimonialCarousel />
      </div>
    </section>
  )
}
