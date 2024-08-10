"use client";
import React, { useRef, useEffect } from "react";

export const PhotoCarousel: React.FC<{
  images: { id: number; src: string; alt: string }[];
}> = ({ images }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        } else if (scrollLeft <= 0) {
          scrollRef.current.scrollLeft = scrollWidth / 2;
        }
      }
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);

      return () => {
        ref.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      ref={scrollRef}
      className="relative w-full sm:hidden overflow-x-scroll snap-x snap-mandatory flex pr-4"
      style={{
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {duplicatedImages.map(({ id, src, alt }, index) => (
        <img
          key={`${id}-${index}`}
          src={src}
          alt={alt}
          className="w-full flex-shrink-0 snap-center h-auto object-cover pr-4"
          style={{ minWidth: "100%" }}
        />
      ))}
    </div>
  );
};
