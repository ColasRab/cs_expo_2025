import { AwardProps } from "../types/hof.types"
import { AwardeeCard } from "./AwardeeCard"

// accepts award parameter of type AwardProps
export function AwardeeBlock({ award, alt }: { award: AwardProps; alt: boolean }) {
  return (
    <>
      <section className="flex w-full flex-col items-center gap-6 bg-[#0f0019] px-4 py-10 text-white sm:gap-8 sm:px-6 sm:py-12 lg:py-16">
        {/* Title */}
        {/* I made 2 layers for shadow and gradients since gradients require the `text-transparent` and the shadow to be behind it so I created the same text layer but with a non-transparent color */}
        <div className="relative mb-6 w-full sm:mb-8 lg:mb-10">
          {/* Glow Effect */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[80px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,#FF00DC_0%,transparent_70%)] opacity-30 blur-[50px] sm:h-[100px] sm:w-[400px] sm:blur-[60px] lg:h-[120px] lg:w-[500px] lg:blur-[80px]"></div>
          </div>

          {/* Shadow layer */}
          <h1 className="font-monster relative z-0 w-full text-center text-3xl leading-tight font-black uppercase text-shadow-[#FF00DC] text-shadow-lg sm:text-4xl sm:leading-tight md:text-5xl lg:text-[56px] lg:leading-[64px]">
            {award.title}
          </h1>
          {/* Gradient layer */}
          <h1 className="font-monster absolute inset-0 z-10 w-full bg-gradient-to-b from-white from-35% via-[#FF00DC] via-50% to-white to-75% bg-clip-text text-center text-3xl leading-tight font-black text-transparent uppercase sm:text-4xl sm:leading-tight md:text-5xl lg:text-[56px] lg:leading-[64px]">
            {award.title}
          </h1>
        </div>

        <div className="grid w-full max-w-6xl grid-cols-1 items-start gap-4 sm:grid-cols-3 sm:gap-5 md:gap-6">
          {/* Top1 */}
          <AwardeeCard awardee={award.top1} alt={alt} rank="1ST" />

          {/* Top2 */}
          <AwardeeCard awardee={award.top2} alt={alt} rank="2ND" />

          {/* Top3 */}
          <AwardeeCard awardee={award.top3} alt={alt} rank="3RD" />
        </div>
      </section>
    </>
  )
}
