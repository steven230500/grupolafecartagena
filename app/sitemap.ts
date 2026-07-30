import type { MetadataRoute } from "next"
import { SITE_CONFIG, NAVIGATION } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const base = SITE_CONFIG.url

  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/${NAVIGATION.sections.about}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/${NAVIGATION.sections.program}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/${NAVIGATION.sections.contact}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/${NAVIGATION.sections.map}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}
