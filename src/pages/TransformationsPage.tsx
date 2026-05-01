import { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
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
    title: "Staircase Flooring Renovation",
    description: "Old worn carpet stripped out and replaced with modern LVP stair treads. Fresh paint throughout brought the entire stairwell back to life with a clean, contemporary finish.",
    before: "/BeforeAndAfter/before1.jpg",
    after: "/BeforeAndAfter/after1.jpg",
    category: "Flooring",
    date: "March 2025",
    tags: ["LVP Flooring", "Staircase", "Fresh Paint"],
  },
  {
    id: 2,
    title: "Full Stairwell Transformation",
    description: "A complete gut of the stairwell — damaged drywall repaired, carpet removed, and premium luxury vinyl plank installed on every tread and riser. The result is a bright, modern entryway.",
    before: "/BeforeAndAfter/before1c.jpg",
    after: "/BeforeAndAfter/after1c.jpg",
    category: "Flooring",
    date: "March 2025",
    tags: ["LVP Flooring", "Drywall Repair", "Stairwell"],
  },
  {
    id: 3,
    title: "Bedroom Refresh & Flooring",
    description: "Outdated carpeting and old sliding closet doors replaced with new LVP hardwood-look flooring, modern bi-fold closet doors, and a fresh coat of paint throughout.",
    before: "/BeforeAndAfter/before1d.jpg",
    after: "/BeforeAndAfter/after1d.jpg",
    category: "Bedroom",
    date: "March 2025",
    tags: ["LVP Flooring", "Closet Doors", "Interior Painting"],
  },
];

const ALL_CATEGORIES = ["All", ...Array.from(new Set(transformations.map((t) => t.category)))];

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
      className="relative aspect-[3/4] overflow-hidden select-none cursor-col-resize"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <img src={after} loading="lazy" alt={`After — ${title}`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
        <img src={before} loading="lazy" alt={`Before — ${title}`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      </div>
      <div className="absolute top-0 bottom-0 w-px bg-white/70 pointer-events-none" style={{ left: `${pct}%` }} />
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none" style={{ left: `${pct}%` }}>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M7 5L3 10L7 15" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 5L17 10L13 15" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute top-3 left-3 pointer-events-none">
        <span className="bg-black/55 backdrop-blur-sm text-white text-[10px] font-medium px-3 py-1.5 tracking-[0.15em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Before</span>
      </div>
      <div className="absolute top-3 right-3 pointer-events-none">
        <span className="bg-[#C9963B] text-white text-[10px] font-medium px-3 py-1.5 tracking-[0.15em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>After</span>
      </div>
    </div>
  );
}

function TransformationPost({ t }: { t: typeof transformations[number] }) {
  return (
    <motion.article variants={fadeUp} className="bg-white border border-stone-100 overflow-hidden shadow-sm flex flex-col">
      {/* Post header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#0f2557] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[10px] font-bold tracking-wide">AC</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-800 leading-none" style={{ fontFamily: 'Inter, sans-serif' }}>Aarth Construction</p>
            <div className="flex items-center gap-1 mt-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              <span className="text-[11px] text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>{t.date}</span>
            </div>
          </div>
        </div>
        <span className="text-[10px] font-medium text-[#C9963B] border border-[#C9963B]/30 px-2.5 py-1 uppercase tracking-[0.15em]" style={{ fontFamily: 'Inter, sans-serif' }}>{t.category}</span>
      </div>

      {/* Slider */}
      <BeforeAfterSlider before={t.before} after={t.after} title={t.title} />

      {/* Post body */}
      <div className="px-5 py-5 flex flex-col gap-3 flex-1">
        <h3 className="text-lg font-semibold text-slate-900 tracking-tight leading-snug">{t.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{t.description}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {t.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 text-[11px] text-slate-500 bg-stone-50 border border-stone-200 px-2.5 py-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Tag className="w-2.5 h-2.5" />{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function TransformationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? transformations
    : transformations.filter((t) => t.category === activeFilter);

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
            At Aarth Construction, we believe every renovation tells a story. These are our real results — no staging, no stock photos. Drag the slider on each post to reveal the transformation for yourself.
          </motion.p>
        </motion.div>
      </section>

      {/* Posts feed */}
      <section className="pb-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* Category filter */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="flex flex-wrap gap-2 justify-center mb-12">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs uppercase tracking-widest font-medium px-5 py-2.5 border transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-[#0f2557] border-[#0f2557] text-white"
                    : "bg-white border-stone-200 text-slate-500 hover:border-[#C9963B] hover:text-[#C9963B]"
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid of posts */}
          <motion.div
            key={activeFilter}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger(0.08)}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((t) => (
              <TransformationPost key={t.id} t={t} />
            ))}
          </motion.div>
        </div>
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
