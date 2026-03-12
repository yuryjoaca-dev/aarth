"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Zap, Shield, ArrowRight, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

/* ─── Reusable fade-up variant ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = (delayChildren = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delayChildren, delayChildren: 0.05 } },
});

/* ─── Data ─── */
const whyUs = [
  {
    icon: Zap,
    title: "Fast & Reliable",
    description:
      "High-quality construction delivered with unmatched speed and precision — your project completed on time, every time.",
  },
  {
    icon: CheckCircle,
    title: "Full Transparency",
    description:
      "Honest communication, accurate estimates, and real-time updates. No hidden costs, no surprises — ever.",
  },
  {
    icon: Shield,
    title: "Guaranteed Craftsmanship",
    description:
      "Premium builds backed by a workmanship warranty. Every joint, finish, and detail receives our full attention.",
  },
];

const services = [
  {
    title: "Kitchens",
    desc: "Modern designs with premium finishes to elevate your cooking and dining space.",
    link: "/residential/kitchens",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tall: true,
    wide: true,
  },
  {
    title: "Bathrooms",
    desc: "Luxury bathrooms with spa-like features for ultimate comfort.",
    link: "/residential/bathrooms",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    tall: false,
    wide: false,
  },
  {
    title: "Basements",
    desc: "Transform your basement into a functional lounge, gym, or entertainment hub.",
    link: "/residential/basements",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    tall: false,
    wide: false,
  },
  {
    title: "Flooring",
    desc: "Durable and stylish flooring solutions for every room in your home.",
    link: "/residential/flooring",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    tall: false,
    wide: false,
  },
  {
    title: "Commercial",
    desc: "Efficient, professional projects for retail, offices, and healthcare.",
    link: "/projects",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tall: false,
    wide: true,
  },
];

const testimonials = [
  {
    text: "They renovated our home beautifully and finished earlier than expected. Professional and reliable!",
    name: "Maria S.",
    role: "Homeowner",
  },
  {
    text: "Excellent service and attention to detail. Our office looks amazing thanks to Aarth Construction!",
    name: "James R.",
    role: "Business Owner",
  },
  {
    text: "The team was communicative and transparent throughout our kitchen renovation. Highly recommend!",
    name: "Elena P.",
    role: "Homeowner",
  },
  {
    text: "We trusted them with our commercial build, and they exceeded expectations. Delivered on time and within budget.",
    name: "Michael D.",
    role: "Project Manager",
  },
];

const stats = [
  { value: "400+", label: "Projects Completed" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Construction site"
            fill
            className="object-cover"
            priority
          />
          {/* Multi-stop gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/85" />
        </div>

        {/* Hero content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.12)}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-[#f5a623]/15 border border-[#f5a623]/30 text-[#f5a623] font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse" />
            Edmonton, Alberta
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none text-white mb-6"
          >
            Building
            <br />
            <span className="text-[#f5a623]">Excellence</span>
            <br />
            <span className="text-white/90 text-4xl sm:text-5xl md:text-6xl font-bold">Since Day One</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Delivering quality construction with integrity and care across Alberta and beyond.
            Residential renovations, commercial builds, and everything in between.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              View Our Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 backdrop-blur-sm hover:-translate-y-1 inline-flex items-center justify-center"
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-white/40 text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS STRIP
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#0f2557] relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1a3a7a_0%,_transparent_60%)]" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger(0.1)}
          className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className={`text-center py-8 px-4 ${i < stats.length - 1 ? "md:border-r border-white/10" : ""} ${i === 1 ? "border-r border-white/10 md:border-r" : ""}`}
            >
              <h3 className="text-4xl md:text-5xl font-black text-[#f5a623] tracking-tight">{s.value}</h3>
              <p className="mt-2 text-slate-400 text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger(0.1)}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-3">
              Our Promise
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Why Choose{" "}
              <span className="text-[#0f2557]">Aarth</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger(0.12)}
            className="grid md:grid-cols-3 gap-6"
          >
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group bg-white p-10 rounded-3xl shadow-lg shadow-slate-200/70 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover accent bar */}
                  <div className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full bg-[#f5a623] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
                  <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-7 group-hover:bg-[#f5a623]/15 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#f5a623]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          RESIDENTIAL vs COMMERCIAL SPLIT
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#0f2557] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger(0.1)}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-3">
              What We Build
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Built for Every Vision
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger(0.15)}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
                alt: "Residential",
                title: "New Build & Renovations",
                desc: "Premium residential renovations — kitchens, bathrooms, basements and more.",
                href: "/projects",
                cta: "Residential",
              },
              {
                src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
                alt: "Commercial",
                title: "Commercial Projects",
                desc: "Offices, retail, healthcare — functional spaces that represent your brand.",
                href: "/contact",
                cta: "Contact Us",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="relative rounded-3xl overflow-hidden group h-96"
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-black text-white mb-2">{card.title}</h3>
                  <p className="text-slate-300 text-sm mb-5 leading-relaxed">{card.desc}</p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {card.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SERVICES BENTO GRID
      ═══════════════════════════════════════════════ */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger(0.1)}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-3">
              What We Offer
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Explore Our <span className="text-[#0f2557]">Services</span>
            </motion.h2>
          </motion.div>

          {/* Bento: 3-col grid, Kitchens spans 2 cols + 2 rows, Commercial spans 2 cols */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger(0.08)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px]"
          >
            {services.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`relative rounded-3xl overflow-hidden group ${
                  item.wide && item.tall
                    ? "lg:col-span-2 lg:row-span-2"
                    : item.wide
                    ? "lg:col-span-2"
                    : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-400" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-black text-white mb-2 drop-shadow">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-400">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-[#f5a623] font-bold text-sm group/link"
                  >
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger(0.1)}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-3">
              Client Reviews
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              What Our <span className="text-[#0f2557]">Clients</span> Say
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger(0.1)}
            className="grid md:grid-cols-2 gap-6"
          >
            {testimonials.map((review) => (
              <motion.div
                key={review.name}
                variants={fadeUp}
                className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
              >
                {/* Decorative quote mark */}
                <Quote className="absolute top-6 right-7 w-8 h-8 text-slate-100 fill-slate-100" />

                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed mb-6 text-base relative z-10">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0f2557] to-[#1a3a7a] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                    <p className="text-slate-400 text-xs">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-[#0f2557] via-[#1a3a7a] to-[#091a3e] text-white py-28 px-6 relative overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f5a623]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger(0.12)}
          className="relative max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest mb-4">
            Get Started Today
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight mb-5">
            Ready to start your project?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-slate-300 mb-10 leading-relaxed">
            Let&apos;s build something extraordinary together. Contact us for a free, no-obligation quote.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-10 py-4 rounded-xl text-base shadow-2xl hover:shadow-[#f5a623]/30 hover:-translate-y-1 transition-all duration-200"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
