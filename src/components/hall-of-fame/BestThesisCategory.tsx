"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { BestProjects } from "../../app/hall-of-fame/data/BestProjectsData"
import { LiaLongArrowAltRightSolid } from "react-icons/lia"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import { slugify } from "../../app/hall-of-fame/util/nameToSlug"

export function BestThesisCategory() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="relative flex h-auto w-full flex-col overflow-hidden bg-[#0A0014] pb-8 sm:pb-10 lg:h-auto">
      {/* Decorative Top Border */}
      <div className="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF37E3]/30 to-transparent"></div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-4 left-4 h-12 w-12 border-t-2 border-l-2 border-[#FF37E3]/20 sm:top-6 sm:left-6 sm:h-14 sm:w-14 lg:top-8 lg:left-8 lg:h-24 lg:w-24"></div>
      <div className="absolute top-4 right-4 h-12 w-12 border-t-2 border-r-2 border-[#FF37E3]/20 sm:top-6 sm:right-6 sm:h-14 sm:w-14 lg:top-8 lg:right-8 lg:h-24 lg:w-24"></div>

      {/* Section Header */}
      <div className="flex items-center justify-center px-4 py-6 sm:py-8 lg:px-8 lg:py-10">
        <h1
          className="font-dreamer text-center text-3xl leading-tight tracking-wide text-white uppercase sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-[70px]"
          style={{
            filter: "drop-shadow(0px 0px 12px rgba(255,55,227,0.3))",
            WebkitTextStroke: "0.5px rgba(255,55,227,0.3)",
          }}
        >
          BEST THESIS BY CATEGORY
        </h1>
      </div>

      {/* Carousel Container */}
      <Carousel opts={{ loop: true }} setApi={setApi} className="flex flex-1 flex-col">
        <CarouselContent className="h-full">
          {BestProjects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="flex h-full flex-col items-center gap-4 sm:gap-6 lg:flex-row lg:gap-0">
                {/* Image Section */}
                <div className="relative flex w-full items-center justify-center px-4 py-2 pt-8 sm:px-6 sm:py-5 md:px-8 md:py-6 lg:h-full lg:w-[45%] lg:p-10">
                  {/* Image Container */}
                  <div className="relative inline-flex h-auto max-h-[45vh] w-full max-w-full items-center justify-center sm:max-h-[48vh] md:max-h-[52vh] lg:h-full lg:max-h-full">
                    <div
                      className="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-[12px] border-2 border-[#FF37E3]/20 transition-transform duration-300 hover:scale-105 sm:rounded-[16px] lg:hover:scale-102"
                      style={{
                        boxShadow: "0 0 40px rgba(255,55,227,0.3), 0 0 20px rgba(255,55,227,0.2)",
                      }}
                    >
                      <Image
                        src={project.img}
                        alt={project.title}
                        height={1000}
                        width={1000}
                        className="h-auto max-h-[45vh] w-auto max-w-[75vw] cursor-default object-contain transition-transform duration-300 select-none group-hover:scale-110 sm:max-h-[48vh] sm:max-w-[80vw] md:max-h-[52vh] lg:max-h-[70vh] lg:max-w-full"
                        quality={100}
                        priority
                        sizes="(max-width: 640px) 75vw, (max-width: 1024px) 65vw, 40vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex w-full flex-col justify-center px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 lg:h-full lg:w-[55%] lg:px-10 lg:py-8 xl:px-12">
                  <div className="flex h-full flex-col lg:items-center">
                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-center gap-3 text-white sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
                      {/* Category Title */}
                      <h2
                        className="font-avolta m-0 text-left text-3xl leading-[0.95] italic md:text-6xl"
                        style={{
                          textShadow:
                            "0 0 20px rgba(255,255,255,0.3), 0 0 10px rgba(255,255,255,0.2)",
                        }}
                      >
                        {project.title}
                      </h2>

                      {/* Group Name */}
                      <h3
                        className="font-avolta m-0 text-left text-xl leading-tight text-[#FF37E3] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[48px]"
                        style={{
                          textShadow:
                            "0 0 20px rgba(255,55,227,0.4), 0 0 10px rgba(255,55,227,0.3)",
                        }}
                      >
                        {project.groupName}
                      </h3>

                      {/* Thesis Title */}
                      {project.thesisTitle && (
                        <h4 className="font-helvetica m-0 max-w-4xl text-left text-sm leading-snug font-bold text-white sm:text-base md:text-lg lg:text-xl lg:leading-[26px] xl:text-[22px] xl:leading-[28px]">
                          {project.thesisTitle}
                        </h4>
                      )}

                      {/* Members & Mentor Row (viewable only on desktop to avoid visual clutter) */}
                      <div className="hidden flex-col gap-4 md:flex lg:flex-row lg:gap-6 xl:gap-8">
                        {/* Members */}
                        {project.members && (
                          <div className="flex-1">
                            <h5 className="font-helvetica mb-2 text-xs font-bold tracking-wider text-[#FF37E3] uppercase lg:mb-3 lg:text-sm xl:text-base">
                              Members
                            </h5>
                            <ul className="font-helvetica space-y-1 text-sm font-light text-white/90 lg:space-y-1.5 lg:text-[15px] xl:text-[16px]">
                              {project.members.map((member) => (
                                <li key={member} className="flex items-start gap-2">
                                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#FF37E3]"></span>
                                  <span>{member}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Mentor */}
                        {project.mentor && (
                          <div className="flex-1">
                            <h5 className="font-helvetica mb-2 text-xs font-bold tracking-wider text-[#FF37E3] uppercase lg:mb-3 lg:text-sm xl:text-base">
                              Mentor
                            </h5>
                            <p className="font-helvetica text-sm font-light text-white/90 lg:text-[15px] xl:text-[16px]">
                              {project.mentor}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Learn More Button */}
                      <a
                        href={
                          "https://cs-expo-2025.vercel.app/projects/" + slugify(project.groupName)
                        }
                        className="font-helvetica group mt-1 flex w-full items-center justify-center gap-2 rounded-full border-2 border-white px-5 py-2 text-sm font-medium transition-all hover:bg-white hover:text-[#0A0014] sm:gap-3 sm:px-6 sm:py-2.5 sm:text-base lg:mt-2 lg:w-auto lg:px-8 lg:py-3 lg:text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                        <LiaLongArrowAltRightSolid className="text-lg transition-transform group-hover:translate-x-1 sm:text-xl lg:text-2xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-6 py-2 select-none lg:gap-8">
          {/* Previous Button */}
          <CarouselPrevious className="static hidden flex-shrink-0 translate-x-0 translate-y-0 lg:flex" />

          {/* Page Tracker*/}
          <div className="relative flex items-center gap-2">
            {BestProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="relative z-10 transition-all duration-300"
                style={{
                  width: index === current ? "32px" : "8px",
                  height: "8px",
                  borderRadius: index === current ? "4px" : "50%",
                  backgroundColor: index === current ? "#FF37E3" : "rgba(255,255,255,0.4)",
                  boxShadow: index === current ? "0 0 12px rgba(255,55,227,0.6)" : "none",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <CarouselNext className="static hidden flex-shrink-0 translate-x-0 translate-y-0 select-none lg:flex" />
        </div>
      </Carousel>
    </section>
  )
}
