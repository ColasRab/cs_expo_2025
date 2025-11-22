"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/home/hero-section"
import Footer from "@/components/global/footer"
import Navbar from "@/components/global/nav-bar"
import FaultyTerminal from "@/components/FaultyTerminal"
import Hero from "@/components/home/Hero"
import SponsorCarousel from "@/components/home/sponsor-carousel"

export default function Home() {
  const [scale, setScale] = useState(1.5)
  const [dsize, setDsize] = useState(1.2)
  const [grid, setGrid] = useState(2)

  console.log(scale, dsize)

  useEffect(() => {
    const handleResize = () => {
      // If screen width <= 768px (typical mobile breakpoint)
      if (window.innerWidth <= 768) {
        setScale(1)
        setDsize(1)
        setGrid(1)
      } else {
        setScale(1.5)
        setDsize(1.2) 
        setGrid(2)
      }
    }

    handleResize() // Run once on mount
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const assets = [
    { src: "/logo/expo_logo.png", type: "image" as const },
    { src: "/HOF/vector.svg", type: "image" as const },
    // Add more assets as needed
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="relative flex-grow overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0D0D0D]">
          <FaultyTerminal
            scale={scale} // 👈 Responsive scale
            gridMul={[grid, 1]}
            digitSize={dsize}
            timeScale={1}
            pause={false}
            scanlineIntensity={1}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.2}
            tint="#341539"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={false}
            brightness={1}
          />
        </div>
        <Navbar />
        <div className="relative z-10 bg-gradient-to-b from-transparent via-transparent to-[#0F0019]">
          <HeroSection />
          <div className="text-center text-white px-4">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg tracking-wide mb-2 sm:mb-3">
              In Partnerships with
            </p>
            <SponsorCarousel
              scale={typeof window !== "undefined" && window.innerWidth <= 768 ? 75 : 125}
            />
          </div>
        </div>
      </main>
      <div className="bg-[#0F0019]">
        <Hero
          title="CS EXPO"
          description="A two-day event held on November 10-11, 2025 where students showcase their projects to faculty and industry experts, with awards for top innovations. Talks by tech leaders will explore current trends and insights."
          variant="expo"
          textDirection="horizontal-right"
        />
        <Hero
          title="Dev Day"
          description="Following the last day of CS Expo 2025, Dev Day brings together industry experts to share insights on staying current with tech skills and innovation in a fast-evolving field."
          variant="devday"
          textDirection="horizontal-left"
        />
      </div>

      <Footer />
    </div>
  )
}
