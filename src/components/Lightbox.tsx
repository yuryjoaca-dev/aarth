import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  index: number | null;
  onChange: (i: number | null) => void;
}

export default function Lightbox({ images, index, onChange }: Props) {
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowLeft" && index! > 0) onChange(index! - 1);
      if (e.key === "ArrowRight" && index! < images.length - 1) onChange(index! + 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, index, images.length, onChange]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
          onClick={() => onChange(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors duration-150 z-10"
            onClick={() => onChange(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          {index! > 0 && (
            <button
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors duration-150 z-10"
              onClick={(e) => { e.stopPropagation(); onChange(index! - 1); }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-9 h-9" />
            </button>
          )}

          {/* Image */}
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            src={images[index!]}
            alt=""
            className="max-h-[88vh] max-w-[88vw] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {index! < images.length - 1 && (
            <button
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors duration-150 z-10"
              onClick={(e) => { e.stopPropagation(); onChange(index! + 1); }}
              aria-label="Next"
            >
              <ChevronRight className="w-9 h-9" />
            </button>
          )}

          {/* Counter */}
          <p
            className="absolute bottom-5 text-white/40 text-xs uppercase tracking-widest"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {index! + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
