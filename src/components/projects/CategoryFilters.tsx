"use client"
import { useState } from "react"
import { allCategories } from "@/app/projects/data/ProjectsData"

interface CategoryFiltersProps {
  onFilterChange?: (category: string | null) => void;
}

export default function CategoryFilters({ onFilterChange }: CategoryFiltersProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleCategoryClick = (index: number, category: string) => {
    const newActiveIndex = activeIndex === index ? null : index;
    setActiveIndex(newActiveIndex);
    
    // Call the callback if provided
    if (onFilterChange) {
      onFilterChange(newActiveIndex === null ? null : category);
    }
  }

  return (
    <section className="w-full pb-6 sm:pb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-2 -mt-6 sm:-mt-8 px-4 sm:px-6 relative z-10">
      {allCategories.map((category, index) => {
        const isActive = activeIndex === index

        return (
          <button
            key={index}
            onClick={() => handleCategoryClick(index, category)}
            className={`
              min-w-[100px] sm:min-w-[110px] md:min-w-[120px] px-2 sm:px-2.5 md:px-3 font-helvetica font-bold h-[32px] sm:h-[34px] md:h-[35px] text-xs sm:text-sm rounded-[8px] transition-all whitespace-nowrap cursor-pointer
              ${isActive
                ? 'bg-transparent text-[#ff00dc] border border-[#ff00dc]'
                : 'text-white border border-white hover:bg-[#ff00dc] hover:text-white hover:border-[#ff00dc]'
              }
            `}
          >
            {category}
          </button>
        )
      })}
    </section>
  )
}