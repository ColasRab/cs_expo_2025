"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import PartnerCard from './PartnerCard';

interface Partner {
  name: string;
  logo: string;
  facebook?: string;
  instagram?: string;
  website?: string;
}

interface PartnersCarouselProps {
  title: string;
  partners: Partner[];
  accentColor: string;
  titleGradient: string;
}

export default function PartnersCarousel({ 
  title, 
  partners, 
  accentColor,
  titleGradient 
}: PartnersCarouselProps) {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <p 
          className="font-monster text-[40px] md:text-[60px] lg:text-[75px] mb-8 md:mb-10 lg:mb-12 text-center italic tracking-[0.1em] leading-tight"
          style={{
            backgroundImage: titleGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            WebkitTextStroke: '1px black',
            filter: `drop-shadow(0px 0px 4px ${accentColor})`
          }}
        >
          {title}
        </p>
      </div>
        
      <div className="relative">
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-[1400px] mx-auto"
        >
          <CarouselContent className="-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <PartnerCard 
                  name={partner.name}
                  logo={partner.logo}
                  facebook={partner.facebook}
                  instagram={partner.instagram}
                  website={partner.website}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons */}
          <CarouselPrevious className="-left-12 md:-left-16 lg:-left-20 top-1/2 -translate-y-1/2 text-white hover:text-pink-500 bg-transparent border-none hover:bg-transparent">
            <Image src="/arrow.svg" alt="Previous" width={24} height={24} />
          </CarouselPrevious>
          <CarouselNext className="-right-12 md:-right-16 lg:-right-20 top-1/2 -translate-y-1/2 text-white hover:text-pink-500 bg-transparent border-none hover:bg-transparent">
            <Image src="/arrow.svg" alt="Next" width={24} height={24} className="rotate-180" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
