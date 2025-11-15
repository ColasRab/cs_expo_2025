"use client"

import { AwardeeProps } from "../types/hof.types"
import clsx from "clsx"
import Image from "next/image"
import { LiaLongArrowAltRightSolid } from "react-icons/lia"
import { slugify } from "../util/nameToSlug"
import { useState } from "react"

// accepts award parameter of type AwardProps
export function AwardeeCard({
  awardee,
  alt,
  rank,
}: {
  awardee: AwardeeProps | AwardeeProps[]
  alt: boolean
  rank: string
}) {
  const awardees = Array.isArray(awardee) ? awardee : [awardee]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPrevHovered, setIsPrevHovered] = useState(false)
  const [isNextHovered, setIsNextHovered] = useState(false)
  const hasMultiple = awardees.length > 1
  const current = awardees[currentIndex]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? awardees.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === awardees.length - 1 ? 0 : prev + 1))
  }
  return (
    <div className="relative pt-3 sm:pt-3">
      {/* Rank */}
      <div className="absolute left-1/2 z-30 -translate-x-1/2 -translate-y-6 sm:-translate-y-8">
        {/* Shadow/Border layer */}
        <span
          className="font-dreamer relative z-0 px-2 text-[40px] leading-[50px] text-black transition-all duration-300"
          style={{ WebkitTextStroke: "10px black" }}
        >
          {rank}
        </span>

        {/* Gradient layer */}
        <span
          className={clsx(
            "font-dreamer absolute inset-0 z-10 bg-gradient-to-b from-white from-2% to-white to-80% bg-clip-text px-2 text-[40px] leading-[50px] text-transparent",
            rank === "1ST" && "via-[#FFBB00] via-30%",
            rank === "2ND" && "via-[#958888] via-50%",
            rank === "3RD" && "via-[#E55F37] via-50%"
          )}
        >
          {rank}
        </span>
      </div>

      {/* Card */}
      <div
        className={clsx(
          "group relative flex h-[570px] w-full flex-col overflow-hidden rounded-[16px] border-[1px] p-4 shadow-lg",
          alt ? "border-[#A2108D] bg-[#FF37E31A]" : "border-[#8A38F5] bg-[#8A38F51A]"
        )}
      >
        {/* Image container */}
        <div className="relative h-[285px] w-full flex-shrink-0 overflow-hidden rounded-[16px]">
          <Image
            src={current.img}
            alt={current.groupName}
            fill
            className="object-cover transition-transform duration-300 select-none group-hover:scale-105"
            quality={100}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Text contents */}
        <div className="mt-4 flex w-full flex-1 flex-col text-white sm:mt-6">
          <div className="flex-1">
            {current.presenter ? (
              <div className="flex flex-col">
                <p
                  className={clsx(
                    "font-avolta mb-1 text-[20px] leading-[26px]",
                    alt ? "text-[#FF37E3]" : "text-[#8A38F5]"
                  )}
                  style={{
                    filter: alt
                      ? "drop-shadow(0px 0px 6px rgba(255,55,227,0.8))"
                      : "drop-shadow(0px 0px 6px rgba(138,56,245,0.8))",
                  }}
                >
                  {current.presenter}
                </p>
                <p
                  className={clsx(
                    "font-avolta text-[18px] leading-[24px] font-light",
                    alt ? "text-[#FF37E3]" : "text-[#8A38F5]"
                  )}
                  style={{
                    filter: alt
                      ? "drop-shadow(0px 0px 4px rgba(255,55,227,0.6))"
                      : "drop-shadow(0px 0px 4px rgba(138,56,245,0.6))",
                  }}
                >
                  {current.groupName}
                </p>
              </div>
            ) : (
              <p
                className={clsx(
                  "font-avolta text-[20px] leading-[26px]",
                  alt ? "text-[#FF37E3]" : "text-[#8A38F5]"
                )}
                style={{
                  filter: alt
                    ? "drop-shadow(0px 0px 6px rgba(255,55,227,0.8))"
                    : "drop-shadow(0px 0px 6px rgba(138,56,245,0.8))",
                }}
              >
                {current.groupName}
              </p>
            )}

            <p className="font-helvetica mt-2 text-[16px] leading-[20px] font-light">
              {current.thesisTitle}
            </p>
            <p className="font-helvetica mt-2 text-[14px] leading-[20px] font-light text-white/50">
              {current.tags}
            </p>
          </div>

          {/* Learn More button  (visible on mobile only since no hover overlay) */}
          <a
            href={"https://cs-expo-2025.vercel.app/projects/" + slugify(current.groupName)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-helvetica mt-3 block w-full rounded-full border-2 py-2 text-center text-sm font-light hover:bg-white hover:text-black sm:mt-4 md:hidden"
          >
            Learn More <LiaLongArrowAltRightSolid className="mb-1 inline-block text-xl" />
          </a>
        </div>

        {/* Hover Overlay */}
        <div
          className={clsx(
            "absolute inset-0 z-20 flex flex-col overflow-y-auto p-6 text-left text-white opacity-0 transition-all duration-300 group-hover:opacity-100",
            alt ? "bg-[rgba(39,4,34,0.95)]" : "bg-[rgba(20,4,39,0.95)]"
          )}
        >
          <div className="flex-1">
            {/* Presenter (if exists) */}
            {current.presenter && (
              <p
                className={clsx(
                  "font-avolta mb-1 text-xl",
                  alt ? "text-[#FF37E3]" : "text-[#8A38F5]"
                )}
                style={{
                  filter: alt
                    ? "drop-shadow(0px 0px 6px rgba(255,55,227,0.8))"
                    : "drop-shadow(0px 0px 6px rgba(138,56,245,0.8))",
                }}
              >
                {current.presenter}
              </p>
            )}

            {/* Group Name */}
            <p
              className={clsx(
                "font-avolta mb-2 text-xl",
                alt ? "text-[#FF37E3]" : "text-[#8A38F5]"
              )}
              style={{
                filter: alt
                  ? "drop-shadow(0px 0px 6px rgba(255,55,227,0.8))"
                  : "drop-shadow(0px 0px 6px rgba(138,56,245,0.8))",
              }}
            >
              {current.groupName}
            </p>

            {/* Thesis Title */}
            {current.thesisTitle && (
              <p className="mb-4 text-lg font-extrabold text-white">{current.thesisTitle}</p>
            )}

            {/* Members */}
            {current.members && current.members.length > 0 && (
              <div className="mb-3">
                <h4
                  className={clsx(
                    "font-helvetica-black text-lg",
                    alt ? "text-[#FF37E3]" : "text-[#8A38F5]"
                  )}
                  style={{
                    filter: alt
                      ? "drop-shadow(0px 0px 1px rgba(255,55,227,0.8))"
                      : "drop-shadow(0px 0px 1px rgba(138,56,245,0.8))",
                  }}
                >
                  Members:
                </h4>
                <ul
                  className={clsx(
                    "font-helvetica list-inside list-disc space-y-1 text-sm font-light",
                    alt ? "marker:text-[#FF37E3]" : "marker:text-[#8A38F5]"
                  )}
                >
                  {current.members.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mentor */}
            {current.mentor && (
              <div className="mb-3">
                <h4
                  className={clsx(
                    "font-helvetica-black text-lg",
                    alt ? "text-[#FF37E3]" : "text-[#8A38F5]"
                  )}
                  style={{
                    filter: alt
                      ? "drop-shadow(0px 0px 1px rgba(255,55,227,0.8))"
                      : "drop-shadow(0px 0px 1px rgba(138,56,245,0.8))",
                  }}
                >
                  Mentor:
                </h4>
                <p className="font-helvetica text-sm font-light">{current.mentor}</p>
              </div>
            )}
          </div>

          {/* Learn more button */}
          <div className="mt-4 pt-4">
            <a
              href={"https://cs-expo-2025.vercel.app/projects/" + slugify(current.groupName)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-helvetica block w-full rounded-full border-2 py-2 text-center font-light hover:bg-white hover:text-black"
            >
              Learn More <LiaLongArrowAltRightSolid className="mb-1 inline-block text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Buttons - Below Card (only when multiple awardees) */}
      {hasMultiple && (
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            onMouseEnter={() => setIsPrevHovered(true)}
            onMouseLeave={() => setIsPrevHovered(false)}
            className="size-10 cursor-pointer rounded-full transition-transform hover:scale-110"
            aria-label="Previous"
          >
            <Image
              src={isPrevHovered ? "/projects/left-hovered.svg" : "/projects/left-arrow.svg"}
              alt="Previous"
              width={40}
              height={40}
              className="size-10"
            />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-1.5">
            {awardees.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="transition-all duration-300"
                style={{
                  width: index === currentIndex ? "28px" : "8px",
                  height: "8px",
                  borderRadius: index === currentIndex ? "4px" : "50%",
                  backgroundColor:
                    index === currentIndex
                      ? alt
                        ? "#FF37E3"
                        : "#8A38F5"
                      : "rgba(255,255,255,0.6)",
                  boxShadow:
                    index === currentIndex
                      ? alt
                        ? "0 0 10px rgba(255,55,227,0.8), 0 0 20px rgba(255,55,227,0.4)"
                        : "0 0 10px rgba(138,56,245,0.8), 0 0 20px rgba(138,56,245,0.4)"
                      : "0 2px 4px rgba(0,0,0,0.3)",
                }}
                aria-label={`Go to awardee ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            onMouseEnter={() => setIsNextHovered(true)}
            onMouseLeave={() => setIsNextHovered(false)}
            className="size-10 cursor-pointer rounded-full transition-transform hover:scale-110"
            aria-label="Next"
          >
            <Image
              src={isNextHovered ? "/projects/right-hovered.svg" : "/projects/right-arrow.svg"}
              alt="Next"
              width={40}
              height={40}
              className="size-10"
            />
          </button>
        </div>
      )}
    </div>
  )
}
