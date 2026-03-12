import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
});

const gallery = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "https://images.unsplash.com/photo-1560185008-a33f5c7cff9f?w=800&q=80",
  "https://images.unsplash.com/photo-1571741140674-8949ca7df2a7?w=800&q=80",
  "https://images.unsplash.com/photo-1600566752547-e939eb17bce1?w=800&q=80",
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
];
const stats = [
  { v: "120+", l: "Kitchens Completed" },
  { v: "90+", l: "Bathrooms Renovated" },
  { v: "150+", l: "Flooring Projects" },
  { v: "70+", l: "Basements Finished" },
];

export default function FlooringPage() {
  return (
    <>
      <SEO title="Flooring Installation Edmonton" description="Hardwood, laminate, tile, vinyl flooring installation in Edmonton. Expert installers, free quotes." url="/residential/flooring" />

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80" alt="Flooring" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/75" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#C9963B]/60" />
              <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>Residential</span>
              <span className="h-px w-12 bg-[#C9963B]/60" />
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-5 tracking-tight leading-none">Flooring</motion.h1>
            <motion.p variants={fadeUp} className="text-base text-slate-300/90 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Durable, elegant, and crafted to perfection.</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
          <div className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>What We Do</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Flooring That Lasts</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our flooring solutions combine durability with beauty. Whether it&apos;s hardwood, laminate, or tile, we deliver precision installation and premium quality that enhances every room in your home.
            </motion.p>
          </div>
          <motion.div variants={stagger(0.07)} className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {["Hardwood Flooring", "Laminate & Vinyl", "Ceramic & Porcelain Tile", "Carpet Installation", "Floor Refinishing", "Subfloor Repair"].map((f) => (
              <motion.div key={f} variants={fadeUp} className="flex items-center gap-2.5 text-xs text-slate-700 border border-stone-200 px-4 py-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9963B] flex-shrink-0" />{f}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#111111] text-white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.1)} className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.l} variants={fadeUp} className={`text-center py-8 px-4 ${i < stats.length - 1 ? "md:border-r border-white/10" : ""} ${i === 1 ? "border-r border-white/10" : ""}`}>
              <h3 className="text-4xl md:text-5xl font-bold text-[#C9963B] tracking-tight">{s.v}</h3>
              <p className="mt-2 text-slate-400 text-xs font-medium uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>{s.l}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] text-center mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Our Work</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-center text-slate-900 mb-12">Flooring Gallery</motion.h2>
            <motion.div variants={stagger(0.08)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {gallery.map((src, i) => (
                <motion.div key={i} variants={fadeUp} className="relative aspect-[4/3] overflow-hidden group">
                  <img src={src} alt={`Flooring ${i + 1}`} className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#080808] text-white py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#111111_0%,_transparent_70%)]" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.12)} className="relative max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#C9963B]/50" />
            <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Get Started</span>
            <span className="h-px w-12 bg-[#C9963B]/50" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight mb-6">Ready to upgrade your flooring?</motion.h2>
          <motion.p variants={fadeUp} className="mb-12 text-slate-400 max-w-xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Let&apos;s build something extraordinary together.</motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-8 py-3.5 text-xs uppercase tracking-widest transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get a Free Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
