import { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import TrustSignals from "../components/TrustSignals";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
});

const transformations = [
  {
    id: 1,
    title: "Contemporary Home Interior Renovation",
    description: "A complete redesign with premium finishes and modern lighting.",
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    category: "Kitchen",
  },
  {
    id: 2,
    title: "Basement to Entertainment Hub",
    description: "Transformed a bare concrete basement into a fully finished lounge and home theatre.",
    before: "https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    category: "Basement",
  },
  {
    id: 3,
    title: "Spa-Style Bathroom Transformation",
    description: "An outdated bathroom reimagined as a modern spa retreat with walk-in shower and freestanding tub.",
    before: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80",
    after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    category: "Bathroom",
  },
];

function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [pct, setPct] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePct = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPct((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    updatePct(e.clientX);
    const onMove = (ev: MouseEvent) => { if (dragging.current) updatePct(ev.clientX); };
    const onUp = () => { dragging.current = false; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const onMove = (ev: TouchEvent) => updatePct(ev.touches[0].clientX);
    const onEnd = () => { window.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onEnd); };
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);
    updatePct(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-video md:aspect-[16/7] overflow-hidden select-none cursor-col-resize"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <img src={after} alt={`After — ${title}`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
        <img src={before} alt={`Before — ${title}`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      </div>
      <div className="absolute top-0 bottom-0 w-px bg-white/70 pointer-events-none" style={{ left: `${pct}%` }} />
      {/* Drag handle — intentionally circular for UX affordance */}
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none" style={{ left: `${pct}%` }}>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M7 5L3 10L7 15" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 5L17 10L13 15" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute top-4 left-4 pointer-events-none">
        <span className="bg-black/55 backdrop-blur-sm text-white text-[10px] font-medium px-3 py-1.5 tracking-[0.15em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Before</span>
      </div>
      <div className="absolute top-4 right-4 pointer-events-none">
        <span className="bg-[#C9963B] text-white text-[10px] font-medium px-3 py-1.5 tracking-[0.15em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>After</span>
      </div>
    </div>
  );
}

export default function TransformationsPage() {
  return (
    <>
      <SEO title="Before & After Transformations" description="See stunning before and after renovation transformations by Aarth Construction — kitchens, bathrooms, basements and more." url="/transformations" />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80" alt="Before & After Transformations" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#C9963B]/60" />
              <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>Before & After</span>
              <span className="h-px w-12 bg-[#C9963B]/60" />
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-5 tracking-tight leading-none">Transformations</motion.h1>
            <motion.p variants={fadeUp} className="text-base text-slate-300/90 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>See how we transform every project from outdated to outstanding.</motion.p>
          </motion.div>
        </div>
      </section>

      <TrustSignals />

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
          <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Our Results</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Witness Stunning Transformations</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-slate-500 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            At Aarth Construction, we believe that every renovation tells a story. From small upgrades to complete remodels, our before and after transformations showcase the power of quality craftsmanship and creative design. Drag the slider to reveal the difference.
          </motion.p>
        </motion.div>
      </section>

      {/* Sliders */}
      <section className="pb-24 bg-stone-50">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            {transformations.map((t) => (
              <motion.div key={t.id} variants={fadeUp} className="bg-white border border-stone-100 overflow-hidden shadow-sm">
                <BeforeAfterSlider before={t.before} after={t.after} title={t.title} />
                <div className="p-8 border-t border-stone-100">
                  <span className="text-[#C9963B] text-[10px] font-medium uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>{t.category}</span>
                  <h3 className="text-2xl font-semibold text-slate-900 mt-1 tracking-tight">{t.title}</h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{t.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808] text-white py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#111111_0%,_transparent_70%)]" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.12)} className="relative max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#C9963B]/50" />
            <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Get Started</span>
            <span className="h-px w-12 bg-[#C9963B]/50" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to start your project?</motion.h2>
          <motion.p variants={fadeUp} className="mb-12 text-slate-400 max-w-xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>Let&apos;s build something extraordinary together.</motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-8 py-3.5 text-xs uppercase tracking-widest transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Contact Us <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
