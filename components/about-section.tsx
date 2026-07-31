export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="border-t border-border py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-10 md:grid-cols-2 md:gap-18">
        <div>
          <span className="eyebrow">Sobre nosotros</span>
          <h2 className="mt-4 max-w-[22ch] text-3xl font-bold sm:text-4xl">
            Acompañamiento confidencial, un día a la vez.
          </h2>
          <p className="mt-6 max-w-[62ch] text-muted-foreground">
            Brindamos acompañamiento a quienes sufren de ludopatía. Nuestras reuniones están abiertas a cualquier
            persona que busque ayuda para superar la adicción al juego y recuperar el control de su vida.
          </p>
          <div className="mt-10 flex flex-wrap gap-11 font-mono">
            <div>
              <span className="block text-2xl text-primary">12</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Pasos del programa</span>
            </div>
            <div>
              <span className="block text-2xl text-primary">100%</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Confidencial</span>
            </div>
            <div>
              <span className="block text-2xl text-primary">24/7</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Línea disponible</span>
            </div>
          </div>
        </div>

        <div className="relative border border-border bg-card p-9">
          <div className="absolute inset-y-0 left-0 w-[2px] bg-accent" />
          <p className="font-serif text-xl italic leading-relaxed">"La recuperación es posible. Un día a la vez."</p>
          <footer className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            — Grupo La Fe Cartagena
          </footer>
        </div>
      </div>
    </section>
  )
}
