"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SponsorCarousel({ scale }: { scale: number }) {
  console.log("SponsorCarousel scale prop:", scale);
  const [logos, setLogos] = useState<string[]>([]);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const supabase = createClient();

  const defaultLogos = [
    "https://via.placeholder.com/300x125/e2e8f0/64748b?text=Logo+1",
    "https://via.placeholder.com/250x125/e2e8f0/64748b?text=Logo+2",
    "https://via.placeholder.com/350x125/e2e8f0/64748b?text=Logo+3",
    "https://via.placeholder.com/280x125/e2e8f0/64748b?text=Logo+4",
  ];

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
      dragFree: true,
    },
    [AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false })]
  );

 useEffect(() => {
   const fetchLogos = async () => {
     const { data, error } = await supabase.storage
       .from("partners")
       .list("", { limit: 100 });

     if (error) {
       console.error("Error fetching logos:", error);
       setLogos(defaultLogos);
       return;
     }

     const urls = data
       .filter((file) => file.name.match(/\.(png|jpg|jpeg|svg|webp)$/i))
       .map(
         (file) =>
           supabase.storage.from("partners").getPublicUrl(file.name).data.publicUrl
       );

     setLogos(urls.length > 0 ? urls : defaultLogos);
   };

   fetchLogos();
 }, [supabase]);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  const allLogos = [...logos, ...logos, ...logos];

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
                <div className={`w-[${scale}] h-full flex items-center justify-center bg-slate-200 rounded-lg`}>
                  <span className="text-slate-400 text-xs">Logo</span>
                </div>
              ) : (
                <img
                  src={logo}
                  alt={`Sponsor logo ${index + 1}`}
                  onError={() => handleImageError(index)}
                  className="h-full w-auto object-contain transition-transform duration-300 ease-out will-change-transform"
                  style={{
                    transform: "translateZ(0)",
                  }}
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
