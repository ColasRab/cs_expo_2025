"use client"
import { GalleryHeader } from "@/components/gallery/GalleryHeader"
import { GalleryCarousel } from "@/components/gallery/GalleryCarousel"
import { events } from "./data/events"
import Footer from "@/components/global/footer"
import Galaxy from "@/components/global/Galaxy"

export default function Gallery() {
  return (
    <div className="flex min-h-screen flex-col select-none">
      <main
        className="relative flex-grow"
        style={{
          background:
            "linear-gradient(180deg, #1A1A1A 0%, #1A1A1A 30%, #480CA8 70%, #AF05C5 85%, #FF00DC 100%)",
        }}
      >
        <div className="absolute inset-0">
          <Galaxy
            mouseInteraction={false}
            mouseRepulsion={false}
            density={1.5}
            glowIntensity={0.5}
            saturation={0}
            hueShift={170}
            twinkleIntensity={0.5}
            rotationSpeed={0.1}
            repulsionStrength={1.0}
            autoCenterRepulsion={0}
            starSpeed={0.5}
          />
        </div>

        <div className="relative">
          <GalleryHeader />
          <GalleryCarousel events={events} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
