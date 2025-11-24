import { BestThesisCategory } from "../../components/hall-of-fame/BestThesisCategory"
import { BestThesisMentor } from "../../components/hall-of-fame/BestThesisMentor"
import { Awardee } from "../../components/hall-of-fame/Awardee"
import { ProjectsHero } from "./ui/ProjectsHero"
import Navbar from "@/components/global/nav-bar"
import Footer from "@/components/global/footer"
import Image from "next/image"
export default function HallOfFamePage() {
  return (
    <div className="bg-[#0f0019]">
      {/* Nav */}
      <header className="top-0 right-0 left-0 z-50 bg-[#0D0D0D]">
        <Navbar />

        <ProjectsHero
          pageTitle="Hall Of Fame"
          pageDesc="The thesis groups and projects that earned their place here represent the pinnacle of brilliance at CS Expo 2025. These standout teams pushed the limits, delivered impactful solutions, and set the bar for future generations of innovators."
        />
      </header>
      {/* gradient transition */}
      <div className="h-40 w-full bg-gradient-to-b from-[#0D0D0D] from-[0%] to-[#0F0019] to-[90%]"></div>
      {/* HOF Sections */}
      <main className="relative">
        <Awardee />
        <BestThesisCategory />
        <BestThesisMentor />
      </main>
      <Footer />
    </div>
  )
}
