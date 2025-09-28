import { Heart, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Grupo La Fe Cartagena</h3>
          </div>


          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <p className="text-sm text-primary-foreground/90">
              Tu información es confidencial, no compartimos tus datos
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid md:grid-cols-2 gap-6 text-sm text-primary-foreground/80">
            <div>
              <h4 className="font-semibold text-primary-foreground mb-2">Jugadores Anónimos</h4>
              <p className="text-pretty leading-relaxed">
                Somos una comunidad de hombres y mujeres que comparten experiencias, fortaleza y esperanza para resolver
                nuestro problema común y ayudar a otros a recuperarse de la ludopatía.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary-foreground mb-2">Contacto de Emergencia</h4>
              <p className="mb-2">Línea de ayuda: +57 320 3639742</p>
              <p className="text-xs">
                Disponible para crisis y apoyo inmediato. Si estás en una situación de emergencia, no dudes en llamar.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-primary-foreground/20">
          <p className="text-xs text-primary-foreground/60">
            © 2025 Grupo La Fe Cartagena - Jugadores Anónimos. Parte de la comunidad internacional de Jugadores
            Anónimos.
          </p>
        </div>
      </div>
    </footer>
  )
}
