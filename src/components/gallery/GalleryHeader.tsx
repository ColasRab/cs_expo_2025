import Navbar from "@/components/global/nav-bar"

export function GalleryHeader() {
  return (
    <div className="mask-fade-b relative flex flex-col items-center justify-center px-4 backdrop-blur-md sm:px-6 lg:px-8">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        {/*<img
          src="/gallery/images/background-header.png"
          alt="Gallery background"
          className="h-full w-full object-cover"
        />*/}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4 sm:gap-6 pb-12 sm:pb-16 md:pb-20 lg:pb-32 xl:pb-40">
        <div className="h-full w-full">
          <Navbar />
        </div>

        <div className="font-monster text-gradient mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10 inline-block w-[7ch] max-w-[90vw] pb-1 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.12] font-normal text-white select-none sm:w-[8ch] sm:pb-2 sm:leading-[1.1] md:w-[9ch] lg:w-[10ch] xl:w-[11ch]">
          Event Gallery
        </div>
        <div className="mb-6 sm:mb-8 md:mb-10 w-[85vw] sm:w-[80vw] md:w-[75vw] lg:w-[70vw] text-center text-sm sm:text-base md:text-lg text-white/90 select-text px-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, in? Esse labore velit
          obcaecati at consectetur iusto voluptate, tempora similique! Cupiditate quaerat ullam
          obcaecati commodi fuga quidem possimus molestiae vitae!
        </div>
      </div>
    </div>
  )
}
