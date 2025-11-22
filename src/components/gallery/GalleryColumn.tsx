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
                ? "border-white bg-white text-black"
                : "border-white bg-transparent text-white hover:bg-white/10"
            }`}
          >
            {event.name}
          </button>
        ))}
      </div>
      <hr className="mx-auto mb-10 w-280"></hr>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {events[selected].images.map((image, idx) => (
            <GalleryItem key={idx} photo={image} />
          ))}
        </div>
      </div>
    </div>
  )
}
