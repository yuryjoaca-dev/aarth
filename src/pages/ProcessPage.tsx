import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, FileText, HardHat, CheckCircle } from 'lucide-react'
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

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    subtitle: 'We listen first',
    icon: MessageSquare,
    description: "We visit your space, listen to your goals, and assess what's possible. There's no obligation and no cost. We'll take measurements, discuss your budget, and answer every question.",
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
    imageAlt: 'Consultation meeting',
    highlights: ['Free site visit', 'No obligation', 'Budget discussion', 'All questions answered'],
  },
  {
    number: '02',
    title: 'Design & Quote',
    subtitle: 'Complete transparency',
    icon: FileText,
    description: "Within 3–5 business days, you'll receive a detailed written quote. We walk you through every line item: materials, labour, timeline. No guessing, no surprises.",
    image: '/how we work/design.jpg',
    imageAlt: 'Design and planning',
    highlights: ['Detailed line-item quote', 'Material selections', 'Project timeline', 'Written agreement'],
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Expert execution',
    icon: HardHat,
    description: "Our certified team gets to work. We protect your home, keep the site clean daily, and update you every step of the way. We handle all trades coordination — you just sit back.",
    image: '/how we work/build.jpg',
    imageAlt: 'Construction in progress',
    highlights: ['Daily site cleanup', 'Regular progress updates', 'All trades coordinated', 'Home protection'],
  },
  {
    number: '04',
    title: 'Handover',
    subtitle: 'Your new space, guaranteed',
    icon: CheckCircle,
    description: "We do a final walkthrough together, address any punch items on the spot, and hand you the keys to your transformed space. Your warranty starts on day one.",
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80',
    imageAlt: 'Project handover',
    highlights: ['Final walkthrough', 'Punch list resolved', 'Warranty activated', 'Project documentation'],
  },
]

const whyUs = [
  { title: 'No hidden costs', desc: 'Our quotes are detailed and fixed. What we quote is what you pay.' },
  { title: 'Licensed & insured', desc: 'Fully licensed in Alberta, British Columbia, and Saskatchewan with comprehensive liability insurance and WCB coverage.' },
  { title: 'One point of contact', desc: 'You deal with us — we coordinate all trades, suppliers, and inspections.' },
  { title: 'Clean job sites', desc: 'We clean up every single day. Your home stays livable throughout the project.' },
  { title: 'On-time delivery', desc: 'We build realistic schedules and stick to them. No endless delays.' },
  { title: 'Workmanship warranty', desc: '1-year warranty on all labour. We stand behind everything we build.' },
]

export default function ProcessPage() {
  return (
    <>
      <SEO title="How We Work" description="Learn about Aarth Construction's proven 4-step renovation process: Free Consultation, Design & Quote, Build, and Handover." url="/process" />

      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#111111_0%,_transparent_60%)]" />
        <motion.div initial="hidden" animate="show" variants={stagger(0.12)} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} className="flex items-center gap-4 justify-center mb-8">
            <span className="h-px w-12 bg-[#C9963B]/50" />
            <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>How We Work</span>
            <span className="h-px w-12 bg-[#C9963B]/50" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold text-white mt-2 mb-6 leading-none tracking-tight">
            Simple Process.<br /><em className="not-italic text-[#C9963B]">Exceptional Results.</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            From your first call to final walkthrough — a clear, proven 4-step process designed around you.
          </motion.p>
        </motion.div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-28">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 1
              return (
                <motion.div
                  key={step.number}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={stagger(0.1)}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Text side */}
                  <div className={isEven ? 'lg:col-start-2' : ''}>
                    <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-6">
                      <span className="text-7xl font-bold text-[#C9963B]/20 leading-none select-none tabular-nums">{step.number}</span>
                      <Icon className="w-5 h-5 text-[#C9963B] flex-shrink-0 mb-1" />
                    </motion.div>
                    <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{step.subtitle}</motion.p>
                    <motion.h2 variants={fadeUp} className="text-4xl font-bold text-slate-900 tracking-tight mb-5">{step.title}</motion.h2>
                    <motion.p variants={fadeUp} className="text-slate-500 text-sm leading-relaxed mb-8 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{step.description}</motion.p>
                    <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
                      {step.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2.5 text-xs text-slate-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9963B] flex-shrink-0" />
                          {h}
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Image side */}
                  <motion.div variants={fadeUp} className={`relative ${isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img src={step.image} alt={step.imageAlt} loading="lazy" className="w-full h-full object-cover absolute inset-0" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/20 to-transparent" />
                      {/* Step overlay */}
                      <div className="absolute top-6 left-6 bg-[#C9963B] px-3 py-1.5">
                        <span className="text-white font-semibold text-xs tracking-[0.15em]" style={{ fontFamily: 'Inter, sans-serif' }}>{step.number}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Why Choose Aarth</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">Built on trust, delivered with care</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Every aspect of our process is designed to give you confidence and peace of mind.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.08)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-white border border-stone-200 p-7 hover:border-[#C9963B]/30 hover:shadow-sm transition-all duration-200">
                <span className="block w-6 h-px bg-[#C9963B] mb-5" />
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
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
