// src/components/gallery/GalleryColumn.tsx
import { useState, useEffect } from "react"
import { createClient } from '@supabase/supabase-js'
import { GalleryItem } from "@/components/gallery/GalleryItem"

type Event = {
  id: number
  name: string
  images: string[]
}

type Props = {
  events?: Event[]
}

function Modal({ image, onClose }: { image: string | null; onClose: () => void }) {
  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-2 sm:p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-2 top-2 sm:right-4 sm:top-4 text-3xl sm:text-4xl text-white hover:text-gray-300 z-10"
      >
        ×
      </button>
      <img
        src={image}
        alt="Full size"
        className="max-h-[85vh] sm:max-h-[90vh] max-w-[90vw] object-contain"
      />
    </div>
  )
}

export function GalleryColumn({ events: propEvents }: Props) {
  // Initialize Supabase client inside component
  const supabase = createClient(
    'https://sdeirkuuvtttfxftgpdc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkZWlya3V1dnR0dGZ4ZnRncGRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4MzcwMzYsImV4cCI6MjA3OTQxMzAzNn0.RZY04lJGb0zLLgTRjleUoDe3_C73PmAClpgTyjL2Nl4'
  )

  const [events, setEvents] = useState<Event[]>([
    { id: 1, name: 'Dev Day', images: [] },
    { id: 2, name: 'CS Expo Day 1', images: [] },
    { id: 3, name: 'CS Expo Day 2', images: [] }
  ])
  const [selected, setSelected] = useState(0)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    try {
      setLoading(true)
      
      // First, let's check what buckets exist
      const { data: buckets } = await supabase.storage.listBuckets()
      console.log('Available buckets:', buckets)
      
      const updatedEvents = await Promise.all(
        events.map(async (event) => {
          // Try listing files in the folder
          const { data, error } = await supabase.storage
            .from('pics')
            .list(event.id.toString(), {
              limit: 100,
              offset: 0,
              sortBy: { column: 'name', order: 'asc' }
            })

          console.log(`Folder ${event.id} data:`, data)
          console.log(`Folder ${event.id} error:`, error)

          if (error) {
            console.error(`Error fetching images for ${event.name}:`, error)
            return event
          }

          if (!data || data.length === 0) {
            console.warn(`No files found in folder ${event.id}`)
            return event
          }

          const imageUrls = data
            .filter(file => {
              const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
              const notPlaceholder = !file.name.includes('.emptyFolderPlaceholder')
              return isImage && notPlaceholder
            })
            .map(file => {
              const { data: urlData } = supabase.storage
                .from('pics')
                .getPublicUrl(`${event.id}/${file.name}`)
              console.log(`Image URL for ${file.name}:`, urlData.publicUrl)
              return urlData.publicUrl
            })

          console.log(`Event ${event.name} images:`, imageUrls)
          return { ...event, images: imageUrls }
        })
      )

      setEvents(updatedEvents)
    } catch (error) {
      console.error('Error fetching images:', error)
    } finally {
      setLoading(false)
    }
  }

  const currentEvent = events[selected]

  return (
    <div className="relative z-20 -mt-43 w-full px-4 sm:px-6 md:px-8 py-6 sm:py-8">
      {/* Event Selection Buttons */}
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
        {events.map((event, idx) => (
          <button
            key={event.id}
            onClick={() => setSelected(idx)}
            className={`cursor-pointer rounded-lg border px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all w-full sm:w-auto max-w-xs sm:max-w-none ${
              selected === idx
                ? "border border-[#ff00dc] bg-transparent text-[#ff00dc]"
                : "border border-white text-white hover:border-[#ff00dc] hover:bg-[#ff00dc] hover:text-white"
            }`}
          >
            {event.name}
          </button>
        ))}
      </div>
      <hr className="mx-auto mb-6 sm:mb-8 md:mb-10 w-full max-w-[250px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[800px]"></hr>

      {/* Gallery Content */}
      <div className="mx-auto max-w-7xl">
        {loading ? (
          <div className="flex h-48 sm:h-64 items-center justify-center">
            <div className="text-base sm:text-lg md:text-xl text-white">Loading images...</div>
          </div>
        ) : currentEvent.images.length === 0 ? (
          <div className="flex h-48 sm:h-64 items-center justify-center">
            <div className="text-base sm:text-lg md:text-xl text-gray-400">No images found for this event</div>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
            {currentEvent.images.map((image, idx) => (
              <div key={idx} className="mb-3 sm:mb-4 break-inside-avoid">
                <div
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedImage(image)}
                >
                  <GalleryItem photo={image} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  )
}