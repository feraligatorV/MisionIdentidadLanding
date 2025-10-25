"use client"

import { useState, useEffect } from "react"
import { Quote, Search, Heart, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/navigation/navigation"
import Footer from "@/components/layout/footer"
import { LanguageProvider, useLanguage } from "@/contexts/language-context"

interface Testimonial {
  id: string
  name: string
  title: string
  content: string
  location?: string
  date: string
  category: string
}

function TestimonialsPageContent() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [filteredTestimonials, setFilteredTestimonials] = useState<Testimonial[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const { t } = useLanguage()

  useEffect(() => {
    const mock: Testimonial[] = [
      {
        id: "1",
        name: t("testimonials.andres.name"),
        title: t("testimonials.andres.title"),
        content: t("testimonials.andres.content"),
        location: t("testimonials.andres.location"),
        date: "2024-01-15",
        category: "Sanación",
      },
      {
        id: "2",
        name: t("testimonials.carlos.name"),
        title: t("testimonials.carlos.title"),
        content: t("testimonials.carlos.content"),
        location: t("testimonials.carlos.testimony"),
        date: "2024-01-20",
        category: "Salvación",
      },
    ]
    setTestimonials(mock)
    setFilteredTestimonials(mock)
  }, [t])

  useEffect(() => {
    const q = searchTerm.toLowerCase()
    setFilteredTestimonials(
      testimonials.filter(
        (v) =>
          v.name.toLowerCase().includes(q) ||
          v.content.toLowerCase().includes(q) ||
          v.title.toLowerCase().includes(q) ||
          v.category.toLowerCase().includes(q),
      ),
    )
  }, [searchTerm, testimonials])

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-md bg-[rgba(162,204,195,0.2)] border border-[rgba(162,204,195,0.4)] mb-6">
              <Quote className="h-8 w-8 text-[rgba(162,204,195,1)]" />
            </div>
            <h1 className="text-4xl font-light mb-3">{t("testimonials.title")}</h1>
            <p className="text-neutral-300 mb-6">{t("testimonials.subtitle")}</p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
              <Input
                type="text"
                placeholder={t("testimonials.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 focus-visible:ring-[rgba(162,204,195,1)]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-neutral-900/75 border border-[rgba(162,204,195,0.4)]">
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <div className="p-2 rounded-full bg-[rgba(162,204,195,0.2)] border border-[rgba(162,204,195,0.4)] mr-3">
                      <Heart className="h-5 w-5 text-[rgba(162,204,195,1)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">{testimonial.title}</h3>
                      <span className="inline-block bg-neutral-800 text-neutral-200 text-xs px-2 py-1 rounded-full">
                        {testimonial.category}
                      </span>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-[rgba(162,204,195,1)] mb-3" />
                  <p className="text-neutral-300 mb-4 leading-relaxed">{testimonial.content}</p>
                  <div className="border-t border-[rgba(162,204,195,0.3)] pt-4">
                    <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                    {testimonial.location && (
                      <div className="flex items-center text-sm text-neutral-400 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.location}
                      </div>
                    )}
                    <p className="text-xs text-neutral-500 mt-2">
                      {new Date(testimonial.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-10">
              <p className="text-neutral-400 text-lg">{t("testimonials.noResults")}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <LanguageProvider>
      <TestimonialsPageContent />
    </LanguageProvider>
  )
}
