import { CONTACT_INFO } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t-2 border-accent bg-card pb-28 pt-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <div>
          <span className="font-serif text-xl font-bold">Grupo La Fe</span>
          <span className="mt-1 block font-mono text-[0.66rem] uppercase tracking-widest text-muted-foreground">
            Cartagena · Jugadores Anónimos
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-11 border-t border-border pt-10 sm:grid-cols-3">
          <p className="text-[0.92rem] text-muted-foreground sm:col-span-1">
            Somos una comunidad de hombres y mujeres que comparten experiencias, fortaleza y esperanza para resolver
            nuestro problema común y ayudar a otros a recuperarse de la ludopatía.
          </p>
          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Contacto de emergencia
            </h4>
            <p className="text-[0.92rem] text-muted-foreground">
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-foreground hover:text-primary">
                {CONTACT_INFO.phoneDisplay}
              </a>
              <br />
              Disponible para crisis y apoyo inmediato.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Confidencialidad
            </h4>
            <p className="text-[0.92rem] text-muted-foreground">
              Tu información es confidencial. No compartimos tus datos con terceros.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-7 text-xs text-muted-foreground">
          © 2026 Grupo La Fe Cartagena — Jugadores Anónimos. Parte de la comunidad internacional de Jugadores
          Anónimos.
        </div>
      </div>
    </footer>
  )
}
