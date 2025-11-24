"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface ResponsiveImageProps extends Omit<ImageProps, "quality"> {
  mobileQuality?: number; // optional override for mobile
  desktopQuality?: number; // optional override for desktop
}

export default function ResponsiveImage({
  src,
  alt,
  mobileQuality = 30,
  desktopQuality = 75,
  priority = false,
  className = "",
  fill = false,
  ...rest
}: ResponsiveImageProps) {
  const [quality, setQuality] = useState(desktopQuality);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setQuality(isMobile ? mobileQuality : desktopQuality);

    const handleResize = () => {
      setQuality(window.innerWidth <= 768 ? mobileQuality : desktopQuality);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileQuality, desktopQuality]);

  return (
    <Image
      src={src}
      alt={alt}
      quality={quality}
      priority={priority}
      className={className}
      fill={fill}
      {...rest}
    />
  );
}
