"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import Image from 'next/image';

interface ScheduleItem {
  title: string;
  subtitle: string;
  description: string;
}

interface DevDayScheduleLayoutProps {
  devDayInfo: ScheduleItem;
  staticSections: ScheduleItem[];
  carouselSections?: ScheduleItem[];
  variant?: 'expo' | 'devday';
}

function DevDayScheduleLayout({ devDayInfo, staticSections, carouselSections = [], variant = 'devday' }: DevDayScheduleLayoutProps) {
  const accentColor = '#FF00DC'; // Keep pink for all variants
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">
          {/* Vertical Line - Centered between columns */}
          <div 
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2"
            style={{
              backgroundColor: '#FF37E3',
              boxShadow: '0 0 11.2px rgba(255, 55, 227, 0.6)',
              maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)'
            }}
          ></div>

          {/* Left Column - Dev Day Info */}
          <div className="space-y-12">
            <div className="text-left space-y-4">
              <h2 
                className="font-avolta font-normal text-[36px] md:text-[48px] text-white leading-[40px] tracking-[0.1em]"
                style={{
                  filter: 'drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.8))'
                }}
              >
                {devDayInfo.title}
              </h2>
              <p 
                className="font-dreamer font-normal text-[18px] md:text-[20px] leading-[20px] tracking-[0.1em] max-w-md"
                style={{
                  color: accentColor,
                  filter: `drop-shadow(0px 0px 4.4px ${accentColor})`
                }}
              >
                {devDayInfo.subtitle}
              </p>
              <p className="font-helvetica font-medium text-[14px] md:text-[16px] text-white leading-[20px]">
                {devDayInfo.description}
              </p>
            </div>
          </div>

          {/* Right Column - Sections */}
          <div className="space-y-6 md:space-y-12">
            {/* Static Sections */}
            {staticSections.map((section, index) => (
              <div key={index} className="text-right space-y-4 mb-8 md:mb-35">
                <h3 
                  className="font-avolta font-normal md:text-[36px] text-4xl text-white leading-[40px] tracking-[0.1em] mb-0 align-middle"
                  style={{
                    filter: 'drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.8))'
                  }}
                >
                  {section.title}
                </h3>
                <p 
                  className="font-dreamer font-normal md:text-[20px] text-sm text-[#FF00DC] leading-[20px] tracking-[0.1em] max-w-md ml-auto"
                  style={{
                    color: accentColor,
                    filter: `drop-shadow(0px 0px 4.4px ${accentColor})`
                  }}
                >
                  {section.subtitle}
                </p>
                <p className="font-helvetica font-medium text-[14px] md:text-[16px] text-white leading-[20px]">
                  {section.description}
                </p>
              </div>
            ))}

            {/* Carousel Sections */}
            {carouselSections.length > 0 && (
              <div className="relative flex items-center justify-center min-h-[300px]">
                {/* Navigation Arrows */}
                <button
                  onClick={scrollPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hover:opacity-70 transition-opacity bg-transparent border-none"
                  aria-label="Previous"
                >
                  <ResponsiveImage src="/events/arrow.svg" alt="Previous" width={24} height={24} />
                </button>

                <button
                  onClick={scrollNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hover:opacity-70 transition-opacity bg-transparent border-none"
                  aria-label="Next"
                >
                  <ResponsiveImage src="/events/arrow.svg" alt="Next" width={24} height={24} className="rotate-180" />
                </button>

                {/* Embla Viewport */}
                <div className="overflow-hidden w-full" ref={emblaRef}>
                  <div className="flex">
                    {carouselSections.map((section, index) => (
                      <div
                        key={index}
                        className="flex-[0_0_100%] min-w-0"
                      >
                        <div className="text-right space-y-4 px-12">
                          <h3 
                            className="font-avolta font-normal md:text-[36px] text-4xl text-white leading-[40px] tracking-[0.1em] mb-0 align-middle"
                            style={{
                              filter: 'drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.8))'
                            }}
                          >
                            {section.title}
                          </h3>
                          <p 
                            className="font-dreamer font-normal md:text-[20px] text-sm text-[#FF00DC] leading-[20px] tracking-[0.1em] max-w-md ml-auto"
                            style={{
                              color: accentColor,
                              filter: `drop-shadow(0px 0px 4.4px ${accentColor})`
                            }}
                          >
                            {section.subtitle}
                          </p>
                          <p className="font-helvetica font-medium text-[14px] md:text-[16px] text-white leading-[20px]">
                            {section.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevDayScheduleLayout;
