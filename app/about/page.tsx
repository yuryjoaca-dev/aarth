"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
});

const coreValues = [
  {
    icon: Zap,
    title: "Fast & Reliable Service",
    description: "Delivering every project on time with the quality you deserve.",
  },
  {
    icon: ShieldCheck,
    title: "Workmanship Warranty",
    description: "We stand behind our work with warranties for complete peace of mind.",
  },
  {
    icon: Users,
    title: "Transparent Estimates",
    description: "Clear, detailed, and fair pricing with no hidden costs.",
  },
];

const timeline = [
  {
    step: "1",
    title: "Foundation",
    description: "Started with a small dedicated crew and a vision for quality.",
  },
  {
    step: "2",
    title: "Growth",
    description: "Expanded our team, refined processes, and delivered larger projects.",
  },
  {
    step: "3",
    title: "Today",
    description: "A trusted name in construction, with a team driven by excellence.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="About background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#091a3e]/95 via-[#0f2557]/90 to-[#1a3a7a]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)} className="max-w-3xl">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-[#f5a623]/15 border border-[#f5a623]/30 text-[#f5a623] font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse" />
              About Us
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-black text-white mt-4 mb-6 leading-none tracking-tight">
              Building trust, quality, and value across every project.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
          <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-3">Our Story</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-black tracking-tight text-slate-900 mb-6">
            Passion. Precision. Trust.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-5">
            We build with passion, precision, and trust. Our company specializes
            in residential, commercial, and renovation projects, combining modern
            design with high-quality craftsmanship. Every project is guided by
            attention to detail, transparency, and a commitment to exceed
            expectations.
          </motion.p>
          <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-5">
            With a dedicated team and years of experience, we don&apos;t just
            construct buildings — we create lasting spaces where people live,
            work, and grow.
          </motion.p>
          <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-8">
            Our mission is simple: provide transparent estimates, quality
            workmanship, and long-lasting value for every client we serve.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="grid grid-cols-2 gap-4">
          {[
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
            "https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=400&q=80",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80",
          ].map((src, i) => (
            <motion.div key={i} variants={fadeUp} className="relative h-44 rounded-2xl overflow-hidden group shadow-xl shadow-slate-200/60">
              <Image
                src={src}
                alt={`Our work ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── Timeline ─── */}
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
            <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-3">Our Journey</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-black tracking-tight text-white mb-6">Our Team</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
              More than just builders — we are innovators, collaborators, and
              problem-solvers. Our journey reflects a passion for craftsmanship,
              continuous growth, and delivering excellence in every project.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6">
              {timeline.map((item) => (
                <motion.div key={item.step} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#f5a623] rounded-2xl flex items-center justify-center text-[#0f2557] font-black text-xl mx-auto mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Core Values ─── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
            <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-3">What We Stand For</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-black tracking-tight text-slate-900 mb-16">Our Core Values</motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeUp}
                    className="group p-10 bg-white shadow-xl shadow-slate-200/60 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full bg-[#f5a623] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
                    <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#f5a623]" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
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
