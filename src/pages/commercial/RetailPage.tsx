import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import SEO from '../../components/SEO'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
})

const features = [
  { title: 'Storefront Build-Outs', desc: 'Complete storefront construction including façade, glazing, and entryway design.' },
  { title: 'Display Fixtures', desc: 'Custom millwork, shelving, and display systems tailored to your merchandise.' },
  { title: 'Lighting Design', desc: 'Strategic lighting that highlights products and creates the right ambiance.' },
  { title: 'Flooring', desc: 'Durable, attractive flooring solutions suited to high-traffic retail environments.' },
  { title: 'Change Rooms', desc: 'Well-designed fitting rooms that elevate the customer experience.' },
  { title: 'Accessible Design', desc: 'AODA-compliant layouts ensuring your space is welcoming to all customers.' },
]
const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '10+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '1yr', label: 'Workmanship Warranty' },
]
const gallery = [
  { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', alt: 'Retail store interior' },
  { src: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80', alt: 'Boutique storefront' },
  { src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80', alt: 'Retail display fixtures' },
  { src: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80', alt: 'Modern retail space' },
]

export default function RetailPage() {
  return (
    <>
      <SEO title="Retail & Storefront Construction Edmonton" description="Retail and storefront construction in Edmonton. Display fixtures, lighting design, flooring, change rooms and accessible design. Free quotes." url="/commercial/retail" />

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80" alt="Retail space construction" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-black/80" />
        </div>
        <motion.div initial="hidden" animate="show" variants={stagger(0.12)} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#C9963B]/60" />
            <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>Commercial Construction</span>
            <span className="h-px w-12 bg-[#C9963B]/60" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold text-white mt-2 mb-6 leading-none tracking-tight">
            Retail<br /><em className="not-italic text-[#C9963B]">Spaces</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/75 text-base max-w-2xl mx-auto leading-relaxed mb-10 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Build a retail environment that stops customers in their tracks. We create retail spaces that drive sales and reflect your brand.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-8 py-3.5 text-xs uppercase tracking-widest transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get a Free Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Description */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>What We Do</motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">Retail spaces that convert</motion.h2>
              <motion.p variants={fadeUp} className="text-slate-500 text-sm leading-relaxed mb-4 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                From boutiques to large-format retail, we understand that your store is your brand's physical expression. We build retail spaces that are visually compelling, functionally optimized, and built to last.
              </motion.p>
              <motion.p variants={fadeUp} className="text-slate-500 text-sm leading-relaxed mb-8 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                We coordinate all trades, manage procurement, and complete the project on schedule so you can open your doors on time. Minimal disruption, maximum impact.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#1c1c1c] text-white font-medium px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Start Your Project <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>
            <motion.div variants={fadeUp} className="relative overflow-hidden aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80" alt="Retail store" className="w-full h-full object-cover absolute inset-0" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Our Expertise</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">What&apos;s included</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.08)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp} className="bg-white border border-stone-200 p-7 hover:border-[#C9963B]/30 hover:shadow-sm transition-all duration-200">
                <CheckCircle2 className="w-5 h-5 text-[#C9963B] mb-4" />
                <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#111111]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.1)} className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 text-center">
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="py-14 px-6">
                <div className="text-4xl lg:text-5xl font-bold text-[#C9963B] mb-2">{s.value}</div>
                <div className="text-slate-400 text-xs uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Our Work</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-slate-900 tracking-tight">Retail Projects</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.08)} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {gallery.map((img) => (
              <motion.div key={img.src} variants={fadeUp} className="relative aspect-square overflow-hidden group">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808] text-white py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#111111_0%,_transparent_70%)]" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.12)} className="relative max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#C9963B]/50" />
            <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Get Started</span>
            <span className="h-px w-12 bg-[#C9963B]/50" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to start your project?</motion.h2>
          <motion.p variants={fadeUp} className="mb-12 text-slate-400 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Let&apos;s build something extraordinary together.</motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-8 py-3.5 text-xs uppercase tracking-widest transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get a Free Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
