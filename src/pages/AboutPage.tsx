import { Link } from "react-router-dom";
import { Zap, ShieldCheck, Users, ArrowRight } from "lucide-react";
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
    step: "01",
    title: "Foundation",
    description: "Started with a small dedicated crew and a vision for quality.",
  },
  {
    step: "02",
    title: "Growth",
    description: "Expanded our team, refined processes, and delivered larger projects.",
  },
  {
    step: "03",
    title: "Today",
    description: "A trusted name in construction, with a team driven by excellence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO title="About Us" description="Learn about Aarth Construction Inc — trusted renovation experts serving Alberta, British Columbia, and Saskatchewan. Built on passion, precision, and trust." url="/about" />

      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80"
            alt="About background"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-[#080808]/88" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)} className="max-w-3xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#C9963B]/50" />
              <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>About Us</span>
              <span className="h-px w-12 bg-[#C9963B]/50" />
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold text-white mt-4 mb-6 leading-none tracking-tight">
              Building trust, quality, and value across every project.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <TrustSignals />

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
          <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Our Story</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Passion. Precision. Trust.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 leading-relaxed mb-5 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            We build with passion, precision, and trust. Our company specializes
            in residential, commercial, and renovation projects, combining modern
            design with high-quality craftsmanship. Every project is guided by
            attention to detail, transparency, and a commitment to exceed
            expectations.
          </motion.p>
          <motion.p variants={fadeUp} className="text-slate-500 leading-relaxed mb-5 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            With a dedicated team and years of experience, we don&apos;t just
            construct buildings — we create lasting spaces where people live,
            work, and grow.
          </motion.p>
          <motion.p variants={fadeUp} className="text-slate-500 leading-relaxed mb-8 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our mission is simple: provide transparent estimates, quality
            workmanship, and long-lasting value for every client we serve.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Start Your Project <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="grid grid-cols-2 gap-3">
          {[
            "/About/ab1.jpg",
            "/About/ab2.jpg",
            "/About/ab3.jpg",
            "/About/ab4.jpg",
          ].map((src, i) => (
            <motion.div key={i} variants={fadeUp} className="relative h-44 overflow-hidden group">
              <img
                src={src}
                alt={`Our work ${i + 1}`}
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeline */}
      <div className="bg-[#111111] text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Our Journey</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-white mb-5">Our Team</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              More than just builders — we are innovators, collaborators, and
              problem-solvers. Our journey reflects a passion for craftsmanship,
              continuous growth, and delivering excellence in every project.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6">
              {timeline.map((item) => (
                <motion.div key={item.step} variants={fadeUp} className="bg-white/5 border border-white/10 p-8 hover:bg-white/8 transition-all duration-300">
                  <span className="block text-5xl font-bold text-[#C9963B]/30 leading-none mb-5 tabular-nums">{item.step}</span>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Values */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>What We Stand For</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-slate-900 mb-16">Our Core Values</motion.h2>
            <div className="grid md:grid-cols-3 gap-4">
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeUp}
                    className="bg-white border border-stone-200 p-8 hover:border-[#C9963B]/30 hover:shadow-sm transition-all duration-200 text-left"
                  >
                    <span className="block w-6 h-px bg-[#C9963B] mb-6" />
                    <Icon className="w-5 h-5 text-[#C9963B] mb-5" />
                    <h3 className="font-semibold text-base text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808] text-white py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#111111_0%,_transparent_70%)]" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.12)}
          className="relative max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#C9963B]/50" />
            <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Get Started</span>
            <span className="h-px w-12 bg-[#C9963B]/50" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to start your project?</motion.h2>
          <motion.p variants={fadeUp} className="mb-12 text-slate-400 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Let&apos;s build something extraordinary together.</motion.p>
          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-8 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get a Free Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
