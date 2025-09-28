import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function MapSection() {
  return (
    <section id="map-section" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestra Ubicación</h2>
          <p className="text-lg text-muted-foreground">
            Nos reunimos en un lugar accesible y confidencial en Cartagena
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              Ubicación de Reuniones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
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

          </CardContent>
        </Card>
      </div>
    </section>
  )
}
