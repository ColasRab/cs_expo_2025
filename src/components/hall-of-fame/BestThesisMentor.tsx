import Image from "next/image"
import groupsData from "@/data/groups"
export function BestThesisMentor() {
  return (
    <section className="relative flex h-auto w-full flex-col overflow-hidden bg-[#0A0014] lg:h-screen">
      {/* Decorative Top Border */}
      <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#8A38F5]/50 to-transparent"></div>

      {/* Decorative Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(138, 56, 245, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 55, 227, 0.15) 0%, transparent 50%)",
        }}
      ></div>

      {/* Section Title */}
      <div className="relative z-10 flex items-center justify-center px-4 py-6 sm:py-8 lg:px-8 lg:py-10">
        <h1
          className="font-dreamer text-center text-3xl leading-tight tracking-wide text-white uppercase sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-[70px]"
          style={{
            filter:
              "drop-shadow(0px 0px 12px rgba(138,56,245,0.4)) drop-shadow(0px 0px 20px rgba(255,55,227,0.2))",
            WebkitTextStroke: "0.5px rgba(138,56,245,0.3)",
          }}
        >
          BEST THESIS MENTOR
        </h1>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col-reverse gap-6 pb-8 sm:gap-8 lg:flex-row lg:gap-0 lg:pb-0">
        {/* Text Content */}
        <div className="flex w-full flex-col justify-center px-6 pb-6 text-white sm:px-8 sm:pb-8 lg:order-1 lg:w-1/2 lg:p-16">
          <div className="w-full max-w-2xl lg:max-w-none">
            <h2
              className="font-avolta mb-3 text-3xl leading-tight text-white uppercase sm:mb-4 sm:text-4xl md:text-5xl lg:mb-6 lg:text-6xl"
              style={{
                filter: "drop-shadow(0px 0px 10px rgba(255,55,227,0.6))",
              }}
            >
              Mr. Justine Jude Pura
            </h2>

            <div className="mb-4 h-[2px] w-16 bg-gradient-to-r from-[#8A38F5] via-[#FF37E3] to-transparent sm:mb-6 sm:w-20 lg:mb-8"></div>

            <p className="font-helvetica mb-6 text-sm leading-relaxed font-light text-white/90 sm:text-base sm:leading-relaxed md:text-lg lg:mb-8 lg:text-lg lg:leading-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem qui commodi fugit
              maxime quis natus placeat repellat vero aspernatur, autem impedit reiciendis et
              inventore incidunt accusamus, dolorem in nisi quaerat!
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full lg:order-2 lg:h-full lg:w-1/2">
          <div className="flex h-full w-full items-center justify-center px-6 pt-4 sm:px-8 sm:pt-6 lg:p-12 xl:p-16">
            <div
              className="group relative aspect-square w-full max-w-[400px] cursor-pointer overflow-hidden rounded-[12px] border-2 border-[#8A38F5]/20 transition-transform duration-300 hover:scale-105 sm:max-w-[500px] sm:rounded-[16px] lg:max-w-[600px] lg:hover:scale-102"
              style={{
                boxShadow: "0 0 40px rgba(138,56,245,0.3), 0 0 20px rgba(255,55,227,0.2)",
              }}
            >
              <Image
                src={groupsData[30].member_picture.at(0) || "/HOF/placeholder.jpg"} //placeholder
                alt="Mentor image"
                fill
                className="cursor-default object-cover transition-transform duration-300 select-none group-hover:scale-110"
                quality={100}
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
