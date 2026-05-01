import { Link } from "react-router-dom";
import { CheckCircle, Zap, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import TrustSignals from "../components/TrustSignals";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = (delayChildren = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren: delayChildren, delayChildren: 0.05 } },
});

const whyUs = [
  {
    icon: Zap,
    title: "We Show Up on Time",
    description: "Deadlines matter to us as much as they matter to you. We keep your project moving and let you know if anything changes.",
  },
  {
    icon: CheckCircle,
    title: "No Hidden Costs",
    description: "You get a clear, itemized estimate before we start. What we quote is what you pay — no line items appearing out of nowhere.",
  },
  {
    icon: Shield,
    title: "Work We Stand Behind",
    description: "We back everything we build with a workmanship warranty. If something isn't right, we come back and fix it.",
  },
];

const services = [
  { title: "Kitchens", desc: "Kitchens built for real life — great workflow, lasting materials, and a look you'll love for years.", link: "/residential/kitchens", image: "/homepage/kitchen.webp", tall: true, wide: true },
  { title: "Bathrooms", desc: "From a clean refresh to a full gut reno — bathrooms that feel great to start and end your day in.", link: "/residential/bathrooms", image: "/homepage/bathroom.webp", tall: false, wide: false },
  { title: "Basements", desc: "Turn that unused square footage into a space the whole family actually uses.", link: "/residential/basements", image: "/homepage/basement.webp", tall: false, wide: false },
  { title: "Flooring", desc: "Hardwood, tile, vinyl — installed right so it stays looking good for decades.", link: "/residential/flooring", image: "/homepage/flooring.webp", tall: false, wide: false },
  { title: "Commercial", desc: "Offices, clinics, and retail spaces built on schedule and ready for business.", link: "/projects", image: "/homepage/commercial.jpg", tall: false, wide: true },
];

