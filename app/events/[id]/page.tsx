"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, MapPin, Users, ArrowLeft, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useParams } from "next/navigation"
import Navigation from "@/components/navigation/navigation"
import Footer from "@/components/layout/footer"
import { LanguageProvider } from "@/contexts/language-context"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  fullDescription: string
  attendees: number
  maxAttendees: number
  color: string
  category: string
  organizer: string
  requirements?: string[]
  agenda?: { time: string; activity: string }[]
}

export default function EventDetailPage() {
  const params = useParams()
  const [event, setEvent] = useState<Event | null>(null)
  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    const mock: Event = {
      id: params.id as string,
      title: "Servicio Dominical",
      date: "2025-02-02",
      time: "10:00 AM",
      location: "Santuario Principal",
      description: "Únete a nosotros para un tiempo de adoración y enseñanza.",
      fullDescription:
        "Cada domingo nos reunimos para adorar juntos y escuchar la Palabra de Dios. Un tiempo para toda la familia.",
      attendees: 245,
      maxAttendees: 300,
      color: "",
      category: "Servicio Regular",
      organizer: "Pastor Juan Pérez",
      requirements: ["No se requiere inscripción previa", "Vestimenta casual o formal"],
      agenda: [
        { time: "10:00 AM", activity: "Bienvenida y anuncios" },
        { time: "10:15 AM", activity: "Adoración" },
        { time: "11:00 AM", activity: "Predicación" },
        { time: "11:45 AM", activity: "Oración final" },
      ],
    }
    setEvent(mock)
  }, [params.id])

  if (!event) {
    return (
      <LanguageProvider>
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-600"></div>
        </div>
      </LanguageProvider>
    )
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-neutral-950 text-white">
        <Navigation />
        <main className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link href="/events">
                <Button variant="ghost" className="mb-4 group text-neutral-200 hover:text-amber-400 bg-neutral-900/60">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver a eventos
                </Button>
              </Link>
            </div>

            <Card className="bg-neutral-900/80 border border-neutral-800 overflow-hidden mb-8">
              <div className="h-2 bg-amber-700/40" />
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-neutral-800 text-neutral-200 text-xs px-3 py-1 rounded-full font-medium border border-neutral-700">
                        {event.category}
                      </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-3">{event.title}</h1>
                    <p className="text-neutral-300 mb-6">{event.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6 text-neutral-300">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-3 text-amber-400" />
                        <div className="font-medium">
                          {new Date(event.date).toLocaleDateString("es-ES", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-3 text-amber-400" />
                        <div className="font-medium">{event.time}</div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-3 text-amber-400" />
                        <div className="font-medium">{event.location}</div>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-3 text-amber-400" />
                        <div className="font-medium">
                          {event.attendees}/{event.maxAttendees} asistentes
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:min-w-[200px]">
                    
                    
                    
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card className="bg-neutral-900/80 border border-neutral-800">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold text-white mb-3">Descripción del evento</h2>
                    <p className="text-neutral-300">{event.fullDescription}</p>
                  </CardContent>
                </Card>

                {event.agenda && (
                  <Card className="bg-neutral-900/80 border border-neutral-800">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-semibold text-white mb-3">Agenda</h2>
                      <div className="space-y-3">
                        {event.agenda.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-4 p-3 rounded-md bg-neutral-900 border border-neutral-800"
                          >
                            <div className="bg-amber-700/25 text-amber-300 px-3 py-1 rounded-full text-sm font-semibold min-w-[80px] text-center border border-amber-700/30">
                              {item.time}
                            </div>
                            <div className="text-neutral-200">{item.activity}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="space-y-6">
                <Card className="bg-neutral-900/80 border border-neutral-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Organizador</h3>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-amber-700/25 border border-amber-700/30 rounded-full flex items-center justify-center text-white font-bold">
                        {event.organizer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-medium text-white">{event.organizer}</div>
                        <div className="text-sm text-neutral-400">Pastor Principal</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {event.requirements && (
                  <Card className="bg-neutral-900/80 border border-neutral-800">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Requisitos</h3>
                      <ul className="space-y-2">
                        {event.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                <Card className="bg-neutral-900/80 border border-neutral-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Asistencia</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-neutral-300">
                        <span>Confirmados</span>
                        <span className="font-semibold text-white">{event.attendees}</span>
                      </div>
                      <div className="w-full bg-neutral-800 rounded-full h-2">
                        <div
                          className="bg-amber-600 h-2 rounded-full"
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-neutral-300">
                        <span>Capacidad máxima</span>
                        <span className="font-semibold text-white">{event.maxAttendees}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
