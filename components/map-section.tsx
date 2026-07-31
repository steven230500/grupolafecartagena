import { MAP_COORDS } from "@/lib/constants"

export function MapSection() {
  return (
    <section id="ubicacion" className="border-t border-border py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-10 md:grid-cols-2 md:gap-14">
        <div>
          <span className="eyebrow">Ubicación</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Nos reunimos en Cartagena.</h2>
          <p className="mt-4 text-muted-foreground">
            Lugar accesible y confidencial. La dirección exacta se comparte al contactarnos por línea o WhatsApp.
          </p>
          <a
            href={MAP_COORDS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-sm border border-border px-6 py-3.5 font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-primary"
          >
            Ver en Google Maps
          </a>
        </div>

        <div className="aspect-[4/3] overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.8!2d-75.5144!3d10.3997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMTDCsDIzJzU5LjAiTiA3NcKwMzAnNTIuMCJX!5e0!3m2!1ses!2sco!4v1630000000000!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Grupo La Fe Cartagena"
          />
        </div>
      </div>
    </section>
  )
}
