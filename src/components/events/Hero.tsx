"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Team {
  logo_url: string;
  group_name: string;
}

interface HeroProps {
  title: string;
  description: string;
  variant?: "expo" | "devday";
  teams?: Team[];
}

export default function Hero({
  title,
  description,
  variant = "expo",
  teams = [],
}: HeroProps) {
  const pathname = usePathname();

  // Variant-specific configurations
  const config = {
    expo: {
      backgroundText: "CS EXPO",
      accentColor: "#FF37E3",
      titleGradient:                            
        "linear-gradient(180deg, #FFFFFF 10%, #FFFFFF 0%, #FF37E3 30%, #FF00DC 70%, #FF00DC 100%)",
      titleGlow: "drop-shadow(0px 0px 4px rgba(255, 55, 227, 0.8))",
      svgFlipped: false,
      svgTranslateY: "-25px",
      svgTranslateX: "0px",
    },
    devday: {
      backgroundText: "DEV DAY",
      accentColor: "#5C0BDE",
      titleGradient:
        "linear-gradient(180deg, #FFFFFF 10%, #FFFFFF 0%, #5C0BDE 30%, #5C0BDE 70%, #5C0BDE 100%)",
      titleGlow: "drop-shadow(0px 0px 4px rgba(92, 11, 222, 0.8))",
      svgFlipped: true,
      svgTranslateY: "-50px",
      svgTranslateX: "0px",
    },
  };

  const currentConfig = config[variant];

  // Responsive logo positioning
  function logoPosition(index: number, isMobile: boolean) {
    // Adjusted size and spread for smaller screens
    const presets = isMobile
  ? [
      // 🔸 Upper Row
      { left: "10%", top: "8%", size: 45, rotate: -6, opacity: 0.8 },
      { left: "28%", top: "10%", size: 50, rotate: 4, opacity: 0.78 },
      { left: "60%", top: "8%", size: 48, rotate: -3, opacity: 0.75 },
      { left: "82%", top: "12%", size: 52, rotate: 5, opacity: 0.8 },

      // 🔸 Upper-Mid Row
      { left: "16%", top: "28%", size: 50, rotate: 3, opacity: 0.78 },
      { left: "25%", top: "30%", size: 55, rotate: -4, opacity: 0.8 },
      { left: "70%", top: "32%", size: 50, rotate: 2, opacity: 0.75 },
      { left: "86%", top: "28%", size: 48, rotate: -2, opacity: 0.8 },

      // 🔸 Mid Row
      { left: "12%", top: "50%", size: 50, rotate: -3, opacity: 0.78 },
      { left: "28%", top: "52%", size: 55, rotate: 5, opacity: 0.8 },
      { left: "85%", top: "60%", size: 52, rotate: -2, opacity: 0.78 },
      { left: "88%", top: "50%", size: 50, rotate: 4, opacity: 0.75 },

      // 🔸 Lower Row
      { left: "14%", top: "65%", size: 50, rotate: 3, opacity: 0.8 },
      { left: "42%", top: "66%", size: 55, rotate: -5, opacity: 0.78 },
      { left: "67%", top: "67%", size: 50, rotate: 4, opacity: 0.8 },
      { left: "88%", top: "69%", size: 48, rotate: -3, opacity: 0.75 },
    ]

      : [
          // Desktop positioning
          { left: "6%", top: "6%", size: 80, rotate: -8, opacity: 0.8 },
          { left: "18%", top: "14%", size: 85, rotate: -3, opacity: 0.75 },
          { left: "10%", top: "28%", size: 90, rotate: 6, opacity: 0.78 },
          { left: "30%", top: "20%", size: 85, rotate: 4, opacity: 0.8 },
          { left: "72%", top: "10%", size: 90, rotate: 5, opacity: 0.8 },
          { left: "80%", top: "18%", size: 95, rotate: -6, opacity: 0.78 },
          { left: "92%", top: "24%", size: 85, rotate: 8, opacity: 0.8 },
          { left: "8%", top: "44%", size: 95, rotate: 3, opacity: 0.75 },
          { left: "22%", top: "52%", size: 85, rotate: -5, opacity: 0.8 },
          { left: "82%", top: "46%", size: 95, rotate: 5, opacity: 0.8 },
          { left: "94%", top: "48%", size: 90, rotate: -6, opacity: 0.78 },
          { left: "10%", top: "68%", size: 95, rotate: 6, opacity: 0.78 },
          { left: "20%", top: "78%", size: 90, rotate: -7, opacity: 0.8 },
          { left: "8%", top: "88%", size: 85, rotate: 4, opacity: 0.75 },
          { left: "74%", top: "64%", size: 90, rotate: -4, opacity: 0.8 },
          { left: "86%", top: "76%", size: 85, rotate: 6, opacity: 0.78 },
          { left: "92%", top: "88%", size: 90, rotate: -5, opacity: 0.8 },
        ];

    return presets[index % presets.length];
  }

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section className="relative pt-[140px] sm:pt-[160px] md:pt-[190px] lg:pt-[220px] xl:pt-[240px] pb-6 sm:pb-8 mb-12 sm:mb-14 md:mb-12 lg:mb-16 px-4 sm:px-6 text-center overflow-hidden old-tv">
      {/* 🔹 Background text pattern */}
      <div
        className="absolute -top-[180px] sm:-top-[220px] md:-top-[260px] lg:-top-[300px] xl:-top-[320px] left-0 right-0 flex flex-col items-center pointer-events-none z-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%, transparent 100%)",
        }}
      >
        {[...Array(17)].map((_, i) => (
          <div
            key={i}
            className="font-monster text-[30px] sm:text-[40px] md:text-[55px] lg:text-[70px] xl:text-[80px] whitespace-nowrap tracking-widest leading-[24px] sm:leading-[30px] md:leading-[40px] lg:leading-[50px] xl:leading-[60px] opacity-30"
            style={{
              WebkitTextStroke: `1px ${currentConfig.accentColor}`,
              color: "transparent",
              letterSpacing: "0em",
            }}
          >
            {currentConfig.backgroundText}
          </div>
        ))}
      </div>

      {/* 🔹 SVG Background */}
      <div
        className="absolute inset-[-40px] sm:inset-[-50px] md:inset-[-70px] lg:inset-[-90px] xl:inset-[-100px] flex items-center justify-center pointer-events-none z-0"
        style={{
          transform: `translate(${currentConfig.svgTranslateX}, calc(${currentConfig.svgTranslateY} - -20px)) ${
            currentConfig.svgFlipped ? "scaleX(-1)" : "scaleX(1)"
          }`,
        }}
      >
        <img
          src="/backgrounds/3.png"
          alt=""
          className="w-[250px] sm:w-[300px] md:w-[450px] lg:w-[550px] xl:w-[600px] h-full object-contain"
        />
      </div>

      {/* 🔹 Floating Team Logos */}
      <div className="absolute inset-0 pointer-events-none z-[25]">
        {teams.slice(0, 11).map((team, i) => {
          const pos = logoPosition(i, isMobile);
          return (
            <img
              key={team.logo_url + i}
              src={team.logo_url}
              alt={team.group_name}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                left: pos.left,
                top: pos.top,
                width: `${pos.size}px`,
                height: `${pos.size}px`,
                transform: `translate(-50%, 150%) rotate(${pos.rotate}deg)`,
                opacity: pos.opacity,
                objectFit: "contain",
                filter:
                  "sepia(0.45) contrast(1.08) saturate(0.68) brightness(0.86) blur(0.4px)",
                mixBlendMode: "screen",
                animation: `flickerg ${2 + Math.random() * 3}s infinite ease-in-out`,
              }}
            />
          );
        })}
      </div>

      {/* 🔹 Hero Title & Description */}
      <div className="max-w-6xl mx-auto relative z-20 flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
        <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6 flex-wrap">
          <div
            className="font-monster tracking-[0.09em] [text-shadow:0_2px_7.2px_rgba(255,255,255,0.1)]"
            style={{
              backgroundImage: currentConfig.titleGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              WebkitTextStroke: "1px black",
              filter: currentConfig.titleGlow,
              display: "inline-block",
            }}
          >
            <p
              className="text-[36px] sm:text-[48px] md:text-[70px] lg:text-[90px] xl:text-[110px] leading-[38px] sm:leading-[50px] md:leading-[60px] lg:leading-[75px] xl:leading-[85px] mb-0"
              style={{ letterSpacing: "-0.02em", whiteSpace: "pre-line" }}
            >
              {title.replace(" ", "\n")}
            </p>
          </div>
        </div>

        <p
          className={`text-white/100 max-w-[600px] sm:max-w-[680px] md:max-w-[730px] lg:max-w-[754px] mx-auto font-helvetica text-[13px] sm:text-[14px] md:text-[15px] lg:text-[18px] xl:text-[20px] px-4 leading-relaxed ${isMobile ? "mt-16 sm:mt-20 md:mt-24" : "mt-12 sm:mt-14 md:mt-16"}`}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
