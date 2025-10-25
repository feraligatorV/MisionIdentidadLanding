"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, BookOpen, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation/navigation"
import Footer from "@/components/layout/footer"
import Link from "next/link"
import { useParams } from "next/navigation"
import { LanguageProvider, useLanguage } from "@/contexts/language-context"

interface Leader {
  id: string
  name: string
  title: string
  description: string
  fullBio: string
  image: string
  yearsOfService?: number
}

function LeaderDetailPageInner() {
  const params = useParams()
  const [leader, setLeader] = useState<Leader | null>(null)
  const { t } = useLanguage()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    const list: Leader[] = [
      {
        id: "1",
        name: "Rev. Jonathan Olea",
        title: t("leaders.jonathan.title"),
        description: t("leaders.jonathan.description"),
        fullBio:
          "Jonathan nació en 1984 en Vancouver, British Columbia, Canadá, hijo de los pastores Jorge y Teresa Olea. Pocos años después de nacer, Jonathan junto a sus padres, comenzaron a viajar a diferentes partes del mundo, donde el pastor Jorge Olea predicaba el evangelio. A los 5 años, Jonathan y sus padres se mudaron a Los Ángeles, California, donde el pastor Jorge Olea se convirtió en el pastor principal de una congregación local. Jonathan pasó sus primeros años en la iglesia en Los Angeles, y fue allí donde comenzó a aprender sobre los diferentes aspectos del ministerio.\n\nEn 2003, Jonathan y sus padres se mudaron a Louisville, Kentucky, donde el pastor Jorge Olea asumió el cargo de pastor principal del CENTRO MUNDIAL DE ORACIÓN. En 2008, Jonathan se graduó de la universidad con una doble especialización en psicología y estudios bíblicos. En 2014, obtuvo su maestría en recursos humanos. Con el deseo de desarrollar sus habilidades de liderazgo, Jonathan se metió al Ejército (ARMY), donde sirvió de 2011 a 2019.\n\nTras un encuentro sobrenatural con el Señor, Jonathan entregó su vida por completo a Él en 2016 e inmediatamente sintió el llamado a predicar el evangelio y a formar líderes para el reino de nuestro Señor y Salvador, Jesucristo. Jonathan comenzó a ayudar a su padre en la Iglesia como pastor asociado en 2019. En 2020, el pastor Jorge Olea partió a casa para estar con el Señor y Jonathan asumió como pastor, líder y mentor dentro de la Iglesia. Hoy, la pastora Teresa Olea y su hijo Jonathan Olea dirigen el Centro Mundial de Oración, un ejemplo de liderazgo cristiano y desarrollo ministerial en el estado de Kentucky.\n\nJonathan y su esposa Shawnee se casaron en 2009 y tienen cuatro hijos maravillosos: Jackson, Sharlie, Kurtis y Amarie. Misión Identidad fue una misión especial, dada por Dios, que fue encomendada a Jonathan en 2024. El propósito de este maravilloso ministerio es predicar el evangelio y mostrar a todos quiénes son en Cristo, y el precio que Jesús pagó para revelar y restaurar su identidad. Misión Identidad comenzó en Guatemala y ahora se está expandiendo por Centroamérica. Su meta es estar en todos los países del mundo, predicando el evangelio, amando a la gente y ayudando al mundo ver su identidad en Cristo, pagada a precio de sangre.",
        image: "/images/jonathan-olea.jpg",
        yearsOfService: 15,
      },
      {
        id: "2",
        name: "Josué N. Garcia Sandoval",
        title: "Líder de Evangelismo y Multimedia",
        description: "Líder comprometido con el evangelismo y la tecnología al servicio del Reino de Dios.",
        fullBio:
          "Josué N. Garcia Sandoval nació en Ahuachapán, El Salvador. Es hijo único de José Luis Garcia y Guadalupe Sandoval Gonzales. Nació y creció en un hogar cristiano, su vida está marcada con milagros y prodigios.\n\nSu madre tuvo un accidente automovilístico estando embarazada pero Dios los protege a ambos, al nacer tenía un problema en la vista que necesitaba operación sus padres deciden obrar en fe y Dios lo sana sin necesidad de operación después de esto tiene problemas en el corazón los médicos le dicen a sus padres que necesita ser operado, ellos angustiados pero confiados en el poder de Dios deciden creer nuevamente en el poder sanador de Dios, y sucede otro milagro más en la corta vida de Josué Dios lo sana nuevamente sin necesidad de operación.\n\nA los seis años tomó la mejor decisión de su vida en una campaña evangelística entregó su vida a Dios, a los 15 años fue bautizado en agua, desde entonces fue parte de escuela bíblica dominical, en su adolescencia fue parte de ministerios como exploradores del rey, castillo del rey y líder de adolescentes, de jóvenes y maestro de escuela dominical.\n\nSus estudios primarios y secundarios los realiza en el colegio cristiano Revdo. Juan Bueno de la ciudad de Tacuba. El bachillerato lo estudia en el INTAC (instituto nacional de Tacuba), sus estudios universitarios los realiza en ITCA-FEPADE la carrera de técnico en ingeniería eléctrica y electrónica en la ciudad de Santa Ana, años más tarde ingresa a la universidad Dr. José Matías Delgado en la capital salvadoreña a estudiar Ing. industrial el cual no termina la carrera abandona sus estudios por lo peligroso que era el salvador en esos momentos y emigra a los estados unidos a finales del 2014 a la ciudad de Houston, vivió ahí durante seis meses y asistió a la iglesia Braeswood de las Asambleas de Dios, se traslada al estado de Indiana donde reside actualmente desde el 2015 asistió a una pequeña congregación donde fue líder de jóvenes.\n\nEn el 2019 recibe una noticia devastadora su padre muere de un infarto, la iglesia a la que asistía se desintegró por múltiples problemas, llega la pandemia del COVID y estuvo a punto de morir pero Dios le rescata una vez más. A inicios del año 2021 llega a la iglesia Centro Mundial De Oración, en enero del 2024 recibe otra noticia fuerte su madre es diagnosticada con leucemia todo corre rápido y pierde la vida ese mismo mes, esta noticia fue devastadora para su vida llevándolo a sufrir ansiedad y depresión, nuevamente Dios fortaleció su vida en esta etapa crítica, actualmente es parte del ministerio de evangelismo y multimedia de la iglesia centro mundial de oración, y también es parte del ministerio misión identidad.",
        image: "/images/josue-garcia.jpg",
        yearsOfService: 3,
      },
      {
        id: "3",
        name: "Darwin Pineda",
        title: "Coordinador de Misión Identidad Honduras",
        description:
          "Coordinador y organizador de Misión Identidad en Honduras, comprometido con llevar el evangelio a toda criatura.",
        fullBio:
          "Darwin Pineda nació en 1995 en Sonaguera, Colón, Honduras. Nació en un hogar cristiano de sus padres José Pineda y Aydelina Sales. Hizo sus estudios primarios y secundarios en la ciudad de Sonaguera, Colón unos años después fue a la universidad UNITEC (Universidad Tecnológica Centroamericana) donde estudió Ingeniería en Sistemas, en la ciudad de La Ceiba, Atlántida; donde formaba parte de la directiva de la facultad de Ingeniería en Sistemas, durante sus estudios universitarios continuó especializándose en E Commerce, Relaciones interpersonales con orientación en Marketing digital, realizó estudios técnicos de electricidad y Arduino.\n\nEn el 2018 hasta el año 2020 obtuvo el cargo de coordinación estatal de Colón de Programa Presidencial Becas 2020 el cual coordinaba y dirigía el programa. En el 2020 obtuvo el cargo de supervisor de enrolamiento en el Estado de Colón el cual fue contratado por el El Programa de las Naciones Unidas para el Desarrollo (PNUD), el cual su función era la actualización y depuración de la base de datos del Registro Nacional de las Personas de Honduras (RNP).\n\nDarwin Pineda es un hombre con principios y valores basados en el temor de Dios y las sagradas escrituras, caracterizado por el don de servir y ayudar al prójimo; Poco tiempo después contrajo matrimonio con su entonces novia Claudia Sarmiento. Y fue entonces que juntos emprendieron un nuevo camino guiado por la voluntad de Dios hacia la ciudad que se conocía como Sonaguera allí vivieron un periodo de tiempo y nació su hijo Aurel Pineda el cual fue de mucha bendición y aprendizaje en la nueva etapa de ser padres.\n\nUnos años más tarde Darwin viajó a los Estados Unidos de Norte América ya que fue uno más afectado por la delincuencia que se vive en su país Honduras, donde llegó a Louisville, Kentucky, el cual un poco tiempo después su esposa y su hijo viajaron también pues también fueron afectados por la delincuencia.\n\nEn el año 2021 del mes de Noviembre llegaron por primera vez a la iglesia Centro Mundial de Oración en Louisville, Kentucky, fecha que quedó marcada en sus vidas ya que ese día aceptaron al Señor Jesucristo como su buen Salvador de sus almas día que fue de mucho gozo y agradecimiento para ellos como matrimonio, el Pastor Roberto Juan fue la persona quien en todo momento estuvo al pendiente de ellos y fue él quien predicó la palabra de Dios cuando fueron Salvos. En el año 2022 en el mes de Mayo Darwin fue bautizado en la iglesia Centro Mundial de Oración, el mismo mes nació su hija Sharon Pineda. En el año 2023 del mes de agosto su esposa Claudia Sarmiento fue bautizada el cual hasta la actualidad se congregan y forman parte de diferentes ministerios en la iglesia.\n\nDarwin y su esposa Claudia en 2023 tienen tres extraordinarios hijos: Aurel, Sharon y su hijo Leam. Darwin y su esposa forman parte de Misión Identidad Honduras donde Darwin es el coordinador y organizador para llevar la palabra de Dios a toda criatura sea salva y forme parte en el reino de Dios, Misión Identidad para ellos es muy especial ya que tienen los principios y fundamentos que desarrollan nuestra identidad con nuestro Señor Jesucristo; un día en la Iglesia Centro Mundial de Oración nos acercamos al Pastor Jonathan Olea Director de Misión Identidad donde le sugerimos organizar todo para Honduras le explicamos la gran necesidad que existe en nuestro país en llevar la palabra de Dios ya que en la actualidad hay lugares que nunca nadie ha llegado a predicar el Evangelio de Dios, el pastor nos ofreció su ayuda para ir a predicar la palabra de Dios y así nació Misión Identidad Honduras en la actualidad estamos trabajando arduamente en Honduras con las iglesias, autoridades nacionales, departamentales, municipales, medios de comunicación (Televisión, Radio y Redes Sociales), Fundaciones, organizaciones, etc. Misión Identidad tiene como principal y único objetivo: evangelizar a todas las personas y sean salvas, no vamos a crear o imponer iglesias, ideologías, crear contienda o división, caso contrario vamos ayudar a las actuales iglesias a evangelizar y ayudar al prójimo.\n\nComo está escrito en la sagrada biblia: Marcos 16:15-16 'Y les dijo: Id por todo el mundo y predicad el evangelio a toda criatura. El que creyere y fuere bautizado, será salvo; mas el que no creyere, será condenado. Amén.'",
        image: "/images/darwin-pineda.jpg",
        yearsOfService: 3,
      },
      {
        id: "4",
        name: "Abdiel Eliseo Barrios Aguilar",
        title: "Asistente General y Presidente de Contenido Digital",
        description:
          "Líder en apoyo general y contenido digital, inspirando a otros a vivir una fe auténtica y descubrir el poder transformador del amor de Dios.",
        fullBio:
          "Nací en Quetzaltenango, Guatemala, hijo de Oscar Barrios y Marleni Aguilar, quienes me enseñaron a trabajar con esfuerzo, a respetar, perdonar y amar a las personas. Mi formación inició en la escuela Colonia El Maestro, luego continué mis estudios en el Liceo San Luis, donde completé el diversificado en computación. Más adelante cursé dos semestres en la Universidad de San Carlos.\n\nDurante mi juventud, entre los 10 y los 18 años, tomé tanto buenas como malas decisiones que marcaron mi vida. Sin embargo, en el año 2018, al viajar a Louisville, Kentucky, tuve un encuentro personal con Dios que transformó completamente mi corazón y mi manera de vivir. Desde entonces resido en Estados Unidos, donde el Señor me ha regalado una familia maravillosa: mi esposa y mis dos hijos.\n\nHoy sirvo a Dios con gratitud y amor, porque reconozco todo lo que Él ha hecho en mi vida y en la de mi familia. En Misión Identidad desempeño un rol de apoyo y liderazgo en diferentes áreas, buscando que cada esfuerzo apunte a glorificar a Cristo. Mi anhelo es inspirar a otros a vivir una fe auténtica y a descubrir el poder transformador del amor de Dios.",
        image: "/images/abdiel-barrios.jpg",
        yearsOfService: 6,
      },
    ]
    setLeader(list.find((l) => l.id === params.id) || list[0])
  }, [params.id, t])

  if (!leader) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[rgba(162,204,195,1)]"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/lideres">
              <Button
                variant="ghost"
                className="mb-4 text-neutral-200 hover:text-[rgba(162,204,195,1)] bg-neutral-900/60"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("leaders.backToLeaders")}
              </Button>
            </Link>
          </div>

          <Card className="bg-neutral-900/80 border border-[rgba(162,204,195,0.4)] overflow-hidden rounded-2xl">
            <div className="grid lg:grid-cols-[400px_1fr] gap-0">
              {/* Left Column - Leader Photo and Info */}
              <div className="bg-neutral-900 p-8 lg:p-10 flex flex-col items-center justify-start border-r border-[rgba(162,204,195,0.3)]">
                <div className="w-full max-w-[280px] mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[rgba(162,204,195,0.2)] rounded-full blur-2xl"></div>
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="relative w-full aspect-square rounded-full object-cover object-top border-4 border-[rgba(162,204,195,0.4)] shadow-2xl"
                    />
                  </div>
                </div>

                <div className="text-center w-full">
                  <h1 className="text-3xl font-semibold mb-2 text-white">{leader.name}</h1>
                  <p className="text-[rgba(162,204,195,1)] font-medium text-lg mb-6">{leader.title}</p>

                  {leader.yearsOfService && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 rounded-full border border-[rgba(162,204,195,0.3)]">
                      <Calendar className="h-4 w-4 text-[rgba(162,204,195,1)]" />
                      <span className="text-neutral-300 text-sm">
                        {leader.yearsOfService} {t("leaders.yearsOfService")}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Biography */}
              <div className="p-8 lg:p-10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-md bg-[rgba(162,204,195,0.2)] border border-[rgba(162,204,195,0.4)]">
                      <BookOpen className="h-6 w-6 text-[rgba(162,204,195,1)]" />
                    </div>
                    <h2 className="text-3xl font-semibold text-white">{t("leaders.biography")}</h2>
                  </div>
                  <div className="w-20 h-1 bg-[rgba(162,204,195,0.6)] rounded"></div>
                </div>

                <div className="text-neutral-300 leading-relaxed space-y-6">
                  {leader.fullBio.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-justify text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function LeaderDetailPage() {
  return (
    <LanguageProvider>
      <LeaderDetailPageInner />
    </LanguageProvider>
  )
}
