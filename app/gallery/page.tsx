"use client"

import { useState, useEffect } from "react"
import { Play, ImageIcon, Calendar, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation/navigation"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { LanguageProvider, useLanguage } from "@/contexts/language-context"

interface MediaItem {
  id: string
  type: "image" | "video"
  title: string
  description: string
  url: string
  thumbnail: string
  date: string
  category: string
  youtubeId?: string
}

function GalleryPageContent() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [filter, setFilter] = useState<"all" | "image" | "video">("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [videoPlayerOpen, setVideoPlayerOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<MediaItem | null>(null)
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    const mock: MediaItem[] = [
      {
        id: "1",
        type: "image",
        title: "Evento del Día de la Madre",
        description: "Celebración especial del Día de la Madre",
        url: "/images/iglesia1.jpg",
        thumbnail: "/images/iglesia1.jpg",
        date: "2024-05-12",
        category: "Eventos Especiales",
      },
      {
        id: "2",
        type: "video",
        title: "Predicación: El Poder de la Oración",
        description: "Mensaje sobre la oración",
        url: "https://www.youtube.com/watch?v=Jf-0uZLjW9o",
        thumbnail: "https://img.youtube.com/vi/Jf-0uZLjW9o/maxresdefault.jpg",
        date: "2024-01-21",
        category: "Predicaciones",
        youtubeId: "Jf-0uZLjW9o",
      },
      {
        id: "3",
        type: "image",
        title: "Celebración Día de la Madre",
        description: "Pastor compartiendo en Día de la Madre",
        url: "/images/iglesia2.jpg",
        thumbnail: "/images/iglesia2.jpg",
        date: "2024-05-12",
        category: "Eventos Especiales",
      },
      {
        id: "4",
        type: "image",
        title: "Misión Identidad Guatemala 2024",
        description: "Evento especial de Misión Identidad",
        url: "/images/iglesia3.jpg",
        thumbnail: "/images/iglesia3.jpg",
        date: "2024-06-16",
        category: "Misiones",
      },
    ]
    setMediaItems(mock)
  }, [])

  const categories = ["all", ...Array.from(new Set(mediaItems.map((i) => i.category)))]
  const filteredItems = mediaItems.filter(
    (item) =>
      (filter === "all" || item.type === filter) && (selectedCategory === "all" || item.category === selectedCategory),
  )
  const imageItems = filteredItems.filter((i) => i.type === "image")

  const handleImageClick = (item: MediaItem) => {
    const idx = imageItems.findIndex((img) => img.id === item.id)
    setCurrentImageIndex(idx)
    setLightboxOpen(true)
  }
  const handleVideoClick = (item: MediaItem) => {
    setCurrentVideo(item)
    setVideoPlayerOpen(true)
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Link href="/">
              <Button variant="ghost" className="mb-6 text-neutral-200 hover:text-amber-400 bg-neutral-900/60">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("gallery.backToHome")}
              </Button>
            </Link>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-md bg-amber-700/20 border border-amber-600/30 mb-6">
                <ImageIcon className="h-8 w-8 text-amber-400" />
              </div>
              <h1 className="text-4xl font-light">{t("gallery.title")}</h1>
              <div className="w-24 h-[2px] bg-amber-600/50 mx-auto my-4"></div>
              <p className="text-neutral-300 max-w-2xl mx-auto">{t("gallery.subtitle")}</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex gap-2 bg-neutral-900/70 border border-neutral-800 rounded-xl p-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className={`${filter === "all" ? "bg-amber-600 hover:bg-amber-700 text-white" : "text-neutral-200 border-neutral-800 hover:border-amber-600/40"}`}
              >
                {t("gallery.all")}
              </Button>
              <Button
                variant={filter === "image" ? "default" : "outline"}
                onClick={() => setFilter("image")}
                className={`${filter === "image" ? "bg-amber-600 hover:bg-amber-700 text-white" : "text-neutral-200 border-neutral-800 hover:border-amber-600/40"}`}
              >
                {t("gallery.photos")}
              </Button>
              <Button
                variant={filter === "video" ? "default" : "outline"}
                onClick={() => setFilter("video")}
                className={`${filter === "video" ? "bg-amber-600 hover:bg-amber-700 text-white" : "text-neutral-200 border-neutral-800 hover:border-amber-600/40"}`}
              >
                {t("gallery.videos")}
              </Button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`${selectedCategory === category ? "bg-neutral-800 text-white border-amber-600/40" : "text-neutral-200 border-neutral-800 hover:border-amber-600/40"}`}
              >
                {category === "all" ? t("gallery.allCategories") : category}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="bg-neutral-900/75 border border-neutral-800 hover:border-amber-600/40 transition-colors cursor-pointer"
                onClick={() => (item.type === "image" ? handleImageClick(item) : handleVideoClick(item))}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-neutral-950/70 rounded-full flex items-center justify-center border border-neutral-800">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="bg-neutral-950/80 text-amber-300 text-xs px-3 py-1 rounded-full border border-amber-700/30">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-neutral-300 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center text-xs text-neutral-500">
                    <Calendar className="h-3 w-3 mr-2" />
                    {new Date(item.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxOpen && imageItems.length > 0 && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="absolute top-0 left-0 right-0 p-6">
            <div className="max-w-6xl mx-auto flex justify-end">
              <Button onClick={() => setLightboxOpen(false)} variant="ghost" className="text-white hover:bg-white/10">
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="relative max-w-6xl max-h-[80vh] mx-auto">
            <img
              src={imageItems[currentImageIndex]?.url || "/placeholder.svg"}
              alt={imageItems[currentImageIndex]?.title}
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
            />
          </div>
          {imageItems.length > 1 && (
            <>
              <Button
                onClick={() => setCurrentImageIndex((p) => (p - 1 + imageItems.length) % imageItems.length)}
                variant="ghost"
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                onClick={() => setCurrentImageIndex((p) => (p + 1) % imageItems.length)}
                variant="ghost"
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>
      )}

      {/* Video */}
      {videoPlayerOpen && currentVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="absolute top-0 left-0 right-0 p-6">
            <div className="max-w-6xl mx-auto flex justify-end">
              <Button
                onClick={() => setVideoPlayerOpen(false)}
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="relative max-w-6xl w-full mx-auto mt-12 px-4">
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              {currentVideo.youtubeId ? (
                <iframe
                  width="100%"
                  height="600"
                  src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0`}
                  title={currentVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                  style={{ minHeight: "400px", maxHeight: "70vh" }}
                ></iframe>
              ) : null}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default function GalleryPage() {
  return (
    <LanguageProvider>
      <GalleryPageContent />
    </LanguageProvider>
  )
}
