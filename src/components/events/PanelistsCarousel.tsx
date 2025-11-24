"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

interface PanelistProps {
    name: string,
    title: string,
    bio: string,
    image: string
}

interface PanelistCarouselProps {
    panelists: PanelistProps[];
    titleColor?: string;
}

function PanelistsCarousel({ panelists, titleColor = '#FF00DC' }: PanelistCarouselProps) {
  return (
    <section className="pt-0 pb-8 md:pb-12 lg:pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <p 
          className="font-monster text-[40px] md:text-[60px] lg:text-[75px] mb-8 md:mb-10 lg:mb-12 text-center italic tracking-[0.1em] leading-tight"
          style={{
            backgroundImage: 'linear-gradient(180deg, #FFFFFF 40%, #FF37E3 60%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            WebkitTextStroke: '1px black',
            filter: 'drop-shadow(0px 0px 4px rgba(255, 55, 227, 0.8))'
          }}
        >
          PANELISTS
        </p>
      </div>
        
      <div className="relative">
        <Carousel 
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-[1225px] mx-auto"
        >
          <CarouselContent>
            {panelists.map((panelist, index) => (
              <CarouselItem key={index}>
                {/* Panelist Content */}
                <div className="w-full max-w-[1225px] h-auto md:h-[500px] lg:h-[550px] flex flex-col md:flex-row items-center justify-between rounded-[20px] gap-6 md:gap-0 mx-auto">
                  
                  {/* Panelist Image - Order 1 on mobile (above), Order 2 on desktop (right side) */}
                  <div className="w-full md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] bg-gray-400 rounded-[16px] flex-shrink-0 overflow-hidden order-1 md:order-2">
                    <img 
                      src={panelist.image} 
                      alt={panelist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Panelist Info - Order 2 on mobile (below image), Order 1 on desktop (left side) */}
                  <div className="text-white flex-1 md:mr-[30px] lg:mr-[50px] w-full order-2 md:order-1 text-right">
                    {/* Panelist Name */}
                    <p 
                      className="font-avolta font-normal text-[32px] md:text-[40px] lg:text-[48px] text-white leading-[32px] md:leading-[36px] lg:leading-[40px] tracking-[0.1em] mb-0 align-middle"
                      style={{ 
                        filter: 'drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.8))'
                    }}>
                      {panelist.name}
                    </p>

                    {/* Panelist Title */}
                    <p 
                      className="font-dreamer font-normal text-[16px] md:text-[18px] lg:text-[20px] text-[#FF00DC] leading-[20px] tracking-[0.1em] mb-6 md:mb-8 lg:mb-10"
                      style={{
                        filter: 'drop-shadow(0px 0px 4.4px rgba(255, 0, 220, 0.8))'
                      }}>
                      {panelist.title}
                    </p>
                    
                    {/* Panelist Bio */}
                    <p 
                      className="font-helvetica font-medium text-[14px] md:text-[15px] lg:text-[16px] text-white leading-[18px] md:leading-[19px] lg:leading-[20px]" 
                      style={{ 
                        fontWeight: 300 
                      }}>
                        {panelist.bio}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons */}
          <CarouselPrevious className="-left-12 md:-left-16 lg:-left-20 top-1/2 -translate-y-1/2 text-white hover:text-pink-500 bg-transparent border-none hover:bg-transparent">
            <ResponsiveImage src="/arrow.svg" alt="Previous" width={24} height={24} />
          </CarouselPrevious>
          <CarouselNext className="-right-12 md:-right-16 lg:-right-20 top-1/2 -translate-y-1/2 text-white hover:text-pink-500 bg-transparent border-none hover:bg-transparent">
            <ResponsiveImage src="/arrow.svg" alt="Next" width={24} height={24} className="rotate-180" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}

export default PanelistsCarousel;