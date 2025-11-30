// src/components/gallery/GalleryColumn.tsx
import { useState, useEffect } from "react"
import { CldImage } from "next-cloudinary"

type Event = {
  id: number
  name: string
  folder: string
  images: ImageData[]
}

type ImageData = {
  url: string
  width: number
  height: number
}

function Modal({ image, onClose, onNext, onPrev, hasNext, hasPrev }: { 
  image: ImageData | null; 
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}) {
  if (!image) return null
  
  console.log("🖼️ Modal open ->", image.url)
  console.log("🔍 hasNext:", hasNext, "hasPrev:", hasPrev)

  // Touch handling for swipe navigation
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left - next image
      if (hasNext) onNext()
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right - previous image
      if (hasPrev) onPrev()
    }
  }

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Close button - hidden on mobile */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="fixed right-8 top-8 text-5xl text-white hover:text-gray-300 z-[10000] hidden md:block"
      >
        ×
      </button>
      
      {/* Left Arrow - hidden on mobile */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="fixed left-8 top-1/2 -translate-y-1/2 text-6xl text-white hover:text-pink-500 z-[10000] bg-black bg-opacity-70 rounded-full w-20 h-20 items-center justify-center transition hidden md:flex"
        >
          ‹
        </button>
      )}
      
      {/* Right Arrow - hidden on mobile */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="fixed right-8 top-1/2 -translate-y-1/2 text-6xl text-white hover:text-pink-500 z-[10000] bg-black bg-opacity-70 rounded-full w-20 h-20 items-center justify-center transition hidden md:flex"
        >
          ›
        </button>
      )}
      
      <div onClick={(e) => e.stopPropagation()} className="relative">
        <CldImage
          src={image.url}
          width={image.width}
          height={image.height}
          alt="Full size"
          className="max-h-[90vh] max-w-[90vw] object-contain"
          loading="eager"
          priority={true}
        />
      </div>
    </div>
  )
}

