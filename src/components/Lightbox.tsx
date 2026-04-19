import { useState, useEffect, useCallback, type FC, type ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialIndex?: number;
}

const Lightbox: FC<LightboxProps> = ({ images, open, onOpenChange, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!open) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentIndex((i) => (i + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((i) => (i - 1 + images.length) % images.length);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const currentImage = images[currentIndex];

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <DialogPrimitive.Close asChild>
            <button
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none focus:ring-2 focus ring-white/50"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>
          </DialogPrimitive.Close>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          <div 
            className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
            onClick={() => onOpenChange(false)}
          >
            <div 
              className="relative max-w-full max-h-full animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
              {currentImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                  <p className="text-white text-center font-medium text-lg drop-shadow-lg">
                    {currentImage.caption}
                  </p>
                </div>
              )}
            </div>
          </div>

          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/50",
                    i === currentIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
                  )}
                  aria-label={`Ver imagen ${i + 1}`}
                />
              ))}
            </div>
          )}
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

interface LightboxTriggerProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const LightboxTrigger: FC<LightboxTriggerProps> = ({ children, onClick, className }) => {
  return (
    <div 
      className={cn("cursor-zoom-in", className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { Lightbox, LightboxTrigger };
export type { LightboxProps, LightboxTriggerProps, LightboxImage };