import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

function StyledGoogleMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d518.2757824976627!2d-113.6048132626903!3d53.558004669510474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0213c395ea7ad%3A0xb846e04aa5c98811!2s16307%20111%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5M%202S2%2C%20Canada!5e1!3m2!1sro!2sro!4v1757786951567!5m2!1sro!2sro"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
})

const neighborhoods = [
  // Alberta
  'Banff', 'Beaumont', 'Calgary', 'Camrose', 'Edmonton', 'Fort Saskatchewan',
  'Grande Prairie', 'Jasper', 'Leduc County', 'Medicine Hat', 'Morinville',
  'Red Deer', 'Stony Plain',
  // British Columbia
  'Vancouver', 'Kamloops', 'Kelowna',
  // Saskatchewan
  'Regina', 'Saskatoon',
]

const areaCards = [
  {
    title: 'Alberta',
    description: "From Edmonton and Calgary to the Rockies and beyond — we serve communities across Alberta with full residential and commercial renovation services.",
    areas: ['Edmonton', 'Calgary', 'Red Deer', 'Grande Prairie', 'Medicine Hat', 'Camrose', 'Fort Saskatchewan', 'Beaumont', 'Morinville', 'Stony Plain', 'Leduc County', 'Banff', 'Jasper'],
  },
  {
    title: 'British Columbia',
    description: "Serving Kamloops and Kelowna with the same quality and craftsmanship our Alberta clients trust. Interior BC is growing fast — we're ready to build with you.",
    areas: ['Vancouver', 'Kamloops', 'Kelowna'],
  },
  {
    title: 'Saskatchewan',
    description: "Delivering top-quality residential and commercial renovations in Regina and Saskatoon. No project is too far for our certified team.",
    areas: ['Regina', 'Saskatoon'],
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      <SEO title="Service Areas — Edmonton, Vancouver & Saskatchewan" description="Aarth Construction serves Alberta, British Columbia, and Saskatchewan — including Edmonton, Vancouver, Regina, and Saskatoon. Get a free quote today." url="/service-areas" />

      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#111111_0%,_transparent_60%)]" />
        <motion.div initial="hidden" animate="show" variants={stagger(0.12)} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} className="flex items-center gap-4 justify-center mb-8">
            <span className="h-px w-12 bg-[#C9963B]/50" />
            <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>Service Areas</span>
            <span className="h-px w-12 bg-[#C9963B]/50" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold text-white mt-2 mb-6 leading-none tracking-tight">
            Alberta. BC. Saskatchewan.<br /><em className="not-italic text-[#C9963B]">We Come to You.</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            From Edmonton and Vancouver to cities across Saskatchewan — our certified renovation team serves clients across three provinces.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get a Free Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a href="tel:5875962793" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white font-medium px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Phone className="w-3.5 h-3.5" /> 587-596-2793
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Neighborhoods chip grid */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.08)} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Where We Work</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">Areas We Serve</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              We serve clients across Alberta, British Columbia, and Saskatchewan.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.04)} className="flex flex-wrap gap-2 justify-center">
            {neighborhoods.map((area) => (
              <motion.span key={area} variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-stone-200 hover:border-[#C9963B]/50 text-slate-700 font-medium text-xs px-4 py-2.5 transition-all duration-200 cursor-default" style={{ fontFamily: 'Inter, sans-serif' }}>
                <MapPin className="w-3 h-3 text-[#C9963B] flex-shrink-0" />
                {area}
              </motion.span>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="mt-10 border border-[#C9963B]/20 bg-[#C9963B]/5 p-6 text-center">
            <p className="text-slate-700 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Don&apos;t see your area? <span className="font-semibold text-slate-900">We travel across Alberta, BC & Saskatchewan</span> — call us at{' '}
              <a href="tel:5875962793" className="font-semibold text-[#111111] hover:text-[#C9963B] transition-colors">587-596-2793</a>{' '}
              to confirm availability for your location.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 area cards */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Coverage</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Our Service Regions</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {areaCards.map((card) => (
              <motion.div key={card.title} variants={fadeUp} className="border border-stone-200 overflow-hidden hover:border-[#C9963B]/30 hover:shadow-sm transition-all duration-300">
                <div className="bg-[#111111] px-8 py-6">
                  <h3 className="text-xl font-semibold text-white tracking-tight">{card.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-slate-500 text-sm leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>{card.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.areas.map((area) => (
                      <span key={area} className="text-[10px] bg-stone-100 text-slate-600 px-3 py-1.5 font-medium uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.1)} className="text-center mb-10">
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Find Us</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-slate-900 tracking-tight">Head Office — Edmonton, AB</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="overflow-hidden border border-stone-200">
            <StyledGoogleMap />
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} variants={fadeUp} className="mt-6 text-center">
            <a href="https://www.google.com/maps/place/Aarth+Construction/@53.5585179,-113.6047629,318m/data=!3m1!1e3!4m6!3m5!1s0x53a021926a1685ef:0x15b6fb3012d8a81a!8m2!3d53.5582498!4d-113.6045098!16s%2Fg%2F11mf5m9mh6?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#C9963B] transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <MapPin className="w-4 h-4 text-[#C9963B]" />
              16307 111 Ave NW, Edmonton, AB — View on Google Maps
            </a>
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
