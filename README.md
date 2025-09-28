# Grupo La Fe Cartagena — Jugadores Anónimos

Landing page moderna y responsive para el grupo local **Grupo La Fe Cartagena**. Incluye hero con CTA, secciones de información (qué es el juego compulsivo, programa de recuperación), beneficios, contacto con formulario, mapa incrustado y footer.

> **Dominio:** `grupolafecartagena.org`  
> **Contacto de ayuda:** **+57 320 3639742** (llamada y WhatsApp)

## 🧱 Stack
- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS v4**
- **Radix UI + shadcn/ui** (componentes básicos: Button, Card, etc.)
- **Vercel Analytics** (opcional)

## ▶️ Cómo correr el proyecto (pnpm)
```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
pnpm start
```

> Este proyecto usa **pnpm**. Evita `npm` o `yarn` para no generar locks distintos.

## 📂 Estructura relevante
```
app/
  layout.tsx        # Metadatos y layout global
  page.tsx          # Composición de secciones
components/
  hero-section.tsx
  compulsive-gambling-section.tsx
  recovery-program-section.tsx
  benefits-section.tsx
  contact-section.tsx
  map-section.tsx
  about-section.tsx
  header.tsx
  footer.tsx
  floating-action-button.tsx
  ui/               # Librería de componentes shadcn (solo algunos en uso)
lib/
  utils.ts          # Helper de clases (cn)
public/
  placeholder-*     # Íconos/imagenes temporales
```

## 🗺️ Mapa
La sección **Ubicación** incrusta Google Maps usando el enlace directo:
```
https://maps.app.goo.gl/2MSoNsTQwS23AnW1A
```

## 📨 Formulario de Contacto
- Campos: **nombre, correo, mensaje**.
- Pendiente de integrar envío real (por ejemplo con **Resend**, **EmailJS** o API propia).  
  - Recomendado: crear un endpoint en `app/api/contact/route.ts` y consumirlo desde el formulario.

## 🔒 Contenido y marca
- No se usan logos oficiales de Jugadores Anónimos **Colombia** ni de **AA**.
- Ícono temporal en el header hasta tener el logo oficial del grupo.
- Frase de confidencialidad en el footer.

## 🔍 SEO
- **Título:** "Grupo La Fe Cartagena - Jugadores Anónimos"
- **Descripción:** Grupo de apoyo para la recuperación de la ludopatía en Cartagena. Programa de 12 pasos, reuniones confidenciales y acompañamiento.
- **Palabras clave:** jugadores anónimos, ludopatía, apoyo, recuperación, Cartagena, grupo la fe
- **Idioma:** Español (es)
- **Open Graph:** Configurado para compartir en redes sociales con imagen y metadatos.
- **Twitter Cards:** Optimizado para tweets con imagen grande.
- **Structured Data:** JSON-LD para organización, incluyendo nombre, descripción, teléfono y ubicación.
- Meta tags configuradas en `app/layout.tsx` para toda la aplicación.

## 🧹 Limpieza y reducción (opcional)
Actualmente hay varias dependencias y componentes **incluidos por defecto** que **no se usan** en la landing. Para aligerar el bundle puedes eliminar:

### Paquetes claramente no usados ahora
- `zod`
- `@hookform/resolvers`
- `date-fns`
- `tailwindcss-animate`
- `tw-animate-css`
- `autoprefixer` (Tailwind v4 ya no lo requiere en `postcss.config`)
- `sonner` y `next-themes` *(solo si no vas a usar el toaster/temas)*
- `recharts` *(no se renderiza ningún gráfico)*
- `embla-carousel-react` *(el carrusel de testimonios es custom)*
- `react-day-picker`
- `react-resizable-panels`
- `cmdk`
- `input-otp`
- `vaul`

> **Nota:** `react-dom` es requerido por Next.js aunque no se importe manualmente. **No lo elimines.**

### Componentes `components/ui/*` no referenciados por la app
Puedes borrar los que **no** uses para evitar arrastrar dependencias. Por ejemplo:
- `calendar.tsx`, `chart.tsx`, `command.tsx`, `drawer.tsx`, `input-otp.tsx`, `menubar.tsx`, `navigation-menu.tsx`,
  `pagination.tsx`, `resizable.tsx`, `sidebar.tsx`, `slider.tsx`, `tabs.tsx`, `sonner.tsx`, `toaster.tsx`,
  `carousel.tsx`, `table.tsx`, `progress.tsx`, `radio-group.tsx`, `select.tsx`, `switch.tsx`, etc.

> Los componentes **en uso** en esta landing incluyen principalmente: `button.tsx`, `card.tsx`, `badge.tsx`, `input.tsx`, `textarea.tsx`. Revisa `app/page.tsx` y las secciones en `components/` para verificar.

### Comandos para remover (ejemplos)
```bash
pnpm remove zod @hookform/resolvers date-fns tailwindcss-animate tw-animate-css autoprefixer   sonner next-themes recharts embla-carousel-react react-day-picker react-resizable-panels cmdk input-otp vaul
```
> Ejecuta en tu rama de trabajo y prueba el proyecto (`pnpm dev`) antes de hacer commit.

## 🚀 Despliegue
- Recomendado en **Vercel**.
- `NEXT_PUBLIC_` vars: no se requieren por ahora.  
- Agrega el dominio **grupolafecartagena.org** en el proyecto de Vercel y configura DNS.

## 👤 Créditos
**Desarrollado por [stevenpatino.dev](https://stevenpatino.dev)**

---

### Roadmap corto
- Integrar envío real del formulario (Resend / API propia).
- Agregar testimonios gestionables desde un JSON o CMS ligero.
- Reemplazar ícono por el logo oficial del grupo cuando esté listo.
- Añadir página de “Reuniones” con horarios y tipo (presencial/virtual).
