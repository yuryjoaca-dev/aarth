"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80" alt="Flooring" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/75" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-[#f5a623]/15 border border-[#f5a623]/30 text-[#f5a623] font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse" />
              Residential
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black mb-5 tracking-tight leading-none">Flooring</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-300 leading-relaxed">Durable, elegant, and crafted to perfection.</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
          <div className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-3">What We Do</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-black tracking-tight text-slate-900 mb-6">Flooring That Lasts</motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Our flooring solutions combine durability with beauty. Whether it&apos;s
              hardwood, laminate, or tile, we deliver precision installation and
              premium quality that enhances every room in your home.
            </motion.p>
          </div>
          <motion.div variants={stagger(0.07)} className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {["Hardwood Flooring", "Laminate & Vinyl", "Ceramic & Porcelain Tile", "Carpet Installation", "Floor Refinishing", "Subfloor Repair"].map((f) => (
              <motion.div key={f} variants={fadeUp} className="flex items-center gap-2.5 text-sm text-slate-700 bg-slate-50 rounded-xl px-4 py-3">
                <CheckCircle2 className="w-4 h-4 text-[#f5a623] flex-shrink-0" />{f}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-slate-900 text-white py-24">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.1)}
          className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div key={s.l} variants={fadeUp}
              className={`text-center py-8 px-4 ${i < stats.length - 1 ? "md:border-r border-white/10" : ""} ${i === 1 ? "border-r border-white/10" : ""}`}
            >
              <h3 className="text-4xl md:text-5xl font-black text-[#f5a623] tracking-tight">{s.v}</h3>
              <p className="mt-2 text-slate-400 text-sm font-medium">{s.l}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
            <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest text-center mb-3">Our Work</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-black tracking-tight text-center text-slate-900 mb-12">Flooring Gallery</motion.h2>
            <motion.div variants={stagger(0.08)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gallery.map((src, i) => (
                <motion.div key={i} variants={fadeUp} className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-xl shadow-slate-200/60">
                  <Image src={src} alt={`Flooring ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0f2557] via-[#1a3a7a] to-[#091a3e] text-white py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f5a623]/8 rounded-full blur-3xl pointer-events-none" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.12)}
          className="relative max-w-3xl mx-auto text-center">
          <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-3">Get Started</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-black tracking-tight mb-4">Ready to upgrade your flooring?</motion.h2>
          <motion.p variants={fadeUp} className="mb-10 text-lg text-slate-300 max-w-xl mx-auto">Let&apos;s build something extraordinary together.</motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
