import { useState } from "react"
import { GalleryItem } from "@/components/gallery/GalleryItem"
import { Event } from "@/app/gallery/data/events"

type Props = {
  events: Event[]
}

export function GalleryColumn({ events }: Props) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="relative z-20 -mt-43 w-full px-4 py-8">
      {/* Event Selection Buttons */}
      <div className="mb-8 flex items-center justify-center gap-16">
        {events.map((event, idx) => (
          <button
            key={event.name}
            onClick={() => setSelected(idx)}
            className={`rounded-lg border px-6 py-2 text-sm font-medium transition-all cursor-pointer ${
              selected === idx
                ? "border border-[#ff00dc] bg-transparent text-[#ff00dc]"
                : "border border-white text-white hover:border-[#ff00dc] hover:bg-[#ff00dc] hover:text-white"
            }`}
          >
            {event.name}
          </button>
        ))}
      </div>
      <hr className="mx-auto mb-10 w-100 sm:w-140 md:w-180 lg:w-230 xl:w-280"></hr>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* 1st column */}
          <div className="flex flex-col gap-4">
            {events[selected].images
              .filter((_, idx) => idx % 4 === 0)
              .map((image, idx) => (
                <GalleryItem key={idx} photo={image} />
              ))}
          </div>
          {/* 2nd column */}
          <div className="flex flex-col gap-4">
            {events[selected].images
              .filter((_, idx) => idx % 4 === 1)
              .map((image, idx) => (
                <GalleryItem key={idx} photo={image} />
              ))}
          </div>
          {/* 3rd column */}
          <div className="hidden flex-col gap-4 md:flex">
            {events[selected].images
              .filter((_, idx) => idx % 4 === 2)
              .map((image, idx) => (
                <GalleryItem key={idx} photo={image} />
              ))}
          </div>
          {/* 4th column */}
          <div className="hidden flex-col gap-4 lg:flex">
            {events[selected].images
              .filter((_, idx) => idx % 4 === 3)
              .map((image, idx) => (
                <GalleryItem key={idx} photo={image} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
