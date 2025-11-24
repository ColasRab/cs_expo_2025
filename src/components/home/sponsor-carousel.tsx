"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useState } from "react";
import { allPartners } from "@/app/partners/data/partnersData";

export default function SponsorCarousel({ scale }: { scale: number }) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
      dragFree: true,
    },
    [AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false })]
  );

  // Use ONLY the logos from allPartners
  const logos = allPartners.map((p) => p.logo);

  // Duplicate for infinite scrolling
  const allLogos = [...logos, ...logos, ...logos];

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  return (
    <section className="relative z-10 w-full overflow-hidden py-6 sm:py-8 md:py-10">
      <div className="w-full" ref={emblaRef}>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-7 px-4 sm:px-8 md:px-12">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ height: `${scale}px` }}
            >
              {imageErrors.has(index) ? (
                <div
                  className="flex items-center justify-center bg-slate-200 rounded-lg"
                  style={{ width: scale, height: "100%" }}
                >
                  <span className="text-slate-400 text-xs">Logo</span>
                </div>
              ) : (
                <img
                  src={logo}
                  alt={`Sponsor logo ${index + 1}`}
                  onError={() => handleImageError(index)}
                  className="h-full w-auto object-contain transition-transform duration-300 ease-out will-change-transform"
                  style={{ transform: "translateZ(0)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15) translateZ(0)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateZ(0)";
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
