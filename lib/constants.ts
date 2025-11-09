// Constantes del proyecto Grupo La Fe Cartagena

export const SITE_CONFIG = {
  name: "Grupo La Fe Cartagena",
  shortName: "Grupo La Fe",
  description: "Grupo de apoyo para la recuperación de la ludopatía en Cartagena. Programa de 12 pasos, reuniones confidenciales y acompañamiento.",
  url: "https://grupolafecartagena.org",
  ogImage: "/logo.png",
} as const;

export const CONTACT_INFO = {
  phone: "+573014585476",
  email: "contact@grupolafecartagena.org",
  address: {
    locality: "Cartagena",
    country: "CO",
  },
} as const;

export const WHATSAPP_MESSAGES = {
  default: "Hola, me gustaría obtener información sobre el Grupo La Fe Cartagena",
  program: "Me interesa conocer más sobre el programa de 12 pasos",
  help: "Hola, me gustaría obtener información sobre el Grupo La Fe Cartagena",
} as const;

export const SOCIAL_LINKS = {
  // Agregar cuando haya redes sociales
  // facebook: "https://facebook.com/...",
  // instagram: "https://instagram.com/...",
} as const;

export const NAVIGATION = {
  sections: {
    home: "#",
    about: "#about-section",
    program: "#recovery-program-section",
    contact: "#contact-section",
    map: "#map-section",
  },
} as const;

export const METADATA = {
  title: "Grupo La Fe Cartagena - Jugadores Anónimos",
  keywords: "jugadores anónimos, ludopatía, apoyo, recuperación, Cartagena, grupo la fe",
  author: "Grupo La Fe Cartagena",
  robots: "index, follow",
} as const;