export function GalleryColumn() {

  const [events, setEvents] = useState<Event[]>([
    { id: 1, name: "Dev Day",        folder: "CS_EXPO/pics/Day_1", images: [] },
    { id: 2, name: "Day 1",        folder: "CS_EXPO/pics/Day_2", images: [] },
    { id: 3, name: "Day 2",      folder: "CS_EXPO/pics/Day_3", images: [] },
  ])

  const [selected, setSelected] = useState(0)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1)

  useEffect(() => {
    console.log("🔄 useEffect → fetching all events")
    fetchAll()
  }, [])

  useEffect(() => {
    // Prefetch images for non-selected tabs
    events.forEach((event, idx) => {
      if (idx !== selected && event.images.length > 0) {
        event.images.slice(0, 5).forEach(img => {
          const link = document.createElement('link')
          link.rel = 'prefetch'
          link.as = 'image'
          link.href = img.url
          document.head.appendChild(link)
        })
      }
    })
  }, [events, selected])

  // Prefetch adjacent images in modal
  useEffect(() => {
    if (selectedImageIndex >= 0 && currentEvent.images.length > 0) {
      // Prefetch next image
      if (selectedImageIndex < currentEvent.images.length - 1) {
        const nextImg = currentEvent.images[selectedImageIndex + 1]
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.as = 'image'
        link.href = nextImg.url
        document.head.appendChild(link)
      }
      // Prefetch previous image
      if (selectedImageIndex > 0) {
        const prevImg = currentEvent.images[selectedImageIndex - 1]
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.as = 'image'
        link.href = prevImg.url
        document.head.appendChild(link)
      } 
    }
  }, [selectedImageIndex, events[selected].images])

  async function fetchAll() {
    console.log("🚀 Starting fetchAll()")
    setLoading(true)

    // Fetch all in parallel without waiting
    const fetches = events.map(async (event) => {
      console.log(`📁 Fetching folder: ${event.folder}`)

      try {
        const res = await fetch(`/api/cloudinary/list?folder=${event.folder}`)
        console.log("🌐 API status:", res.status)

        const json = await res.json()
        console.log("📦 API JSON:", json)

        // Handle direct array response
        const assets = Array.isArray(json) ? json : (json.assets || [])

        if (assets.length === 0) {
          console.warn(`⚠️ No assets found for folder: ${event.folder}`)
          return event
        }

        const imageData = assets.map((img: any) => ({
          url: img.secure_url,
          width: img.width,
          height: img.height
        }))
        console.log(`🖼️ Loaded ${imageData.length} images for ${event.name}`)

        return { ...event, images: imageData }

      } catch (err) {
        console.error("❌ Fetch failed:", err)
        return event
      }
    })

    // Update state as soon as first event loads
    let loadedCount = 0
    const updated = [...events]
    
    fetches.forEach((fetchPromise, idx) => {
      fetchPromise.then(result => {
        updated[idx] = result
        loadedCount++
        
        // Update UI immediately when each folder loads
        setEvents([...updated])
        
        if (loadedCount === events.length) {
          console.log("✅ All events loaded")
          setLoading(false)
        }
      })
    })

    // Set loading false after 100ms regardless (show partial results)
    setTimeout(() => setLoading(false), 100)
  }

  const currentEvent = events[selected]

  console.log("🎯 Current event:", currentEvent)

  return (
    <div className="px-4 py-8">
      
      {/* Buttons */}
      <div className="flex justify-center gap-4 md:gap-16 mb-8 relative z-10 px-4">
        {events.map((event, idx) => (
          <button
            key={event.id}
            onClick={(e) => {
              e.stopPropagation()
              console.log("🔘 Selected event:", event.name)
              setSelected(idx)
            }}
            className={`px-4 py-2 md:px-6 md:py-2 border rounded transition text-sm md:text-base ${
              selected === idx
                ? "border-pink-500 text-pink-500"
                : "text-white border-white hover:border-pink-500 hover:bg-pink-500 hover:text-white"
            }`}
          >
            {event.name}
          </button>
        ))}
      </div>

      <hr className="mb-10" />

      {/* Loading State */}
      {loading ? (
        <p className="text-white text-center">Loading images…</p>
      ) : currentEvent.images.length === 0 ? (
        <p className="text-gray-400 text-center">
          No images found for folder <br/> 
          <code>{currentEvent.folder}</code>
        </p>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {currentEvent.images.map((imgData, i) => {
            console.log("📥 Rendering image:", imgData.url)

            return (
              <div 
                key={i} 
                className="mb-4 break-inside-avoid cursor-pointer"
                onClick={() => {
                  console.log("🔍 Clicked -> opening modal:", imgData.url)
                  setSelectedImage(imgData)
                  setSelectedImageIndex(i)
                }}
              >
                <CldImage
                  src={imgData.url}
                  width={imgData.width}
                  height={imgData.height}
                  alt={`Image ${i}`}
                  className="w-full rounded-lg hover:scale-105 transition"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="eager"
                  priority={true}
                  onError={() => console.error("❌ CldImage failed:", imgData.url)}
                  onLoad={() => console.log("✅ CldImage loaded:", imgData.url)}
                />
              </div>
            )
          })}
        </div>
      )}

      <Modal 
        image={selectedImage} 
        onClose={() => {
          setSelectedImage(null)
          setSelectedImageIndex(-1)
        }}
        onNext={() => {
          const nextIndex = selectedImageIndex + 1
          console.log("➡️ Next clicked, moving to index:", nextIndex)
          if (nextIndex < currentEvent.images.length) {
            setSelectedImage(currentEvent.images[nextIndex])
            setSelectedImageIndex(nextIndex)
          }
        }}
        onPrev={() => {
          const prevIndex = selectedImageIndex - 1
          console.log("⬅️ Prev clicked, moving to index:", prevIndex)
          if (prevIndex >= 0) {
            setSelectedImage(currentEvent.images[prevIndex])
            setSelectedImageIndex(prevIndex)
          }
        }}
        hasNext={selectedImageIndex >= 0 && selectedImageIndex < currentEvent.images.length - 1}
        hasPrev={selectedImageIndex > 0}
      />
    </div>
  )
}