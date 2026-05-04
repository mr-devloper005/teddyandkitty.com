"use client";

import { useState } from "react";
import { ContentImage } from "@/components/shared/content-image";
import { X } from "lucide-react";

export function TaskImageCarousel({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images.length) return null;

  // Create unique layout based on image count
  const getGridLayout = () => {
    const count = images.length;

    if (count === 1) {
      return (
        <div className="cursor-pointer overflow-hidden rounded-2xl border border-[#1b4332]/10" onClick={() => setSelectedImage(images[0])}>
          <div className="relative aspect-[16/10] w-full">
            <ContentImage
              src={images[0]}
              alt="Gallery image 1"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              quality={85}
              className="object-cover transition-transform duration-500 hover:scale-105"
              intrinsicWidth={1440}
              intrinsicHeight={900}
              priority
            />
          </div>
        </div>
      );
    }

    if (count === 2) {
      return (
        <div className="grid grid-cols-2 gap-3">
          {images.map((src, index) => (
            <div key={`${src}-${index}`} className="cursor-pointer overflow-hidden rounded-2xl border border-[#1b4332]/10" onClick={() => setSelectedImage(src)}>
              <div className="relative aspect-[4/3] w-full">
                <ContentImage
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 450px"
                  quality={85}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  intrinsicWidth={800}
                  intrinsicHeight={600}
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (count === 3) {
      return (
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 cursor-pointer overflow-hidden rounded-2xl border border-[#1b4332]/10" onClick={() => setSelectedImage(images[0])}>
            <div className="relative aspect-[16/9] w-full">
              <ContentImage
                src={images[0]}
                alt="Gallery image 1"
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                quality={85}
                className="object-cover transition-transform duration-500 hover:scale-105"
                intrinsicWidth={1440}
                intrinsicHeight={810}
                priority
              />
            </div>
          </div>
          {images.slice(1).map((src, index) => (
            <div key={`${src}-${index}`} className="cursor-pointer overflow-hidden rounded-2xl border border-[#1b4332]/10" onClick={() => setSelectedImage(src)}>
              <div className="relative aspect-square w-full">
                <ContentImage
                  src={src}
                  alt={`Gallery image ${index + 2}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 450px"
                  quality={85}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  intrinsicWidth={600}
                  intrinsicHeight={600}
                />
              </div>
            </div>
          ))}
        </div>
      );
    }

    // 4+ images: Bento grid layout
    return (
      <div className="grid grid-cols-4 gap-3">
        {/* Large featured image */}
        <div className="col-span-2 row-span-2 cursor-pointer overflow-hidden rounded-2xl border border-[#1b4332]/10" onClick={() => setSelectedImage(images[0])}>
          <div className="relative aspect-square w-full">
            <ContentImage
              src={images[0]}
              alt="Gallery image 1"
              fill
              sizes="(max-width: 768px) 50vw, 450px"
              quality={85}
              className="object-cover transition-transform duration-500 hover:scale-105"
              intrinsicWidth={800}
              intrinsicHeight={800}
              priority
            />
          </div>
        </div>
        {/* Side images */}
        {images.slice(1, 3).map((src, index) => (
          <div key={`${src}-${index}`} className="col-span-2 cursor-pointer overflow-hidden rounded-2xl border border-[#1b4332]/10" onClick={() => setSelectedImage(src)}>
            <div className="relative aspect-[16/9] w-full">
              <ContentImage
                src={src}
                alt={`Gallery image ${index + 2}`}
                fill
                sizes="(max-width: 768px) 50vw, 450px"
                quality={85}
                className="object-cover transition-transform duration-500 hover:scale-105"
                intrinsicWidth={600}
                intrinsicHeight={338}
              />
            </div>
          </div>
        ))}
        {/* Remaining images in horizontal scroll row */}
        {images.length > 3 && (
          <div className="col-span-4 mt-2">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {images.slice(3).map((src, index) => (
                <div key={`${src}-${index}`} className="shrink-0 cursor-pointer overflow-hidden rounded-xl border border-[#1b4332]/10" onClick={() => setSelectedImage(src)}>
                  <div className="relative h-32 w-44 sm:h-40 sm:w-56">
                    <ContentImage
                      src={src}
                      alt={`Gallery image ${index + 4}`}
                      fill
                      sizes="200px"
                      quality={80}
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      intrinsicWidth={300}
                      intrinsicHeight={200}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="space-y-4">
        {getGridLayout()}
        <p className="text-center text-xs text-muted-foreground">
          {images.length} {images.length === 1 ? "image" : "images"} — click to view full size
        </p>
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img
              src={selectedImage}
              alt="Full size"
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}




