import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
})

const neighborhoods = [
  'Glenora', 'Westmount', 'Oliver', 'Garneau', 'Strathcona', 'Windermere',
  'Terwillegar', 'Riverbend', 'Summerside', 'Rutherford', 'Ellerslie', 'Bonnie Doon',
  'King Edward Park', 'Highlands', 'Glenwood', 'Sherwood Park', 'Spruce Grove',
  'St. Albert', 'Leduc', 'Fort Saskatchewan', 'Stony Plain', 'Beaumont', 'Nisku',
  'Devon', 'Morinville',
]

const areaCards = [
  {
    title: 'Edmonton Core',
    description: "We serve all central Edmonton neighbourhoods — from the historic Highlands and Glenora to Oliver and Strathcona. Our team is on the ground in the city every day.",
    areas: ['Glenora', 'Oliver', 'Westmount', 'Strathcona', 'Garneau', 'Highlands', 'Bonnie Doon', 'King Edward Park'],
  },
  {
    title: 'South Edmonton',
    description: "The fastest-growing part of Edmonton — Windermere, Terwillegar, Rutherford, Summerside, and Ellerslie. We've completed dozens of new-build finishing projects here.",
    areas: ['Windermere', 'Terwillegar', 'Riverbend', 'Summerside', 'Rutherford', 'Ellerslie', 'Beaumont', 'Nisku'],
  },
  {
    title: 'Surrounding Communities',
    description: "We regularly travel to surrounding cities and towns for both residential and commercial projects. Full-service renovations available throughout the greater Edmonton region.",
    areas: ['Sherwood Park', 'St. Albert', 'Spruce Grove', 'Stony Plain', 'Leduc', 'Fort Saskatchewan', 'Devon', 'Morinville'],
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      <SEO title="Service Areas — Edmonton & Surrounding Communities" description="Aarth Construction serves Edmonton and all surrounding communities including St. Albert, Sherwood Park, Spruce Grove, Leduc, and more. Get a free quote today." url="/service-areas" />

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
            Edmonton & Beyond.<br /><em className="not-italic text-[#C9963B]">We Come to You.</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            From central Edmonton to the surrounding communities — our certified renovation team serves the entire Greater Edmonton Area.
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
              We serve Edmonton and all major surrounding neighbourhoods and cities.
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
              Don&apos;t see your area? <span className="font-semibold text-slate-900">We travel across Alberta</span> — call us at{' '}
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
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-slate-900 tracking-tight">Based in Edmonton, AB</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="overflow-hidden border border-stone-200">
            <iframe
              title="Aarth Construction Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154017.79174726804!2d-113.7139726!3d53.5460983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00f1e2f0435!2sEdmonton%2C%20AB!5e0!3m2!1sen!2sca!4v1697000000000!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} variants={fadeUp} className="mt-6 text-center">
            <a href="https://www.google.com/maps?q=16307+111+Ave+NW,+Edmonton,+AB+T5M+2S2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#C9963B] transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <MapPin className="w-4 h-4 text-[#C9963B]" />
              16307 111 Ave NW, Edmonton, AB T5M 2S2
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
