"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
});

const services = [
  {
    emoji: "🍴",
    title: "Kitchens",
    subtitle: "The heart of your home, reimagined.",
    description:
      "From modern open-concept designs to timeless classics, our kitchens are built to bring families together. High-end finishes, durable materials, and custom cabinetry make every kitchen both beautiful and functional.",
    features: ["Custom Cabinetry", "Open-Concept Designs", "Premium Countertops", "Modern Lighting", "Backsplash & Tile", "Full Installation"],
    link: "/residential/kitchens",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    emoji: "🛁",
    title: "Bathrooms",
    subtitle: "Luxury and comfort redefined.",
    description:
      "We specialize in creating luxurious and functional bathrooms that feel like your personal spa. From elegant vanities and walk-in showers to freestanding tubs, every project is designed with comfort and style in mind.",
    features: ["Walk-In Showers", "Freestanding Tubs", "Vanity & Storage", "Heated Flooring", "Tile & Stone Work", "Full Plumbing"],
    link: "/residential/bathrooms",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
  {
    emoji: "🏠",
    title: "Basements",
    subtitle: "Transforming unused spaces into modern living areas.",
    description:
      "From cozy family rooms to fully equipped suites, we transform basements into functional and stylish living spaces. Waterproofing, lighting, and smart layouts ensure comfort and durability.",
    features: ["Full Basement Finishing", "Home Theatre Rooms", "Guest Suites", "Wet Bars", "Waterproofing", "Egress Windows"],
    link: "/residential/basements",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    emoji: "🪵",
    title: "Flooring",
    subtitle: "Durable, elegant, and crafted to perfection.",
    description:
      "Our flooring solutions combine durability with beauty. Whether it's hardwood, laminate, or tile, we deliver precision installation and premium quality that enhances every room in your home.",
    features: ["Hardwood Flooring", "Laminate & Vinyl", "Ceramic & Porcelain Tile", "Carpet Installation", "Floor Refinishing", "Subfloor Repair"],
    link: "/residential/flooring",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    emoji: "🏢",
    title: "Commercial Projects",
    subtitle: "Smart, efficient, and built for success.",
    description:
      "From offices to retail and healthcare, our commercial projects bring together function, style, and performance. We design and deliver spaces that boost productivity, represent your brand, and ensure long-term value — delivered 24/7.",
    features: ["Office Fit-Outs", "Retail Spaces", "Healthcare Facilities", "Restaurant & Hospitality", "Project Management", "24/7 Service"],
    link: "/projects",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    emoji: "✨",
    title: "New Build & Renovations",
    subtitle: "Turning your vision into reality.",
    description:
      "We specialize in improving homes with renovations that boost functionality, beauty, and value. From kitchens to basements, we turn visions into reality using premium materials and craftsmanship, backed by warranty for peace of mind.",
    features: ["New Home Construction", "Full-Home Renovations", "Additions & Extensions", "Exterior Work", "Workmanship Warranty", "Free Estimates"],
    link: "/contact",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=1920&q=80"
            alt="Services background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#091a3e]/95 via-[#0f2557]/90 to-[#1a3a7a]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-[#f5a623]/15 border border-[#f5a623]/30 text-[#f5a623] font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse" />
              What We Offer
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-black text-white mt-4 mb-6 tracking-tight leading-none">
              Our Services
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive construction solutions tailored to your goals — from
              residential renovations to large-scale commercial builds.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80">
                  <Image src={service.image} alt={service.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-5 left-5 text-3xl bg-white/95 rounded-2xl w-14 h-14 flex items-center justify-center shadow-lg">
                    {service.emoji}
                  </div>
                </div>

                {/* Content */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.08)}>
                  <motion.span variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest">
                    {service.subtitle}
                  </motion.span>
                  <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-black text-slate-900 mt-2 mb-5 tracking-tight">
                    {service.title}
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-8 text-base">{service.description}</motion.p>
                  <motion.ul variants={stagger(0.06)} className="grid grid-cols-2 gap-3 mb-10">
                    {service.features.map((f) => (
                      <motion.li key={f} variants={fadeUp} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#f5a623] flex-shrink-0" />
                        {f}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.div variants={fadeUp}>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
