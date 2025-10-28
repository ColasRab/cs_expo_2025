import { useState } from "react"

type ImageProps = {
  photo: string
}

export function GalleryItem({ photo }: ImageProps) {
  return (
    <div className="relative inline-block w-[82vw] max-w-[580px] align-top sm:mx-2 sm:w-[60vw] md:mx-2 md:w-[46vw] lg:w-[36vw] xl:w-[30vw] 2xl:w-[28vw]">
      <img
        src="/gallery/images/image-container.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none"
      />

      <div className="relative z-10 box-border px-3 pt-10 pb-2 sm:px-4 sm:pt-11 sm:pb-3">
        <img
          src={photo}
          alt="Image"
          draggable={false}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full object-cover select-none"
        />
      </div>
    </div>
  )
}
