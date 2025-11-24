// GroupGallery.tsx
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type GroupGalleryProps = {
  details: {
    groupName: string;
    groupMembers: string[];
    photoshoot: string[];
    memberPictures?: string[];
  };
};

const shimmer =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9JyNFNUU3RUInLz48L3N2Zz4=";

export default function GroupGallery({ details }: GroupGalleryProps) {
  const { groupName, photoshoot = [], memberPictures = [] } = details;
  const allImages = [...photoshoot, ...memberPictures];

  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Header */}
      <h1
        className="font-monster text-center text-gradient text-2xl sm:mt-0 md:mt-20 leading-[100px] -tracking-[2px] md:text-8xl lg:text-[96px] px-6 overflow-visible"
        style={
          {
            "--gradient-stop": "35%",
            "--gradient-pink": "60%",
          } as React.CSSProperties
        }
      >
        Gallery
      </h1>
      
      {/* Carousel Wrapper */}
      {allImages.length > 0 ? (
        <div className="w-full max-w-5xl relative sm:mt-0 md:mt-12 select-none">
          
          <div className="px-12 md:px-24 w-full">
            <Carousel opts={{ align: "start", loop: true }} className="w-full relative">
              <div className="rounded-[20px] overflow-hidden relative shadow-lg shadow-black/40">
                <CarouselContent>
                  {allImages.map((photoUrl, index) => (
                    <CarouselItem
                      key={`gallery-${index}`}
                      className="flex justify-center items-center"
                    >
                      <div className="relative inline-block rounded-[20px] overflow-hidden">
                        <ResponsiveImage
                          src={
                            photoUrl && photoUrl.length > 0
                              ? photoUrl
                              : "/projects/default_group_bg.jpg"
                          }
                          alt={`${groupName} image ${index + 1}`}
                          width={1000}
                          height={800}
                          className="h-auto w-auto max-w-full max-h-[85vh] object-contain rounded-[20px] transition-transform duration-500 hover:scale-[1.02]"
                          placeholder="blur"
                          blurDataURL={shimmer}
                          priority={index === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
              <CarouselPrevious className="left-2 md:-left-16" />
              <CarouselNext className="right-2 md:-right-16" />
            </Carousel>
          </div>
        </div>
      ) : (
        <p className="text-white/70 text-lg mt-10 mb-20 font-avolta">
          No images available for {groupName}.
        </p>
      )}

      {/* Caption */}
      <h2
        className="text-2xl mb-6 mt-6 text-center font-avolta z-10"
        style={{
          letterSpacing: "4px",
          color: "#ffffff",
          textShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
        }}
      >
      </h2>
    </div>
  );
}