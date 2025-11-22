// "use client"
import Image from "next/image"
import PixelBlast from "@/components/global/PixelBlast"

export function ProjectsHero({ pageTitle, pageDesc }: { pageTitle: string; pageDesc: string }) {
  return (
    <section className="relative isolate mx-auto flex min-h-screen flex-col items-center justify-center text-center">
      {/* Pixel background */}
      <div className="absolute inset-0 -bottom-40 z-0 cursor-pointer">
        <PixelBlast
          variant="circle"
          pixelSize={9}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-20 flex w-full max-w-4xl flex-col items-center justify-center gap-y-6 px-4 text-center sm:gap-y-8 sm:px-6 lg:gap-y-10 lg:px-8">
        <div className="relative">
          {/* Glow */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[150px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,#ff00dc_0%,transparent_70%)] opacity-[35%] blur-[60px] sm:h-[250px] sm:w-[600px] sm:opacity-[40%] sm:blur-[80px] lg:h-[350px] lg:w-[1000px] lg:blur-[100px]"></div>
          </div>

          <h1 className="font-monster text-gradient relative z-10 mb-0 px-2 text-4xl leading-tight -tracking-[1px] sm:px-0 sm:text-5xl md:text-6xl md:leading-tight lg:text-[80px] lg:leading-[90px] xl:text-[96px] xl:leading-[100px] xl:-tracking-[2px]">
            {pageTitle}
          </h1>
        </div>
        <p className="font-helvetica max-w-2xl px-6 text-sm leading-relaxed font-extralight text-white/95 sm:max-w-3xl sm:px-8 sm:text-base sm:leading-relaxed md:indent-8 lg:text-[16px] lg:leading-[22px]">
          {pageDesc}
        </p>
      </div>
    </section>
  )
}