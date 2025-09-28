import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "Grupo La Fe Cartagena - Jugadores Anónimos",
  description:
    "Grupo de apoyo para la recuperación de la ludopatía en Cartagena. Programa de 12 pasos, reuniones confidenciales y acompañamiento.",
  keywords: "jugadores anónimos, ludopatía, apoyo, recuperación, Cartagena, grupo la fe",
  openGraph: {
    title: "Grupo La Fe Cartagena - Jugadores Anónimos",
    description: "Grupo de apoyo para la recuperación de la ludopatía en Cartagena. Programa de 12 pasos, reuniones confidenciales y acompañamiento.",
    url: "https://grupolafecartagena.org",
    siteName: "Grupo La Fe Cartagena",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "Logo Grupo La Fe Cartagena",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo La Fe Cartagena - Jugadores Anónimos",
    description: "Grupo de apoyo para la recuperación de la ludopatía en Cartagena. Programa de 12 pasos, reuniones confidenciales y acompañamiento.",
    images: ["/placeholder-logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Grupo La Fe Cartagena",
              "description": "Grupo de apoyo para la recuperación de la ludopatía en Cartagena. Programa de 12 pasos, reuniones confidenciales y acompañamiento.",
              "url": "https://grupolafecartagena.org",
              "telephone": "+57 320 3639742",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cartagena",
                "addressCountry": "CO"
              },
              "sameAs": [
                // agregar redes si hay
              ]
            }),
          }}
        />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
