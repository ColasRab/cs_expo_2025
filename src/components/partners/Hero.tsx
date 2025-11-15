"use client";

import PixelBlast from "@/components/global/PixelBlast";

interface HeroProps {
  title: string;
  description: string;
}

function Hero({title, description}: HeroProps) {
  return(
    <section className="relative mx-auto flex h-[85vh] flex-col items-center justify-center text-center">
      {/* Pixel background */}
      <div className="absolute inset-0 z-0 cursor-pointer -bottom-40">
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

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div
          aria-hidden
          className="h-[450px] w-[85%] max-w-5xl animate-[pulseGlow_4s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,204,0.25)_0%,rgba(200,0,255,0.15)_30%,rgba(0,0,0,0)_70%)] blur-[80px]"
        />
      </div>

      {/* Foreground content */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="pointer-events-auto flex max-w-4xl flex-col items-center gap-y-25 text-center">
          <h1 className="font-monster text-gradient mb-0 text-4xl leading-[100px] -tracking-[2px] md:text-8xl lg:text-[96px]">
            {title}
          </h1>
          <p className="font-helvetica indent-8 text-[20px] leading-[20px] font-extralight text-white">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;