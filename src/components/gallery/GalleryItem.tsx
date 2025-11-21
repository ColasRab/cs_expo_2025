type ImageProps = {
  photo: string
}

export function GalleryItem({ photo }: ImageProps) {
  return (
    <div className="w-full">
      <img
        src={photo}
        alt="Gallery image"
        draggable={false}
        loading="lazy"
        decoding="async"
        className="rounded-2xl select-none"
      />
    </div>
  )
}
