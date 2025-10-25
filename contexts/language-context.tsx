"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Quiénes Somos",
    "nav.events": "Eventos",
    "nav.leaders": "Líderes",
    "nav.gallery": "Galería",
    "nav.donations": "Donaciones",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.welcome": "Bienvenidos a",
    "hero.churchName": "Misión Identidad",
    "hero.subtitle": "Descubre tu identidad en Cristo",
    "hero.cta": "Únete a Nosotros",

    // About Section
    "about.title": "Quiénes Somos",
    "about.subtitle": "Conoce más sobre nuestra comunidad de fe",
    "about.mission.title": "Nuestra Misión",
    "about.mission.description":
      "Fortalecer principios y fundamentos que desarrollen nuestra identidad con nuestro Señor Jesucrito.",
    "about.vision.title": "Nuestra Visión",
    "about.vision.description":
      "Que todos comprendan el valor de ser hijos de Dios, evangelizando a las personas que aún no conocen de nuestro Señor Jesucristo y dar un avivamiento del Espíritu Santo en las iglesias.",

    // Mission Section
    "mission.title": "Nuestra Misión",
    "mission.description":
      "Fortalecer principios y fundamentos que desarrollen nuestra identidad con nuestro Señor Jesucrito.",

    // Vision Section
    "vision.title": "Nuestra Visión",
    "vision.description":
      "Que todos comprendan el valor de ser hijos de Dios, evangelizando a las personas que aún no conocen de nuestro Señor Jesucristo y dar un avivamiento del Espíritu Santo en las iglesias.",

    // Events Section
    "events.title": "Próximos Eventos",
    "events.subtitle": "Únete a nuestras actividades y celebraciones",
    "events.viewAll": "Ver Todos los Eventos",
    "events.date": "Fecha",
    "events.time": "Hora",
    "events.location": "Ubicación",
    "events.register": "Registrarse",

    // Leaders Section
    "leaders.title": "Nuestros Líderes",
    "leaders.subtitle": "Conoce a quienes guían nuestra comunidad de fe",
    "leaders.backToHome": "Volver al Inicio",
    "leaders.backToLeaders": "Volver a Líderes",
    "leaders.yearsOfService": "años de servicio",
    "leaders.biography": "Su Biografía",
    "leaders.specialties": "Especialidades",
    "leaders.education": "Educación",
    "leaders.achievements": "Logros",
    "leaders.jonathan.title": "Pastor Principal",
    "leaders.jonathan.description": "Líder espiritual con más de 15 años de experiencia en el ministerio.",

    // Testimonials Section
    "testimonials.title": "Testimonios",
    "testimonials.subtitle": "Historias de transformación y fe",
    "testimonials.viewAll": "Ver Todos los Testimonios",
    "testimonials.andres.title": "Sanación Milagrosa en San Martín",
    "testimonials.andres.content":
      "Durante una visita inesperada en San Martín, oraron por Andrés, un hombre que había sido atropellado y no podía caminar. Después de la oración, Dios lo sanó completamente, y a los pocos días ya realizaba sus tareas con normalidad.",
    "testimonials.andres.name": "Andrés",
    "testimonials.andres.location": "San Martín",
    "testimonials.carlos.title": "Transformación del Corazón",
    "testimonials.carlos.content":
      "También conocieron a Carlos, un hombre incrédulo que decía tener el símbolo de la bestia y no creía en los pastores. Al orar por él, Dios tocó su corazón, se quebrantó y llorando reconoció que eso era lo que necesitaba.",
    "testimonials.carlos.name": "Carlos",
    "testimonials.carlos.testimony": "Testimonio de Fe",

    // Gallery Section
    "gallery.title": "Galería",
    "gallery.subtitle": "Momentos especiales de nuestra comunidad",

    // Donations Section
    "donations.title": "Donaciones",
    "donations.subtitle": "Apoya nuestro ministerio",
    "donations.description": "Tu generosidad nos ayuda a continuar con nuestra misión de predicar el evangelio.",
    "donations.amount": "Cantidad",
    "donations.donate": "Donar",

    // Contact Section
    "contact.title": "Contáctanos",
    "contact.subtitle": "Estamos aquí para ti",
    "contact.address": "Dirección",
    "contact.phone": "Teléfono",
    "contact.email": "Correo Electrónico",
    "contact.hours": "Horarios de Servicio",
    "contact.sunday": "Domingo: 10:00 AM - 12:00 PM",
    "contact.wednesday": "Miércoles: 7:00 PM - 9:00 PM",

    // Footer
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.followUs": "Síguenos",
    "footer.rights": "Todos los derechos reservados.",

    // Common
    "common.readMore": "Leer Más",
    "common.learnMore": "Conocer Más",
    "common.viewMore": "Ver Más",
    "common.loading": "Cargando...",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.events": "Events",
    "nav.leaders": "Leaders",
    "nav.gallery": "Gallery",
    "nav.donations": "Donations",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",

    // Hero Section
    "hero.welcome": "Welcome to",
    "hero.churchName": "Mission Identity",
    "hero.subtitle": "Discover your identity in Christ",
    "hero.cta": "Join Us",

    // About Section
    "about.title": "About Us",
    "about.subtitle": "Learn more about our faith community",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "To strengthen principles and foundations that develop our identity with our Lord Jesus Christ.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "That everyone understands the value of being children of God, evangelizing people who do not yet know our Lord Jesus Christ and bringing a revival of the Holy Spirit in churches.",

    // Mission Section
    "mission.title": "Our Mission",
    "mission.description":
      "To strengthen principles and foundations that develop our identity with our Lord Jesus Christ.",

    // Vision Section
    "vision.title": "Our Vision",
    "vision.description":
      "That everyone understands the value of being children of God, evangelizing people who do not yet know our Lord Jesus Christ and bringing a revival of the Holy Spirit in churches.",

    // Events Section
    "events.title": "Upcoming Events",
    "events.subtitle": "Join our activities and celebrations",
    "events.viewAll": "View All Events",
    "events.date": "Date",
    "events.time": "Time",
    "events.location": "Location",
    "events.register": "Register",

    // Leaders Section
    "leaders.title": "Our Leaders",
    "leaders.subtitle": "Meet those who guide our faith community",
    "leaders.backToHome": "Back to Home",
    "leaders.backToLeaders": "Back to Leaders",
    "leaders.yearsOfService": "years of service",
    "leaders.biography": "Biography",
    "leaders.specialties": "Specialties",
    "leaders.education": "Education",
    "leaders.achievements": "Achievements",
    "leaders.jonathan.title": "Senior Pastor",
    "leaders.jonathan.description": "Spiritual leader with over 15 years of ministry experience.",

    // Testimonials Section
    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "Stories of transformation and faith",
    "testimonials.viewAll": "View All Testimonials",
    "testimonials.andres.title": "Miraculous Healing in San Martín",
    "testimonials.andres.content":
      "During an unexpected visit in San Martín, they prayed for Andrés, a man who had been hit by a car and couldn't walk. After prayer, God healed him completely, and within a few days he was performing his daily tasks normally.",
    "testimonials.andres.name": "Andrés",
    "testimonials.andres.location": "San Martín",
    "testimonials.carlos.title": "Heart Transformation",
    "testimonials.carlos.content":
      "They also met Carlos, an unbelieving man who claimed to have the mark of the beast and didn't believe in pastors. When they prayed for him, God touched his heart, he broke down and crying recognized that this was what he needed.",
    "testimonials.carlos.name": "Carlos",
    "testimonials.carlos.testimony": "Testimony of Faith",

    // Gallery Section
    "gallery.title": "Gallery",
    "gallery.subtitle": "Special moments from our community",

    // Donations Section
    "donations.title": "Donations",
    "donations.subtitle": "Support our ministry",
    "donations.description": "Your generosity helps us continue our mission of preaching the gospel.",
    "donations.amount": "Amount",
    "donations.donate": "Donate",

    // Contact Section
    "contact.title": "Contact Us",
    "contact.subtitle": "We are here for you",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Service Hours",
    "contact.sunday": "Sunday: 10:00 AM - 12:00 PM",
    "contact.wednesday": "Wednesday: 7:00 PM - 9:00 PM",

    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved.",

    // Common
    "common.readMore": "Read More",
    "common.learnMore": "Learn More",
    "common.viewMore": "View More",
    "common.loading": "Loading...",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
