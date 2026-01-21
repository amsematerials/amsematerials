"use client";

import { useState } from "react";

export default function CoverImage({
  src,
  alt,
  fallbackSrc = "/journals/bookchapter.jpg",
  className = "",
}: {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}
