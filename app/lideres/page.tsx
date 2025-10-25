"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Calendar, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation/navigation"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { LanguageProvider, useLanguage } from "@/contexts/language-context"

interface Leader {
  id: string
  name: string
  title: string
  description: string
  image: string
  yearsOfService: number
}

function LideresPageContent() {
  const [leaders, setLeaders] = useState<Leader[]>([])
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setLeaders([
      {
        id: "1",
        name: "Rev. Jonathan Olea",
        title: t("leaders.jonathan.title"),
        description: t("leaders.jonathan.description"),
        image: "/images/jonathan-olea.jpg",
        yearsOfService: 15,
      },
      {
        id: "2",
        name: "Josué N. Garcia Sandoval",
        title: "Líder de Evangelismo y Multimedia",
        description: "Líder comprometido con el evangelismo y la tecnología al servicio del Reino de Dios.",
        image: "/images/josue-garcia.jpg",
        yearsOfService: 3,
      },
      {
        id: "3",
        name: "Darwin Pineda",
        title: "Coordinador de Misión Identidad Honduras",
        description:
          "Coordinador y organizador de Misión Identidad en Honduras, comprometido con llevar el evangelio a toda criatura.",
        image: "/images/darwin-pineda.jpg",
        yearsOfService: 3,
      },
      {
        id: "4",
        name: "Abdiel Eliseo Barrios Aguilar",
        title: "Asistente General y Presidente de Contenido Digital",
        description:
          "Líder en apoyo general y contenido digital, inspirando a otros a vivir una fe auténtica y descubrir el poder transformador del amor de Dios.",
        image: "/images/abdiel-barrios.jpg",
        yearsOfService: 6,
      },
      {
        id: "5",
        name: "Pastora María González",
        title: t("leaders.maria.title"),
        description: t("leaders.maria.description"),
        image: "/images/iglesia1.jpg",
        yearsOfService: 12,
      },
      {
        id: "6",
        name: "Pastor Carlos Rodríguez",
        title: t("leaders.carlos.title"),
        description: t("leaders.carlos.description"),
        image: "/images/iglesia2.jpg",
        yearsOfService: 8,
      },
    ])
  }, [t])

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Link href="/">
              <Button
                variant="ghost"
                className="mb-6 text-neutral-200 hover:text-[rgba(162,204,195,1)] bg-neutral-900/60"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("leaders.backToHome")}
              </Button>
            </Link>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-md bg-[rgba(162,204,195,0.2)] border border-[rgba(162,204,195,0.4)] mb-6">
                <Award className="h-8 w-8 text-[rgba(162,204,195,1)]" />
              </div>
              <h1 className="text-4xl font-light">{t("leaders.title")}</h1>
              <div className="w-24 h-[2px] bg-[rgba(162,204,195,0.6)] mx-auto my-4"></div>
              <p className="text-neutral-300 max-w-3xl mx-auto">{t("leaders.subtitle")}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <Link key={leader.id} href={`/lideres/${leader.id}`}>
                <Card className="group bg-neutral-900/75 border border-[rgba(162,204,195,0.4)] hover:border-[rgba(162,204,195,0.8)] transition-colors overflow-hidden h-[620px] flex flex-col">
                  <div className="relative h-[340px] flex-shrink-0 overflow-hidden">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="font-semibold text-white mb-1 text-lg">{leader.name}</h3>
                    <p className="text-[rgba(162,204,195,1)] font-medium mb-3 text-sm">{leader.title}</p>
                    <p className="text-neutral-300 text-sm mb-4 flex-1 line-clamp-3">{leader.description}</p>
                    <div className="flex items-center text-xs text-neutral-400 mt-auto">
                      <Calendar className="h-3 w-3 mr-2 flex-shrink-0" />
                      {leader.yearsOfService} {t("leaders.yearsOfService")}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function LideresPage() {
  return (
    <LanguageProvider>
      <LideresPageContent />
    </LanguageProvider>
  )
}
