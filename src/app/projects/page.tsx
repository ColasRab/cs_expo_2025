"use client"
import { useState } from "react";
import { ProjectsHero } from "@/app/hall-of-fame/ui/ProjectsHero";
import CategoryFilters from "@/components/projects/CategoryFilters";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/nav-bar";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <main className="bg-[#0D0D0D]">
      <Navbar />
      <ProjectsHero
        pageTitle="Project Collection"
        pageDesc="The Project Collection stands as a testament to the creativity, technical skill, and perseverance of the graduating students of the Computer Science program. Each project represents months of research, experimentation, and innovation, turning abstract ideas into tangible digital experiences that push the boundaries of what’s possible.


These projects were developed under the guidance of dedicated mentors and reflect each group’s distinct identity, creativity, and technical mastery. They demonstrate not only proficiency in software engineering and research methodologies, but also a deep commitment to solving meaningful problems through innovation. This collection reveals the next generation of computer scientists whose ideas shape the digital landscape of tomorrow."
      />
      <CategoryFilters onFilterChange={setSelectedCategory} />
      <div className="w-full max-w-6xl mx-auto border-t border-white mb-2"></div>
      <ProjectsGrid selectedCategory={selectedCategory} />
      <Footer />
    </main>
  );
}