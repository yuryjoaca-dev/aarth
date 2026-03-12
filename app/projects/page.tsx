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

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stats = [
  { v: "120+", l: "Kitchens Completed" },
  { v: "90+", l: "Bathrooms Renovated" },
  { v: "150+", l: "Flooring Projects" },
  { v: "70+", l: "Basements Finished" },
];

export default function ProjectsPage() {
  return (
    <>
      {/* ─── Split Hero ─── */}
      <section className="relative pt-16">
        {/* Desktop split */}
        <div className="hidden md:flex h-[85vh]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeLeft}
            className="relative w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80')",
              clipPath: "polygon(0 0, 100% 0, 82% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
            <div className="relative z-10 flex flex-col items-start justify-center h-full px-12 text-white">
              <p className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest mb-3">Transformations</p>
              <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                Before & After<br />Transformations
              </h1>
              <Link
                href="/transformations"
                className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-7 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Transformations <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeRight}
            className="relative w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80')",
              clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-black/60 to-black/40" />
            <div className="relative z-10 flex flex-col items-end justify-center h-full px-12 text-white text-right">
              <p className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest mb-3">Commercial</p>
              <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                Commercial<br />Projects
              </h1>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-7 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col md:hidden">
          <div className="relative h-[60vh]">
            <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="Before & After" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-3xl font-black mb-5 tracking-tight">Before & After</h1>
              <Link href="/transformations" className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-6 py-3 rounded-xl shadow-lg transition">
                Explore Transformations
              </Link>
            </div>
          </div>
          <div className="relative h-[60vh]">
            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Commercial" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-3xl font-black mb-5 tracking-tight">Commercial Projects</h1>
              <Link href="/services" className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-6 py-3 rounded-xl shadow-lg transition">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
        <section className="max-w-4xl mx-auto text-center py-20 px-6">
          <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-3">Our Work</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-black tracking-tight text-slate-900 mb-6">Building More Than Spaces</motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed">
            At Aarth Construction, we believe every transformation tells a story.
            Kitchens that bring families together, bathrooms that redefine
            relaxation, basements turned into entertainment hubs, and floors that
            welcome every step. Explore how we elevate spaces with precision and
            passion.
          </motion.p>
        </section>
      </motion.div>

      {/* ─── 4-Category Grid ─── */}
      <motion.section
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {[
          { title: "Kitchens", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", link: "/residential/kitchens" },
          { title: "Basements", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", link: "/residential/basements" },
          { title: "Flooring", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", link: "/residential/flooring" },
          { title: "Bathrooms", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80", link: "/residential/bathrooms" },
        ].map((item) => (
          <motion.div key={item.title} variants={fadeUp} className="relative h-[300px] lg:h-[80vh] overflow-hidden group">
            <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-all duration-300" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <h3 className="text-3xl font-black mb-6 tracking-tight">{item.title}</h3>
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-6 py-3 rounded-xl shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
              >
                Explore {item.title}
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* ─── Stats ─── */}
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

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-br from-[#0f2557] via-[#1a3a7a] to-[#091a3e] text-white py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f5a623]/8 rounded-full blur-3xl pointer-events-none" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.12)}
          className="relative max-w-3xl mx-auto text-center">
          <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-3">Get Started</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-black tracking-tight mb-4">Ready to start your project?</motion.h2>
          <motion.p variants={fadeUp} className="mb-10 text-lg text-slate-300 max-w-xl mx-auto">Let&apos;s build something extraordinary together.</motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-8 py-4 rounded-xl text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
