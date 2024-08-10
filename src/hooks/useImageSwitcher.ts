"use client";
import { useState, useEffect } from "react";

const useImageSwitcher = (images: string[], interval: number) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return images[currentImageIndex];
};

export default useImageSwitcher;
