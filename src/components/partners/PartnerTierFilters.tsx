"use client"
import { useState } from "react"

interface PartnerTierFiltersProps {
  onFilterChange?: (tier: string | null) => void;
}

const partnerTiers = [
  ["Diamond Sponsors", "Gold Sponsors", "Silver Sponsors", "Media Partners"],
  ["Bronze Sponsors", "Minor Partners", "Major Partners", "Community Development Partners"]
];

export default function PartnerTierFilters({ onFilterChange }: PartnerTierFiltersProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleTierClick = (index: number, tier: string) => {
    const newActiveIndex = activeIndex === index ? null : index;
    setActiveIndex(newActiveIndex);
    
    if (onFilterChange) {
      onFilterChange(newActiveIndex === null ? null : tier);
    }
  }

  return (
    <section className="w-full pb-6 sm:pb-8 mb-2 -mt-6 sm:-mt-8 relative z-10 px-4 sm:px-6">
      {/* Desktop/Tablet: 2 rows x 4 columns */}
      <div className="hidden md:flex flex-col items-center justify-center gap-4 lg:gap-6">
        {partnerTiers.map((row, rowIndex) => (
          <div key={rowIndex} className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 xl:gap-[50px]">
            {row.map((tier, colIndex) => {
              const index = rowIndex * 4 + colIndex;
              const isActive = activeIndex === index;

              return (
                <button
                  key={index}
                  onClick={() => handleTierClick(index, tier)}
                  className={`
                    min-w-[140px] md:min-w-[150px] lg:min-w-[160px] px-3 md:px-4 font-helvetica font-bold h-[33px] md:h-[35px] text-xs md:text-sm rounded-[8px] transition-all whitespace-nowrap cursor-pointer
                    ${isActive
                      ? 'bg-transparent text-[#ff00dc] border border-[#ff00dc]'
                      : 'text-white border border-white hover:bg-[#ff00dc] hover:text-white hover:border-[#ff00dc]'
                    }
                  `}
                >
                  {tier}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Mobile: 2 columns grid */}
      <div className="md:hidden grid grid-cols-2 gap-2.5 sm:gap-3 max-w-sm sm:max-w-md mx-auto">
        {partnerTiers.flat().map((tier, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={index}
              onClick={() => handleTierClick(index, tier)}
              className={`
                px-2 font-helvetica font-bold h-[32px] sm:h-[35px] text-[10px] sm:text-xs rounded-[8px] transition-all whitespace-wrap leading-tight
                ${isActive
                  ? 'bg-transparent text-[#ff00dc] border border-[#ff00dc]'
                  : 'text-white border border-white hover:bg-[#ff00dc] hover:text-white hover:border-[#ff00dc]'
                }
              `}
            >
              {tier}
            </button>
          );
        })}
      </div>
    </section>
  )
}
