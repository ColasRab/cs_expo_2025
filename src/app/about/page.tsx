'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PixelBlast from '@/components/global/PixelBlast';
import Navbar from '@/components/global/nav-bar';
import Footer from '@/components/global/footer';

export default function AboutPage() {
  const [currentTeamPage, setCurrentTeamPage] = useState(0);
  const [currentFacultyIndex, setCurrentFacultyIndex] = useState(0);

  // Data URIs for placeholder images
  const teamPlaceholder = 'data:image/svg+xml;base64,' + btoa(`
    <svg width="250" height="375" xmlns="http://www.w3.org/2000/svg">
      <rect width="250" height="375" fill="#8B5CF6"/>
      <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="20" font-family="Arial">Team Member</text>
    </svg>
  `);

  const committeePlaceholder = 'data:image/svg+xml;base64,' + btoa(`
    <svg width="286" height="348" xmlns="http://www.w3.org/2000/svg">
      <rect width="286" height="348" fill="#FF33E1"/>
      <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="20" font-family="Arial">Committee</text>
    </svg>
  `);

  const facultyPlaceholder = 'data:image/svg+xml;base64,' + btoa(`
    <svg width="440" height="336" xmlns="http://www.w3.org/2000/svg">
      <rect width="440" height="336" fill="#8B5CF6"/>
      <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="20" font-family="Arial">Faculty</text>
    </svg>
  `);

  const posterPlaceholder = 'data:image/svg+xml;base64,' + btoa(`
    <svg width="536" height="714" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FF33E1;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="536" height="714" fill="url(#grad)"/>
      <text x="50%" y="45%" text-anchor="middle" fill="white" font-size="32" font-weight="bold" font-family="Arial">CS EXPO 2025</text>
      <text x="50%" y="52%" text-anchor="middle" fill="white" font-size="24" font-family="Arial">Digital Reverie</text>
      <text x="50%" y="58%" text-anchor="middle" fill="white" font-size="16" font-family="Arial">Poster Placeholder</text>
    </svg>
  `);

  // Placeholder team members data (4 rows x 4 members)
  const teamMembers = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    name: `Team Member ${i + 1}`,
    role: 'Position',
    image: teamPlaceholder
  }));

  // Placeholder committee members data
  const committeeMembers = Array.from({ length: 13 }, (_, i) => ({
    id: i,
    name: `Committee Member ${i + 1}`,
    role: 'Committee Position',
    image: committeePlaceholder
  }));

  // Placeholder faculty data
  const facultyMembers = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    name: `Faculty Member ${i + 1}`,
    position: 'Professor',
    image: facultyPlaceholder
  }));

  const itemsPerPage = 8;
  const totalTeamPages = Math.ceil(teamMembers.length / itemsPerPage);

  const displayedTeamMembers = teamMembers.slice(
    currentTeamPage * itemsPerPage,
    (currentTeamPage + 1) * itemsPerPage
  );

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color="#b19eef"
          patternScale={2}
          patternDensity={1}
          enableRipples={true}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        {/* About CS Expo Section */}
        <section className="container mx-auto px-4 sm:px-6 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-6 md:pb-16">
          <div className="relative">
            {/* Gradient overlay */}
            <div className="absolute inset-0 pointer-events-none" />

            {/* Title with ellipse background */}
            <div className="relative flex justify-center mb-8 sm:mb-10 md:mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FF33E1]/20 blur-3xl rounded-full scale-150" />
                <h1
                  className="font-monster text-gradient text-2xl leading-[100px] -tracking-[2px] md:text-8xl lg:text-[96px] px-6"
                  style={
                    {
                      "--gradient-stop": "35%",
                      "--gradient-pink": "60%",
                    } as React.CSSProperties
                  }
                >
                  ABOUT CS EXPO
                </h1>
              </div>
            </div>

            {/* Poster and Text Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
              {/* Poster */}
              <div className="flex justify-center md:justify-end order-2 md:order-1">
                <div className="relative w-full max-w-sm sm:max-w-md bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={"/about/poster.png"}
                    alt="CS Expo 2025 Digital Reverie Poster"
                    width={536}
                    height={714}
                    className="rounded-xl sm:rounded-2xl w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center order-1 md:order-2">
                <div className="prose prose-invert max-w-none font-helvetica">
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim. Suspendisse congue felis sapien, eu finibus ante pretium eget. Vestibulum aliquam viverra lorem vitae maximus.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim. Suspendisse congue felis sapien, eu finibus ante pretium eget. Vestibulum aliquam viverra lorem vitae maximus.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white mt-3 sm:mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim. Suspendisse congue felis sapien, eu finibus ante pretium eget. Vestibulum aliquam viverra lorem vitae maximus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Visionary Teams Section */}
        <section className="container mx-auto px-4 sm:px-6 md:px-10 py-4 sm:py-16 md:py-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1
              className="font-monster text-gradient text-2xl leading-[100px] -tracking-[2px] md:text-5xl lg:text-[68px] px-6"
              style={
                {
                  "--gradient-stop": "35%",
                  "--gradient-pink": "60%",
                } as React.CSSProperties
              }
            >
              THE VISIONARY TEAMS
            </h1>
            <p className="text-4xl sm:text-sm md:text-base lg:text-4xl text-white font-avolta px-2 drop-shadow-[0_2px_6px_#FFFFFFCC]">
              43 blablabla, blablabla
            </p>
          </div>

          {/* Team Grid with Navigation */}
          <div className="relative max-w-7xl mx-auto px-0 sm:px-8 md:px-12">
            {/* Left Arrow - Hidden on mobile */}
            <button
              onClick={() => setCurrentTeamPage((prev) => (prev > 0 ? prev - 1 : prev))}
              disabled={currentTeamPage === 0}
              className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 lg:-translate-x-12 z-10 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
              aria-label="Previous page"
            >
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white/50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>

            {/* Team Grid - 2 rows x 4 columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {displayedTeamMembers.map((member) => (
                <div key={member.id} className="group">
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/10 hover:border-[#FF33E1]/50 transition-all duration-300">
                    <div className="aspect-[3/4] relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-2 sm:p-3 md:p-4 text-center bg-black/50">
                      <h3 className="font-semibold text-xs sm:text-sm md:text-base">{member.name}</h3>
                      <p className="text-[10px] sm:text-xs md:text-sm text-[#FF33E1]">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow - Hidden on mobile */}
            <button
              onClick={() => setCurrentTeamPage((prev) => (prev < totalTeamPages - 1 ? prev + 1 : prev))}
              disabled={currentTeamPage === totalTeamPages - 1}
              className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 lg:translate-x-12 z-10 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
              aria-label="Next page"
            >
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white/50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* Mobile Navigation Dots */}
            <div className="flex sm:hidden justify-center gap-2 mt-6">
              {Array.from({ length: totalTeamPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamPage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentTeamPage ? 'bg-[#FF33E1] w-6' : 'bg-white/30'
                    }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Organizing Committees Section */}
        <section className="container mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
          <div className="relative">
            {/* Background gradient overlays */}
            <div className="absolute inset-0 pointer-events-none" />

            {/* Title with ellipse background */}
            <div className="relative flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                <div className="relative text-center px-4 sm:px-6 md:px-8 py-3 sm:py-4">
                  <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-[70%]">
                    <div className="h-[150px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,#ff00dc_0%,transparent_70%)] opacity-[35%] blur-[60px] sm:h-[250px] sm:w-[600px] sm:opacity-[40%] sm:blur-[80px] lg:h-[350px] lg:w-[1000px] lg:blur-[100px]"></div>
                  </div>

                  <h1
                    className="font-monster text-gradient text-2xl leading-[100px] -tracking-[2px] md:text-8xl lg:text-[96px] px-6"
                    style={
                      {
                        "--gradient-stop": "10%",
                        "--gradient-pink": "30%",
                      } as React.CSSProperties
                    }
                  >
                    ORGANIZING COMMITTEES
                  </h1>
                  <p className="text-4xl sm:text-sm md:text-base lg:text-4xl text-white font-avolta py-16 drop-shadow-[0_2px_6px_#FFFFFFCC]">
                    The Pillars of CS EXPO 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
              <div className="flex flex-wrap justify-center gap-10 mb-4 sm:mb-6">
                {['Event Head', 'Externals', 'Publicity', 'Creatives', 'Media', 'Publications'].map((category) => (
                  <button
                    key={category}
                    className="
          min-w-[120px] px-2 font-helvetica font-bold h-[35px] text-sm rounded-[8px] transition-all whitespace-nowrap
          text-white border border-white hover:bg-[#ff00dc] hover:text-white hover:border-[#ff00dc]
        "
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-10">
                {['Programs', 'Technicals', 'Finance', 'Developers', 'Documentations', 'Logistics'].map((category) => (
                  <button
                    key={category}
                    className="
          min-w-[120px] px-2 font-helvetica font-bold h-[35px] text-sm rounded-[8px] transition-all whitespace-nowrap
          text-white border border-white hover:bg-[#ff00dc] hover:text-white hover:border-[#ff00dc]
        "
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="max-w-6xl mx-auto mb-6 sm:mb-8 md:mb-10">
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            {/* Committee Grid */}
            <div className="max-w-6xl mx-auto">
              {/* First row - centered single item */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="w-full max-w-[240px] sm:max-w-xs">
                  <div className="group">
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/10 hover:border-[#FF33E1]/50 transition-all duration-300">
                      <div className="aspect-[286/348] relative">
                        <Image
                          src={committeeMembers[0].image}
                          alt={committeeMembers[0].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-2 sm:p-3 md:p-4 text-center bg-black/50">
                        <h3 className="font-semibold text-xs sm:text-sm md:text-base">{committeeMembers[0].name}</h3>
                        <p className="text-[10px] sm:text-xs md:text-sm text-[#FF33E1]">{committeeMembers[0].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Remaining rows - 4 columns */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {committeeMembers.slice(1).map((member) => (
                  <div key={member.id} className="group">
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/10 hover:border-[#FF33E1]/50 transition-all duration-300">
                      <div className="aspect-[286/348] relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-2 sm:p-3 md:p-4 text-center bg-black/50">
                        <h3 className="font-semibold text-xs sm:text-sm md:text-base">{member.name}</h3>
                        <p className="text-[10px] sm:text-xs md:text-sm text-[#FF33E1]">{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Members Section */}
        <section className="container mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h1
                className="font-monster text-gradient text-2xl leading-[100px] -tracking-[2px] md:text-5xl lg:text-[56px] px-6"
                style={
                  {
                    "--gradient-stop": "35%",
                    "--gradient-pink": "60%",
                  } as React.CSSProperties
                }
              >
                FACULTY MEMBERS
              </h1>
            </div>

            {/* Faculty Carousel */}
            <div className="relative px-0 sm:px-8 md:px-12">
              {/* Left Arrow - Hidden on mobile */}
              <button
                onClick={() => setCurrentFacultyIndex((prev) => (prev > 0 ? prev - 1 : facultyMembers.length - 1))}
                className="hidden sm:block absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 md:-translate-x-8 lg:-translate-x-12 z-10 hover:scale-110 transition-transform"
                aria-label="Previous faculty"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white/50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </button>

              {/* Faculty Image */}
              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-sm sm:max-w-md aspect-[440/336] mb-4 sm:mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={facultyMembers[currentFacultyIndex].image}
                    alt={facultyMembers[currentFacultyIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Faculty Info */}
                <div className="text-center mb-6 sm:mb-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">
                    {facultyMembers[currentFacultyIndex].name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#FF33E1]">
                    {facultyMembers[currentFacultyIndex].position}
                  </p>
                </div>
              </div>

              {/* Right Arrow - Hidden on mobile */}
              <button
                onClick={() => setCurrentFacultyIndex((prev) => (prev < facultyMembers.length - 1 ? prev + 1 : 0))}
                className="hidden sm:block absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 md:translate-x-8 lg:translate-x-12 z-10 hover:scale-110 transition-transform"
                aria-label="Next faculty"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white/50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {/* Mobile Navigation Dots */}
              <div className="flex sm:hidden justify-center gap-2">
                {facultyMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFacultyIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentFacultyIndex ? 'bg-[#FF33E1] w-6' : 'bg-white/30'
                      }`}
                    aria-label={`View faculty member ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
