import { Suspense } from "react"
import MediaHero from "@/components/sections/media-hero"
import About from "@/components/sections/about"
import EventsPreview from "@/components/sections/events-preview"
import TestimonialsPreview from "@/components/sections/testimonials-preview"
import SuggestionsComments from "@/components/sections/suggestions-comments"
import Contact from "@/components/sections/contact"
import SocialMedia from "@/components/sections/social-media"
import Navigation from "@/components/navigation/navigation"
import Footer from "@/components/layout/footer"
import { LanguageProvider } from "@/contexts/language-context"
import DynamicBackground from "@/components/layout/dynamic-background"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen text-white">
        <DynamicBackground
          images={["/images/iglesia1.jpg", "/images/church-service.jpg", "/images/prayer-meeting.jpg"]}
          sectionAnchors={["#home", "#about", "#events", "#testimonials", "#social", "#contact", "#suggestions"]}
          overlayOpacity={0.55}
          offset={140}
        />
        <Navigation />
        <main>
          <MediaHero />
          <About />
          <Suspense
            fallback={<div className="h-96 animate-pulse bg-black/30 border border-white/10 rounded-3xl mx-4" />}
          >
            <EventsPreview />
          </Suspense>
          <TestimonialsPreview />
          {/* The rest of the home can keep the translucent look too */}
          <SuggestionsComments />
          <SocialMedia />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
