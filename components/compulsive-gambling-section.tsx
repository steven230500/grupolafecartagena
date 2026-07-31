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
    <section id="problema" className="border-t border-border py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-10 md:grid-cols-[1.1fr_0.9fr] md:gap-18">
        <div>
          <span className="eyebrow">El problema</span>
          <h2 className="mt-4 max-w-[20ch] text-3xl font-bold sm:text-4xl">¿Qué es el juego compulsivo?</h2>
          <div className="mt-9 space-y-5 text-[1.02rem] leading-relaxed">
            <p>
              El juego compulsivo es una enfermedad emocional, reconocida oficialmente desde 1980 por la Asociación
              Mundial de la Salud. Es progresiva — pero puede detenerse.
            </p>
            <p className="border-l-2 border-accent py-1 pl-5 font-serif text-xl italic leading-snug text-primary">
              "No somos personas moralmente débiles, sino personas enfermas que pueden recuperarse."
            </p>
            <p>
              La recuperación requiere un cambio progresivo de carácter basado en honestidad, receptividad y buena
              voluntad. Miles de personas han encontrado una nueva forma de vivir a través del programa de 12
              pasos.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Señales de alerta</h3>
          <ul className="mt-5 flex flex-col">
            {signs.map((sign, index) => (
              <li key={sign} className="flex gap-4 border-t border-border py-4 text-[0.97rem] last:border-b">
                <span className="pt-0.5 font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
