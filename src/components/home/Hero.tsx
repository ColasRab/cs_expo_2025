"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeroProps {
  title: string;
  description: string;
  variant?: 'expo' | 'devday';
  textDirection?: 'vertical' | 'horizontal' | 'horizontal-left' | 'horizontal-right' | 'diagonal-right' | 'diagonal-left';
}

function Hero({
  title,
  description,
  variant = 'expo',
  textDirection = 'vertical'
}: HeroProps) {
  const pathname = usePathname();

  // Variant-specific configurations
  const config = {
    expo: {
      backgroundText: 'CS EXPO',
      accentColor: '#FF37E3',
      titleGradient: 'linear-gradient(180deg, #FFFFFF 10%, #FFFFFF 0%, #FF37E3 30%, #FF00DC 70%, #FF00DC 100%)',
      titleGlow: 'drop-shadow(0px 0px 4px rgba(255, 55, 227, 0.8))',
      titleInnerShadow: '0 10px 0 rgba(255,255,255,0.95), 0 -10px 0 rgba(255,255,255,0.6), 0 6px 18px rgba(255,255,255,0.06)',
      backgroundTextInnerShadow: '0 1px 0 rgba(255,255,255,0.9), 0 -1px 0 rgba(255,255,255,0.35)',
      svgFlipped: false,
      svgTranslateY: '-25px',
      svgTranslateX: '0px',
      buttonColor: '#FF37E3'
    },
    devday: {
      backgroundText: 'DEV DAY',
      accentColor: '#5C0BDE',
      titleGradient: 'linear-gradient(180deg, #FFFFFF 10%, #FFFFFF 0%, #5C0BDE 30%, #5C0BDE 70%, #5C0BDE 100%)',
      titleGlow: 'drop-shadow(0px 0px 4px rgba(92, 11, 222, 0.8))',
      titleInnerShadow: '0 1px 0 rgba(255,255,255,0.95), 0 -1px 0 rgba(255,255,255,0.6), 0 6px 18px rgba(255,255,255,0.06)',
      backgroundTextInnerShadow: '0 1px 0 rgba(255,255,255,0.9), 0 -1px 0 rgba(255,255,255,0.35)',
      svgFlipped: true,
      svgTranslateY: '-50px',
      svgTranslateX: '0px',
      buttonColor: '#5C0BDE'
    }
  };

  const currentConfig = config[variant];

  // Direction-specific configurations
  const getDirectionStyles = () => {
    switch (textDirection) {
      case 'vertical':
        return {
          containerClass: 'flex-col items-center',
          textClass: 'whitespace-nowrap',
          rotation: 'rotate-0',
          backgroundPosition: 'left-0'
        };
      case 'horizontal-left':
        return {
          containerClass: 'flex-row-reverse items-start',
          textClass: 'whitespace-nowrap',
          rotation: 'rotate-0',
          backgroundPosition: 'right-[-100px]'
        };
      case 'horizontal-right':
        return {
          containerClass: 'flex-row items-start',
          textClass: 'whitespace-nowrap',
          rotation: 'rotate-0',
          backgroundPosition: 'left-[-100px]'
        };
      default:
        return {
          containerClass: 'flex-col items-center',
          textClass: 'whitespace-nowrap',
          rotation: 'rotate-0',
          backgroundPosition: 'left-0'
        };
    }
  };

  const directionStyles = getDirectionStyles();
  const isHorizontalLayout = textDirection === 'horizontal-left' || textDirection === 'horizontal-right';
  const isLeft = textDirection === 'horizontal-left';

  const horizontalTranslateXValue = isLeft ? 1 : -1;
  const horizontalTranslateXStr = `${horizontalTranslateXValue}px`;

  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 lg:pb-12 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
      {!isHorizontalLayout && (
        <>
          {/* Repeating text background - Vertical only */}
          <div
            className={`absolute top-[-80px] sm:top-[-100px] md:top-[-150px] lg:top-[-200px] left-0 right-0 flex ${directionStyles.containerClass} pointer-events-none z-0 ${directionStyles.rotation}`}
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%, transparent 100%)'
            }}
          >
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`font-monster text-[30px] sm:text-[40px] md:text-[60px] lg:text-[80px] ${directionStyles.textClass} tracking-widest ${textDirection === 'horizontal'
                    ? 'leading-[40px] sm:leading-[60px] md:leading-[80px] lg:leading-[100px] mr-6 sm:mr-8 md:mr-12 lg:mr-16'
                    : 'leading-[25px] sm:leading-[30px] md:leading-[45px] lg:leading-[60px]'
                  } opacity-30`}
                style={{
                  WebkitTextStroke: `1px ${currentConfig.accentColor}`,
                  color: 'transparent',
                  letterSpacing: '0em'
                }}
              >
                {currentConfig.backgroundText}
              </div>
            ))}
          </div>

          {/* SVG Background - Vertical only */}
          <div
            className="absolute inset-[-40px] sm:inset-[-50px] md:inset-[-75px] lg:inset-[-100px] flex items-center justify-center pointer-events-none z-0"
            style={{
              transform: `translate(calc(${currentConfig.svgTranslateX}), calc(${currentConfig.svgTranslateY} + 10px)) ${currentConfig.svgFlipped ? 'scaleX(-1)' : 'scaleX(1)'}`
            }}
          >
            <img
              src="/backgrounds/3.png"
              alt=""
              className="w-auto h-full object-contain"
            />
          </div>
        </>
      )}

      {isHorizontalLayout ? (
        <div className="max-w-7xl mx-auto relative z-10 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] top-8 sm:top-12 md:top-15">
          {/* Stack vertically on mobile (< md), horizontal on md+ */}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16 relative">
            {/* SVG Background - Behind title - Mobile: centered, Desktop: positioned */}
            <div
              className={`absolute inset-0 flex items-center pointer-events-none z-0 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} md:justify-${isLeft ? 'end' : 'start'}`}
              style={{ pointerEvents: 'none' }}
            >
              <img
                src="/backgrounds/3.png"
                alt=""
                className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain opacity-50"
                style={{
                  transform: `translateY(calc(${currentConfig.svgTranslateY} + 25px)) translateX(${horizontalTranslateXStr}) scaleX(${isLeft || currentConfig.svgFlipped ? -1 : 1})`
                }}
              />
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:${isLeft ? 'right-1/12' : 'left-1/5 md:-translate-x-1/2'} -translate-y-1/2 w-[250px] sm:w-[300px] md:w-[450px] lg:w-[500px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] rounded-full blur-[100px] opacity-30`}
                style={{
                  background: `radial-gradient(ellipse at center, ${currentConfig.accentColor}, transparent 90%)`
                }}
              ></div>
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:${isLeft ? 'right-1/12' : 'left-1/5 md:-translate-x-1/2'} -translate-y-1/2 w-[200px] sm:w-[250px] md:w-[350px] lg:w-[400px] h-[120px] sm:h-[150px] md:h-[200px] lg:h-[250px] rounded-full blur-[80px] opacity-40`}
                style={{
                  background: `radial-gradient(ellipse at center, ${currentConfig.accentColor}, transparent 80%)`
                }}
              ></div>
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:${isLeft ? 'right-1/12' : 'left-1/5 md:-translate-x-1/2'} -translate-y-1/2 w-[160px] sm:w-[200px] md:w-[260px] lg:w-[300px] h-[100px] sm:h-[120px] md:h-[160px] lg:h-[200px] rounded-full blur-[60px] opacity-50`}
                style={{
                  background: `radial-gradient(ellipse at center, ${currentConfig.accentColor}, transparent 70%)`
                }}
              ></div>
            </div>

            {/* Repeating text background - Mobile: behind content vertically, Desktop: beside title */}
            <div
              className={`absolute left-0 right-0 top-[-40px] sm:top-[-50px] md:left-auto md:right-auto md:top-1/2 md:${isLeft ? 'right-[-250px] lg:right-[-300px]' : 'left-[-250px] lg:left-[-300px]'} md:-translate-y-7/16 flex flex-col pointer-events-none z-0`}
              style={{
                maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)'
              }}
            >
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="font-monster text-[35px] sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[100px] whitespace-nowrap tracking-widest leading-[30px] sm:leading-[40px] md:leading-[55px] lg:leading-[70px] xl:leading-[80px] opacity-20 text-center md:text-left"
                  style={{
                    WebkitTextStroke: `2px ${currentConfig.accentColor}`,
                    color: 'transparent',
                    letterSpacing: '0em'
                  }}
                >
                  {currentConfig.backgroundText}
                </div>
              ))}
            </div>

            {/* Title - Always first in mobile stack */}
            <div
              className={`font-monster tracking-[0.09em] [text-shadow:0_2px_7.2px_rgba(255,255,255,0.1)] flex-shrink-0 relative z-10 max-w-[240px] sm:max-w-[280px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] ${isLeft ? 'md:order-2' : 'md:order-1'}`}
              style={{
                backgroundImage: currentConfig.titleGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                WebkitTextStroke: '1px black',
                filter: currentConfig.titleGlow,
                display: 'inline-block'
              }}
            >
              <p
                className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[100px] xl:text-[120px] leading-[36px] sm:leading-[45px] md:leading-[60px] lg:leading-[85px] xl:leading-[100px]"
                style={{
                  letterSpacing: '-0.02em'
                }}
              >
                {title}
              </p>
            </div>

            {/* Description and Button - Second in mobile stack */}
            <div className={`flex flex-col items-center md:items-${isLeft ? 'start' : 'end'} text-center md:text-${isLeft ? 'left' : 'right'} max-w-[450px] sm:max-w-[500px] md:max-w-[450px] lg:max-w-[500px] relative z-10 ${isLeft ? 'md:order-1' : 'md:order-2'} px-4 sm:px-0`}>
              <div className={`text-white/100 font-helvetica text-[13px] sm:text-[14px] md:text-[15px] lg:text-[18px] xl:text-[20px] mb-4 sm:mb-5 md:mb-6 text-center md:text-${isLeft ? 'left' : 'right'} leading-relaxed`}>
                {description}
              </div>
              <Link
                href={isLeft ? "/events/devday" : "/events/expo"}
                className="text-white font-semibold text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-5 md:px-6 rounded-md transition-all hover:brightness-110 inline-block"
                style={{ backgroundColor: currentConfig.buttonColor }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* Vertical/Center Layout */
        <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6">
          <div
            className="font-monster tracking-[0.09em] [text-shadow:0_2px_7.2px_rgba(255,255,255,0.1)] max-w-[240px] sm:max-w-[280px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]"
            style={{
              backgroundImage: currentConfig.titleGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              WebkitTextStroke: '1px black',
              filter: currentConfig.titleGlow,
              display: 'inline-block'
            }}
          >
            <p
              className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[110px] leading-[36px] sm:leading-[45px] md:leading-[60px] lg:leading-[75px] xl:leading-[85px] mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-2"
              style={{
                letterSpacing: '-0.02em'
              }}
            >
              {title}
            </p>
          </div>
          <p className="text-white/100 max-w-[600px] sm:max-w-[680px] md:max-w-[730px] lg:max-w-[754px] mx-auto font-helvetica text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] px-4 leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </section>
  );
}

export default Hero;