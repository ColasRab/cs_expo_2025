"use client";
import { projects } from "@/app/projects/data/ProjectsData";
import ProjectsCard from "@/components/projects/ProjectsCard";

interface ProjectsGridProps {
  selectedCategory?: string | null;
}

export default function ProjectsGrid({ selectedCategory }: ProjectsGridProps) {
  // Filter projects by category
  const filteredProjects = selectedCategory
    ? projects.filter((project) =>
      project.details.category.includes(selectedCategory)
    )
    : projects;

  return (
    <section className="w-full max-w-[1200px] py-8 px-4 sm:px-6 lg:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  mx-auto">      
    {filteredProjects.map((project) => (
      <ProjectsCard
        key={project.slug}
        appTitle={project.appTitle}
        thesisTitle={project.thesisTitle}
        groupName={project.details.groupName}
        members={project.details.groupMembers}
        mentor={project.details.mentor}
        category={project.details.category}
        poster={project.poster}
        slug={project.slug}
      />
    ))}
    </section>
  );
}
