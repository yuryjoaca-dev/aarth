import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCallBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => { if (!dismissed) setVisible(window.scrollY > 300); };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 64, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-[#111111] border-t border-white/8"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
            <a href="tel:5875962793" className="flex items-center gap-2.5 text-white/80 hover:text-[#C9963B] transition-colors text-xs uppercase tracking-widest font-medium">
              <Phone className="w-3.5 h-3.5 text-[#C9963B]" />
              <span className="hidden sm:inline text-slate-400">Call us:</span>
              <span>587-596-2793</span>
            </a>
            <div className="flex items-center gap-2">
              <Link to="/contact" className="inline-flex items-center gap-1.5 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium text-xs px-5 py-2 uppercase tracking-widest transition-all duration-200 whitespace-nowrap">
                Free Quote <ArrowRight className="w-3 h-3" />
              </Link>
              <button onClick={() => { setDismissed(true); setVisible(false); }} className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-white transition-colors" aria-label="Dismiss">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
