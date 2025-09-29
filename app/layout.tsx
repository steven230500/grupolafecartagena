import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import { SITE_CONFIG, CONTACT_INFO, METADATA, SOCIAL_LINKS } from "@/lib/constants"
import "./globals.css"

export const metadata: Metadata = {
  title: METADATA.title,
  description: SITE_CONFIG.description,
  keywords: METADATA.keywords,
  authors: [{ name: METADATA.author }],
  robots: METADATA.robots,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    title: METADATA.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `Logo ${SITE_CONFIG.name}`,
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  manifest: "/site.webmanifest",
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
              "name": SITE_CONFIG.name,
              "description": SITE_CONFIG.description,
              "url": SITE_CONFIG.url,
              "telephone": CONTACT_INFO.phone,
              "email": CONTACT_INFO.email,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": CONTACT_INFO.address.locality,
                "addressCountry": CONTACT_INFO.address.country
              },
              "sameAs": Object.values(SOCIAL_LINKS)
            }),
          }}
        />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
