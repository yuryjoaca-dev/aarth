"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
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

export default function TransformationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="Before & After Transformations"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-[#f5a623]/15 border border-[#f5a623]/30 text-[#f5a623] font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse" />
              Before & After
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black mb-5 tracking-tight leading-none">Transformations</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-300 leading-relaxed">See how we transform every project from outdated to outstanding.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-3">Our Results</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-black tracking-tight text-slate-900 mb-6">Witness Stunning Transformations</motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed">
            At Aarth Construction, we believe that every renovation tells a story.
            From small upgrades to complete remodels, our before and after
            transformations showcase the power of quality craftsmanship and
            creative design. Discover how we bring new life to every space.
          </motion.p>
        </section>
      </motion.div>

      {/* Transformations Grid */}
      <section className="pb-24 bg-slate-50">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="max-w-6xl mx-auto px-6">
          <div className="space-y-10">
            {transformations.map((t) => (
              <motion.div key={t.id} variants={fadeUp} className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    <div className="relative aspect-video md:aspect-[4/3]">
                      <Image src={t.before} alt={`Before - ${t.title}`} fill className="object-cover" />
                    </div>
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
                      BEFORE
                    </div>
                  </div>
                  {/* After */}
                  <div className="relative">
                    <div className="relative aspect-video md:aspect-[4/3]">
                      <Image src={t.after} alt={`After - ${t.title}`} fill className="object-cover" />
                    </div>
                    <div className="absolute top-4 left-4 bg-[#f5a623] text-[#0f2557] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider">
                      AFTER
                    </div>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <span className="text-[#f5a623] text-xs font-black uppercase tracking-widest">{t.category}</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-2 tracking-tight">{t.title}</h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">{t.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0f2557] via-[#1a3a7a] to-[#091a3e] text-white py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f5a623]/8 rounded-full blur-3xl pointer-events-none" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.12)}
          className="relative max-w-3xl mx-auto text-center">
          <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-3">Get Started</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-black tracking-tight mb-4">Ready to start your project?</motion.h2>
          <motion.p variants={fadeUp} className="mb-10 text-lg text-slate-300 max-w-xl mx-auto">Let&apos;s build something extraordinary together.</motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
