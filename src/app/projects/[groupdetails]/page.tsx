import { projects } from "../data/ProjectsData";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/global/nav-bar";
import Footer from "@/components/global/footer";
import ProjectInfo from "@/components/projects/GroupInfo";
import GroupGallery from "@/components/projects/GroupGallery";
import GroupHero from "@/components/projects/GroupHero";
import AVP from "@/components/projects/AVP";

type ProjectPageProps = {
  params: {
    groupdetails: string; //slug
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { groupdetails } = await params;
  const project = projects.find((p) => p.slug === groupdetails);

  if (!project) {
    return notFound();
  }

  const { appTitle, logo, details } = project;

  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />

      <div className="hidden md:block">
        <GroupHero
          appTitle={appTitle}
          groupName={details.groupName}
          logo={logo}
          groupPicture={details.photoshoot}
          soloPicture={details.memberPictures}
        />
      </div>

      {/* 🔹 Content section */}
      <div className="mt-30 sm:mt-0 bg-[#0F0019]">
        <ProjectInfo
          thesisTitle={project.thesisTitle}
          poster={project.poster}
          details={details}
        />

        {/* Video Section */}
        <section className="w-full mt-20 text-center">
          <h1
            className="font-monster text-gradient text-2xl leading-[100px] -tracking-[2px] md:text-8xl lg:text-[96px] px-6"
            style={
              {
                "--gradient-stop": "35%",
                "--gradient-pink": "60%",
              } as React.CSSProperties
            }
          >
            AVP
          </h1>
          <div className="w-full max-w-6xl mx-auto border-t border-white mt-6"></div>

          {details.videoLink && (
            <Suspense
              fallback={
                <div className="flex justify-center items-center py-12">
                  <div className="text-[#FF00DC]">Loading video…</div>
                </div>
              }
            >
              <AVP videoLink={details.videoLink} />
            </Suspense>
          )}
        </section>

        {/* Group Gallery Section */}
        <GroupGallery details={details} />
      </div>

      <Footer />
    </main>
  );
}
