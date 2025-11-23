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
      <div className="absolute top-0 left-0 w-full h-[600px] md:h-[800px] z-0">
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
          className="w-[150px] md:w-[300px] lg:w-[500px]"
        />
      </div>

      {/* SVG Shape Background 2 - Right Side */}
      <div className="absolute right-0 top-[30%] -translate-y-1/2 z-0 opacity-70">
        <img 
          src="/events/shape-240-2.svg" 
          alt="" 
          className="w-[150px] md:w-[300px] lg:w-[300px]"
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
          className="w-[150px] md:w-[300px] lg:w-[300px]"
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim. Suspendisse congue felis sapien, eu finibus ante pretium eget. Vestibulum aliquam viverra lorem vitae maximus."
          }}
          staticSections={[
            {
              title: "Keynote Talk",
              subtitle: "Digital Transformation in the Philippines: Opportunities and Challenges",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim. Suspendisse congue felis sapien, eu finibus ante pretium eget. Vestibulum aliquam viverra lorem vitae maximus."
            },
            {
              title: "Panel Discussion",
              subtitle: "Digital Transformation in the Philippines: Opportunities and Challenges",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim. Suspendisse congue felis sapien, eu finibus ante pretium eget. Vestibulum aliquam viverra lorem vitae maximus."
            }
          ]}
          carouselSections={[
            {
              title: "Lightning Talk 1",
              subtitle: "Automating Processes with No-Code Solutions on Industry Workflows",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim. Suspendisse congue felis sapien, eu finibus ante pretium eget. Vestibulum aliquam viverra lorem vitae maximus."
            },
            {
              title: "Lightning Talk 2",
              subtitle: "Building Scalable Applications with Modern Architecture",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim. Suspendisse congue felis sapien, eu finibus ante pretium eget. Vestibulum aliquam viverra lorem vitae maximus."
            },
            {
              title: "Lightning Talk 3",
              subtitle: "Data-Driven Decision Making in Software Development",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim. Suspendisse congue felis sapien, eu finibus ante pretium eget. Vestibulum aliquam viverra lorem vitae maximus."
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
