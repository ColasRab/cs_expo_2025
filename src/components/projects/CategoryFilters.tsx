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
    <section className="w-full pb-8 flex flex-wrap items-center justify-center gap-10 mb-2 -mt-8 relative z-10">
      {allCategories.map((category, index) => {
        const isActive = activeIndex === index

        return (
          <button
            key={index}
            onClick={() => handleCategoryClick(index, category)}
            className={`
              min-w-[120px] px-2 font-helvetica font-bold h-[35px] text-sm rounded-[8px] transition-all whitespace-nowrap cursor-pointer
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