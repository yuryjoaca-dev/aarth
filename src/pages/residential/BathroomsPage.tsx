import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";
import Lightbox from "../../components/Lightbox";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
});

const gallery = [
  "/Bathrooms/b1.jpg",
  "/Bathrooms/b2.jpg",
  "/Bathrooms/b3.jpg",
  "/Bathrooms/b4.jpg",
  "/Bathrooms/b5.jpg",
  "/Bathrooms/b6.jpg",
];
const stats = [
  { v: "120+", l: "Kitchens Completed" },
  { v: "90+", l: "Bathrooms Renovated" },
  { v: "150+", l: "Flooring Projects" },
  { v: "70+", l: "Basements Finished" },
];

export default function BathroomsPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <SEO title="Bathroom Renovations Edmonton" description="Luxury bathroom renovations in Edmonton. Walk-in showers, freestanding tubs, heated floors. Free quotes." url="/residential/bathrooms" />

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/Bathrooms/bh1.jpg" alt="Bathroom renovation" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/75" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#C9963B]/60" />
              <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>Residential</span>
              <span className="h-px w-12 bg-[#C9963B]/60" />
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-5 tracking-tight leading-none">Bathrooms</motion.h1>
            <motion.p variants={fadeUp} className="text-base text-slate-300/90 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Luxury and comfort redefined.</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
          <div className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>What We Do</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Bathrooms That Redefine Relaxation</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              We specialize in creating luxurious and functional bathrooms that feel like your personal spa. From elegant vanities and walk-in showers to freestanding tubs, every project is designed with comfort and style in mind.
            </motion.p>
          </div>
          <motion.div variants={stagger(0.07)} className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {["Walk-In Showers", "Freestanding Tubs", "Vanity & Storage", "Heated Flooring", "Tile & Stone Work", "Full Plumbing"].map((f) => (
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
            <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-center text-slate-900 mb-12">Bathroom Gallery</motion.h2>
            <motion.div variants={stagger(0.08)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {gallery.map((src, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative aspect-[4/3] overflow-hidden group cursor-zoom-in"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img src={src} alt={`Bathroom ${i + 1}`} className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs uppercase tracking-widest font-medium" style={{ fontFamily: "Inter, sans-serif" }}>View</span>
                  </div>
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
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight mb-6">Ready to transform your bathroom?</motion.h2>
          <motion.p variants={fadeUp} className="mb-12 text-slate-400 max-w-xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Let&apos;s build something extraordinary together.</motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-8 py-3.5 text-xs uppercase tracking-widest transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get a Free Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Lightbox images={gallery} index={lightboxIndex} onChange={setLightboxIndex} />
    </>
  );
}