const testimonials = [
  { text: "They renovated our home beautifully and finished earlier than expected. Professional and reliable throughout the entire project.", name: "Maria S.", role: "Homeowner, Edmonton" },
  { text: "Excellent service and attention to detail. Our office looks amazing thanks to Aarth Construction. The team was exceptional.", name: "James R.", role: "Business Owner" },
  { text: "The team was communicative and transparent throughout our kitchen renovation. Every detail was handled with care.", name: "Elena P.", role: "Homeowner, St. Albert" },
  { text: "We trusted them with our commercial build, and they exceeded expectations. Delivered on time and within budget.", name: "Michael D.", role: "Project Manager" },
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
      <SEO title="Trusted Construction Company | Edmonton, Vancouver & Saskatchewan" description="Aarth Construction Inc offers expert kitchen, bathroom, basement, and flooring renovations across Alberta, British Columbia, and Saskatchewan. Get your free quote today." url="/" />

      {/* ── HERO ── */}
      <section className="relative min-h-screen overflow-hidden flex items-end lg:items-center bg-black">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover absolute inset-0" style={{ pointerEvents: 'none' }}>
            <source src="/hero/heronew.mp4" type="video/mp4" />
          </video>
          {/* Directional overlay — dark on left, fades right: editorial / cinematic */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.14)}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 pt-40 lg:py-0"
        >
          {/* Left-aligned editorial layout */}
          <div className="max-w-3xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-12">
              <span className="h-px w-12 bg-[#C9963B]/60" />
              <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>Alberta · BC · Saskatchewan</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-[clamp(3.5rem,8vw,7.5rem)] font-bold text-white leading-[0.88] mb-10">
              Built for<br />
              <em className="not-italic text-[#C9963B]">the</em><br />
              Exceptional.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-300/80 text-base max-w-lg leading-relaxed mb-12 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              We renovate kitchens, bathrooms, basements, and more — across Alberta, BC, and Saskatchewan.
              Honest pricing, real timelines, and work you'll be proud to show off.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-8 py-3.5 text-xs uppercase tracking-widest transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get a Free Quote <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/projects" className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white font-medium px-8 py-3.5 text-xs uppercase tracking-widest transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                View Our Work
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator — repositioned to bottom right for asymmetric balance */}
        <div className="absolute bottom-8 right-8 lg:right-16 z-10 flex flex-col items-center gap-2">
          <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
          />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#111111]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.1)} className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 text-center">
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="py-14 px-6">
              <h3 className="text-4xl md:text-5xl font-bold text-[#C9963B]">{s.value}</h3>
              <p className="mt-2 text-slate-400 text-xs uppercase tracking-widest font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <TrustSignals />

      {/* ── WHY CHOOSE US — architectural numbered columns ── */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="mb-16">
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Our Promise</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Why Choose Aarth</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.1)} className="grid md:grid-cols-3 border border-stone-200 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp} className="p-10 lg:p-12">
                  <span className="block text-[#C9963B]/25 text-5xl font-bold tabular-nums leading-none mb-7 select-none">0{i + 1}</span>
                  <span className="block w-8 h-px bg-[#C9963B]/50 mb-7" />
                  <Icon className="w-4 h-4 text-[#C9963B] mb-5" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── RESIDENTIAL vs COMMERCIAL ── */}
      <section className="bg-[#111111] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="mb-16">
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>What We Build</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-white">Built for Every Vision</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.15)} className="grid md:grid-cols-2 gap-4">
            {[
              { src: "/homepage/noua renovations.webp", alt: "Residential", title: "Residential Renovations", desc: "Kitchens, bathrooms, basements, and more — done right, the first time.", href: "/projects", cta: "See Our Work" },
              { src: "/homepage/commercial.jpg", alt: "Commercial", title: "Commercial Projects", desc: "Offices, retail, clinics — spaces that work hard and look professional.", href: "/contact", cta: "Talk to Us" },
            ].map((card) => (
              <motion.div key={card.title} variants={fadeUp} className="relative overflow-hidden group h-96">
                <img src={card.src} alt={card.alt} loading="lazy" className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5 group-hover:from-black/90 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-slate-300/80 text-sm mb-6 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{card.desc}</p>
                  <Link to={card.href} className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white px-5 py-2.5 text-xs uppercase tracking-widest font-medium transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {card.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES BENTO GRID ── */}
      <section className="bg-stone-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="mb-16">
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>What We Offer</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Explore Our Services</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.08)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[240px]">
            {services.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className={`relative overflow-hidden group ${item.wide && item.tall ? "lg:col-span-2 lg:row-span-2" : item.wide ? "lg:col-span-2" : ""}`}>
                <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300/80 text-sm leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-400 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
                  <Link to={item.link} className="inline-flex items-center gap-1.5 text-[#C9963B] font-medium text-xs uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS — editorial pull-quote style ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="mb-16">
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Client Reviews</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">What Our Clients Say</motion.h2>
          </motion.div>

          {/* 1px gap grid creates architectural dividers */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.1)} className="grid md:grid-cols-2 gap-px bg-stone-200">
            {testimonials.map((review) => (
              <motion.div key={review.name} variants={fadeUp} className="bg-white p-10 lg:p-12">
                {/* Large decorative quotation mark in Cormorant */}
                <p className="text-[5rem] leading-none text-[#C9963B]/20 font-bold select-none -mt-3 mb-3" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>"</p>
                <p className="text-slate-700 text-lg leading-relaxed mb-8 font-light italic" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
                  {review.text}
                </p>
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-[#C9963B]/50 flex-shrink-0" />
                  <div>
                    <p className="text-slate-900 font-medium text-xs uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>{review.name}</p>
                    <p className="text-slate-400 text-xs mt-0.5 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#080808] text-white py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#111111_0%,_transparent_70%)]" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.12)} className="relative max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#C9963B]/50" />
            <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Get Started Today</span>
            <span className="h-px w-12 bg-[#C9963B]/50" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ready to start your project?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 mb-12 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tell us what you have in mind — we&apos;ll get back to you quickly with a free, no-obligation quote.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-10 py-4 text-xs uppercase tracking-widest transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get a Free Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
