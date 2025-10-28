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
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-6 pb-16 sm:gap-8 sm:pb-24 lg:gap-10 lg:pb-40">
        <div className="h-full w-full">
          <Navbar />
        </div>

        <div className="font-monster text-gradient mx-auto mt-6 inline-block w-[7ch] max-w-[90vw] pb-1 text-center text-5xl leading-[1.12] font-normal text-white select-none sm:mt-10 sm:w-[8ch] sm:pb-2 sm:text-6xl sm:leading-[1.1] md:mt-12 md:w-[9ch] md:text-7xl lg:w-[10ch] lg:text-8xl xl:w-[11ch] xl:text-9xl">
          Event Gallery
        </div>
        <div className="mb-10 w-[80vw] text-center text-white select-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, in? Esse labore velit
          obcaecati at consectetur iusto voluptate, tempora similique! Cupiditate quaerat ullam
          obcaecati commodi fuga quidem possimus molestiae vitae!
        </div>
      </div>
    </div>
  )
}
