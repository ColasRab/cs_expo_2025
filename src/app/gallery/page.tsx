// src/app/gallery/page.tsx
"use client"
import { GalleryColumn } from "@/components/gallery/GalleryColumn"
import Footer from "@/components/global/footer"
import { ProjectsHero } from "../hall-of-fame/ui/ProjectsHero"
import Navbar from "@/components/global/nav-bar"

export default function Gallery() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0D0D0D] select-none">
      <header className="bg-transparent">
        <Navbar />
      </header>

      <div className="relative">
        <ProjectsHero pageTitle="Event Gallery" pageDesc="" />
        <GalleryColumn />
      </div>
      <Footer />
      <div />
    </div>
  )
}