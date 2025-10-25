"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, MapPin, Users, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Navigation from "@/components/navigation/navigation"
import Footer from "@/components/layout/footer"
import { LanguageProvider, useLanguage } from "@/contexts/language-context"

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
  category: string
}

function EventsPageContent() {
  const [events, setEvents] = useState<Event[]>([])
  const [currentDate, setCurrentDate] = useState(new Date(2025, 1))
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedDateEvents, setSelectedDateEvents] = useState<Event[]>([])
  const [showEventDetails, setShowEventDetails] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    const mock: Event[] = [
      {
        id: "1",
        title: t("events.service"),
        date: "2025-02-02",
        time: "10:00 AM",
        location: t("events.sanctuary"),
        description: t("events.serviceDesc"),
        fullDescription: "Domingo de adoración y palabra.",
        attendees: 245,
        maxAttendees: 300,
        category: "Servicio Regular",
      },
      {
        id: "2",
        title: t("events.bibleStudy"),
        date: "2025-02-05",
        time: "7:00 PM",
        location: t("events.conferenceRoom"),
        description: t("events.bibleStudyDesc"),
        fullDescription: "Estudio Bíblico semanal.",
        attendees: 45,
        maxAttendees: 60,
        category: "Educación",
      },
      {
        id: "3",
        title: t("events.prayer"),
        date: "2025-02-07",
        time: "6:30 PM",
        location: t("events.sanctuary"),
        description: t("events.prayerDesc"),
        fullDescription: "Noche de oración.",
        attendees: 78,
        maxAttendees: 150,
        category: "Oración",
      },
      {
        id: "4",
        title: "Retiro Juvenil",
        date: "2025-02-09",
        time: "9:00 AM",
        location: "Centro de Retiros",
        description: "Fin de semana especial para jóvenes.",
        fullDescription: "Retiro de jóvenes.",
        attendees: 32,
        maxAttendees: 50,
        category: "Juventud",
      },
      {
        id: "5",
        title: t("events.service"),
        date: "2025-02-16",
        time: "10:00 AM",
        location: t("events.sanctuary"),
        description: t("events.serviceDesc"),
        fullDescription: "Domingo de adoración.",
        attendees: 250,
        maxAttendees: 300,
        category: "Servicio Regular",
      },
      {
        id: "6",
        title: "Conferencia de Matrimonios",
        date: "2025-02-12",
        time: "7:00 PM",
        location: "Auditorio Principal",
        description: "Fortalece tu matrimonio.",
        fullDescription: "Conferencia para matrimonios.",
        attendees: 85,
        maxAttendees: 120,
        category: "Matrimonios",
      },
      {
        id: "7",
        title: "Ministerio de Niños",
        date: "2025-02-15",
        time: "3:00 PM",
        location: "Salón Infantil",
        description: "Actividades para niños.",
        fullDescription: "Programa infantil.",
        attendees: 65,
        maxAttendees: 80,
        category: "Niños",
      },
      {
        id: "8",
        title: t("events.service"),
        date: "2025-02-23",
        time: "10:00 AM",
        location: t("events.sanctuary"),
        description: t("events.serviceDesc"),
        fullDescription: "Domingo de adoración.",
        attendees: 240,
        maxAttendees: 300,
        category: "Servicio Regular",
      },
    ]
    setEvents(mock)
  }, [t])

  const getDaysInMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()
  const getFirstDayOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1).getDay()
  const getEventsForDate = (d: Date) => events.filter((e) => e.date === d.toISOString().split("T")[0])

  const handleDateClick = (d: Date) => {
    const evs = getEventsForDate(d)
    setSelectedDate(d)
    setSelectedDateEvents(evs)
    setShowEventDetails(evs.length > 0)
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const cells = []
    for (let i = 0; i < firstDay; i++) cells.push(<div key={`e-${i}`} className="h-16 sm:h-20"></div>)
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      const dateEvents = getEventsForDate(date)
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString()
      const hasEvents = dateEvents.length > 0
      cells.push(
        <button
          key={day}
          onClick={() => handleDateClick(date)}
          className={`h-16 sm:h-20 w-full rounded-md transition-all relative p-1 sm:p-2 border text-xs sm:text-sm ${
            isSelected
              ? "bg-amber-600 text-white border-amber-700 shadow"
              : hasEvents
                ? "bg-neutral-900 text-neutral-200 border-neutral-800 hover:border-amber-600/40"
                : "bg-neutral-950 text-neutral-300 border-neutral-900 hover:border-neutral-800"
          }`}
        >
          <div className="text-sm sm:text-base font-medium">{day}</div>
          {hasEvents && (
            <div className="mt-1 space-y-1">
              {dateEvents.slice(0, 1).map((event, idx) => (
                <div
                  key={idx}
                  className={`text-[10px] sm:text-xs px-1 py-0.5 rounded ${isSelected ? "bg-white/20 text-white" : "bg-amber-700/25 text-amber-300 border border-amber-700/30"}`}
                >
                  {event.title.length > 10 ? event.title.substring(0, 10) + "..." : event.title}
                </div>
              ))}
              {dateEvents.length > 1 && (
                <div
                  className={`text-[10px] sm:text-xs px-1 py-0.5 rounded ${isSelected ? "bg-white/20 text-white" : "bg-amber-800/30 text-amber-300 border border-amber-800/30"}`}
                >
                  +{dateEvents.length - 1}
                </div>
              )}
            </div>
          )}
        </button>,
      )
    }
    return cells
  }

  const monthNames = [
    t("calendar.january"),
    t("calendar.february"),
    t("calendar.march"),
    t("calendar.april"),
    t("calendar.may"),
    t("calendar.june"),
    t("calendar.july"),
    t("calendar.august"),
    t("calendar.september"),
    t("calendar.october"),
    t("calendar.november"),
    t("calendar.december"),
  ]
  const dayNames = [
    t("calendar.sunday"),
    t("calendar.monday"),
    t("calendar.tuesday"),
    t("calendar.wednesday"),
    t("calendar.thursday"),
    t("calendar.friday"),
    t("calendar.saturday"),
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4 group text-neutral-200 hover:text-amber-400 bg-neutral-900/60">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("events.backToHome")}
              </Button>
            </Link>
            <h1 className="text-4xl font-light text-white mb-3">{t("events.calendarTitle")}</h1>
            <p className="text-neutral-300">{t("events.calendarDesc")}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-neutral-900/75 border border-neutral-800">
                <CardContent className="p-3 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-light text-white">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h3>
                    <div className="flex gap-1 sm:gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                        className="hover:bg-neutral-800 text-white"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                        className="hover:bg-neutral-800 text-white"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {dayNames.map((d) => (
                      <div
                        key={d}
                        className="h-8 sm:h-10 flex items-center justify-center text-xs sm:text-sm text-neutral-300 bg-neutral-900 rounded"
                      >
                        {d}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1 sm:gap-2">{renderCalendar()}</div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              {showEventDetails && selectedDateEvents.length > 0 ? (
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-white mb-2">
                    {t("events.eventsOf")}{" "}
                    {selectedDate?.toLocaleDateString("es-ES", { day: "numeric", month: "long" })}
                  </h3>
                  {selectedDateEvents.map((e) => (
                    <Card key={e.id} className="bg-neutral-900/75 border border-neutral-800">
                      <CardContent className="p-4">
                        <div className="mb-2">
                          <span className="bg-neutral-800 text-neutral-200 text-xs px-2 py-1 rounded-full">
                            {e.category}
                          </span>
                        </div>
                        <h4 className="font-semibold text-white mb-1">{e.title}</h4>
                        <p className="text-sm text-neutral-300 mb-3">{e.description}</p>
                        <div className="space-y-1 mb-3 text-neutral-400 text-xs">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {e.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {e.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {e.attendees}/{e.maxAttendees}
                          </div>
                        </div>
                        <Link href={`/events/${e.id}`}>
                          <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                            {t("events.viewDetails")}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-neutral-900/75 border border-neutral-800">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-12 w-12 text-neutral-500 mx-auto mb-3" />
                    <h3 className="text-lg font-medium text-neutral-200 mb-1">{t("events.selectDate")}</h3>
                    <p className="text-neutral-400">{t("events.selectDateDesc")}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function EventsPage() {
  return (
    <LanguageProvider>
      <EventsPageContent />
    </LanguageProvider>
  )
}
