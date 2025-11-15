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
    <section className="w-full pb-8 flex flex-col items-center justify-center gap-6 mb-2 -mt-8 relative z-10">
      {partnerTiers.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap items-center justify-center gap-[50px]">
          {row.map((tier, colIndex) => {
            const index = rowIndex * 4 + colIndex;
            const isActive = activeIndex === index;

            return (
              <button
                key={index}
                onClick={() => handleTierClick(index, tier)}
                className={`
                  min-w-[160px] px-4 font-helvetica font-bold h-[35px] text-sm rounded-[8px] transition-all whitespace-nowrap
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
    </section>
  )
}
