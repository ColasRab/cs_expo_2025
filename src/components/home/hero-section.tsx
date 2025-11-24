"use client";

import React from "react";
import Image from "next/image";
import ResponsiveImage from "@/components/ResponsiveImage";

const HeroSection: React.FC = () => {
    return (
        <div className="relative w-full h-[700px]">
            <div className="absolute inset-0 z-0" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center text-center">
                <div className="relative w-[260px] sm:w-[360px] md:w-[518px]">
                    <ResponsiveImage
                        src="/logo/expo_logo.png"
                        alt="Logo"
                        width={518}
                        height={374}
                        className="w-full h-auto"
                        priority
                    />
                </div>

                <div className="-mt-8 sm:-mt-10">
                    <h1
                        className="font-dreamer text-3xl sm:text-5xl md:text-6xl text-white"
                        style={{
                            WebkitTextStroke: "1px #FF00DC",
                            textShadow: "0 4px 76.3px #FF00DC, 0 0 40px #FF00DC",
                        } as React.CSSProperties}
                    >
                        Digital Reverie
                    </h1>

                    <p
                        className="font-dreamer mt-3 sm:mt-4 text-xl sm:text-2xl md:text-4xl text-white border-2 border-white rounded-full px-6 py-1 inline-block"
                        style={{
                            WebkitTextStroke: "0.3px #FF00DC",
                            textShadow: "0 4px 76.3px #FF00DC, 0 0 40px #FF00DC",
                            boxShadow: "0 0 10px #FF00DC, 0 0 20px #FF00DC",
                        } as React.CSSProperties}
                    >
                        rewired * recharged * released
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
