import React from 'react';
import Hero from '@/components/events/Hero';
import SpeakersCarousel from '@/components/events/SpeakersCarousel';
import DevDayScheduleLayout from '@/components/events/DevDayScheduleLayout';
import { testSpeakers } from '@/app/events/data/testSpeakers';
import Navbar from '@/components/global/nav-bar';
import Footer from '@/components/global/footer';


function DevDayPage() {
  return (
    <div className="min-h-screen bg-[rgba(15,0,25,1)] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[500px] sm:h-[550px] md:h-[700px] lg:h-[800px] z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: 'url(/events/devday-hero-background.png)',
          }}
        />
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 10%, rgba(15, 0, 25, 1) 80%)'
          }}
        />
      </div>

      {/* SVG Shape Background 1 - Left Side */}
      <div className="absolute left-0 top-[25%] -translate-y-1/2 z-0 opacity-70">
        <img
          src="/events/shape-240.svg"
          alt=""
          className="w-[100px] sm:w-[150px] md:w-[250px] lg:w-[400px] xl:w-[500px]"
        />
      </div>

      {/* SVG Shape Background 2 - Right Side */}
      <div className="absolute right-0 top-[30%] -translate-y-1/2 z-0 opacity-70">
        <img
          src="/events/shape-240-2.svg"
          alt=""
          className="w-[100px] sm:w-[150px] md:w-[250px] lg:w-[300px]"
        />
      </div>

       {/* SVG Shape Background 3 - Left Side */}
      <div
        className="absolute left-[0] top-[50%] -translate-y-1/2 z-0 opacity-70"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)'
        }}
      >
        <img
          src="/events/shape-240-3.svg"
          alt=""
          className="w-[100px] sm:w-[150px] md:w-[250px] lg:w-[300px]"
        />
      </div>
     
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Hero Component */}
        <Hero
          title='DEV DAY'
          description="Kicking off as the prelude to CS Expo 2025, Dev Day brings forth a collection of industry experts as they share insights on keeping up with the current tech trends and innovations in a fast-evolving field. This day also brings a meaningful discussion on how academe, industry, and government collaborate within the field of tech."
          variant="devday"
        />

        {/* Dev Day Info Layout */}
        <DevDayScheduleLayout
          variant="devday"
          devDayInfo={{
            title: "Dev Day",
            subtitle: "November 12, 2025  |  9:00 AM - 5:00 PM",
            description: "The start of this 3-day journey. Dev Day takes you on a ride as you get insights into the current relevant technologies, as well as insights you'll need to keep up in the future of this dynamically evolving field!"
          }}
          staticSections={[
            {
              title: "Keynote Talk",
              subtitle: "Shaping Yourself for Today’s Industry and Tomorrow’s Innovation",
              description: "Ms. Deirdre Conde discusses how you can prepare yourself for today’s industry demands and future technology. Teaching how to adapt and thrive in a fast-evolving tech landscape."
            },
            {
              title: "Panel Discussion",
              subtitle: "Driving Technology Forward Through Cross-Sector Collaboration in Academia, Industry, and Government.",
              description: "Mr. Justine Jude C. Pura, Mr. Edwin Concepcion, and Ms. Jennifer Queddeng explores how the fields of academia, industry, and government can work together to move the ever-evolving field of tech and its innovators forward."
            }
          ]}
          carouselSections={[
            {
              title: "Lightning Talk 1",
              subtitle: "From Code to Cloud with Containers and CI/CD Workflows",
              description: "Mr. Sermil Matoto explains how developers can streamline software development with the use of containers and relevant modern pipelines."
            },
            {
              title: "Lightning Talk 2",
              subtitle: "Data and AI for Social Impact and Sustainability",
              description: "Mr. Mark Jeremy Narag highlights the power of data and how it can provide meaningful and sustainable solutions, driving social impact."
            }
          ]}
        />
        

        {/* Speakers Carousel for Dev Day */}
        <SpeakersCarousel speakers={testSpeakers} />

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default DevDayPage;
