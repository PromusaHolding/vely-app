'use client';

import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export function Carousel({ children }: { children: React.ReactNode }) {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
    </div>
  );
}

export function CarouselContent({ children }: { children: React.ReactNode }) {
  return <div className="flex">{children}</div>;
}

export function CarouselItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-[100%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] p-2">
      {children}
    </div>
  );
}

export function CarouselNext({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
    >
      ➜
    </button>
  );
}

export function CarouselPrevious({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
    >
      ←
    </button>
  );
}
