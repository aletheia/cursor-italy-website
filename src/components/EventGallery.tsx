import { useState, useCallback, useEffect } from 'react';
import { X, Download, ChevronLeft, ChevronRight } from 'lucide-react';

/** Converts full-size image path to thumbnail path (inserts /thumb/ before filename). */
function getThumbUrl(fullUrl: string): string {
  const lastSlash = fullUrl.lastIndexOf('/');
  if (lastSlash === -1) return fullUrl;
  return `${fullUrl.slice(0, lastSlash)}/thumb/${fullUrl.slice(lastSlash + 1)}`;
}

interface EventGalleryProps {
  images: string[];
  title: string;
}

export default function EventGallery({ images, title }: EventGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const selectedSrc = selectedIndex !== null ? images[selectedIndex] : null;

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
    setImageLoaded(false);
    setIsAnimating(false);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsAnimating(false);
    setSelectedIndex(null);
    setImageLoaded(false);
  }, []);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    const next = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedIndex(next);
    setImageLoaded(false);
  }, [selectedIndex, images.length]);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    const next = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(next);
    setImageLoaded(false);
  }, [selectedIndex, images.length]);

  const handleBackdropClick = useCallback(() => {
    closeLightbox();
  }, [closeLightbox]);

  // Entrance animation: run after mount
  useEffect(() => {
    if (selectedIndex === null) return;
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsAnimating(true));
    });
    return () => cancelAnimationFrame(t);
  }, [selectedIndex]);

  // Keyboard: Escape close, Arrow left/right navigate
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex, closeLightbox, goPrev, goNext]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((src, i) => (
          <figure
            key={src}
            className="group relative aspect-square rounded-xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer"
            onClick={() => openLightbox(i)}
          >
            <img
              src={getThumbUrl(src)}
              alt={`${title} – photo ${i + 1}`}
              className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              width={240}
              height={240}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== src) target.src = src;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
          </figure>
        ))}
      </div>

      {/* Lightbox with animation, back/forward, download overlay */}
      {selectedSrc !== null && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
        >
          {/* Content container with scale animation - no stopPropagation so backdrop clicks close */}
          <div
            className={`relative flex items-center justify-center w-full h-full transition-all duration-300 ease-out ${
              isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Close button - overlay style */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image - full size loaded only when lightbox is open; only click on the img itself does not close */}
            <div className="relative flex flex-col items-center justify-center flex-1 min-h-0 max-h-full">
              <img
                src={selectedSrc}
                alt={`${title} – photo ${(selectedIndex ?? 0) + 1}`}
                className={`max-w-[90vw] max-h-[70vh] w-auto h-auto object-contain rounded-lg shadow-2xl transition-opacity duration-200 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onClick={(e) => e.stopPropagation()}
                role="presentation"
              />
            </div>

            {/* Fixed bottom bar: counter + download - always visible; click on bar does not close */}
            <div
              className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 py-4 px-4 bg-gradient-to-t from-black/80 to-transparent"
              onClick={(e) => e.stopPropagation()}
              role="presentation"
            >
              <span className="text-sm text-white/90">
                {(selectedIndex ?? 0) + 1} / {images.length}
              </span>
              <a
                href={selectedSrc}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-white font-medium hover:bg-white/25 transition-all duration-200 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="w-5 h-5" />
                Download full size
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
