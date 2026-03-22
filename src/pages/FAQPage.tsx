import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus, ArrowRight, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
})

const faqSections = [
  {
    category: "Pricing & Estimates",
    faqs: [
      { q: "Do you offer free estimates?", a: "Yes, absolutely. We provide free, no-obligation estimates for all residential and commercial projects. Contact us and we'll schedule a time to visit your space and give you a detailed, transparent quote." },
      { q: "How is pricing determined?", a: "Pricing is based on the scope of work, materials selected, labour requirements, and project timeline. We provide detailed line-item estimates so you always know exactly what you're paying for — no hidden fees." },
      { q: "Do you require a deposit?", a: "Yes, we typically require a deposit before starting work. The exact amount depends on project size. We'll outline the payment schedule clearly in your contract before any work begins." },
      { q: "Can I supply my own materials?", a: "In some cases, yes. We're happy to install client-supplied materials, but we cannot warranty materials we haven't supplied. For the best results and full warranty coverage, we recommend using our supplier network." },
      { q: "Do you offer financing or payment plans?", a: "We work with clients on payment schedules tied to project milestones. Speak with our team and we'll find an arrangement that works for your budget." },
    ],
  },
  {
    category: "Our Process",
    faqs: [
      { q: "What is your process from start to finish?", a: "We follow a 4-step process: (1) Free Consultation — we visit your space, listen to your vision, and assess the scope. (2) Design & Quote — we prepare a detailed proposal with materials and timeline. (3) Build — our certified team completes the work with minimal disruption. (4) Handover — we do a walkthrough, fix any punch items, and you enjoy your new space." },
      { q: "Do I need to be home during the renovation?", a: "You don't need to be home for every day of the project, but we do ask that you're available for the initial walkthrough and the final handover inspection. We'll keep you updated via phone or text daily." },
      { q: "How do you handle unexpected issues that come up mid-project?", a: "Construction can occasionally reveal hidden problems (e.g., water damage behind walls). We'll contact you immediately with photos, explain the issue, and present options before proceeding. Any changes are documented with a written change order." },
      { q: "Will you clean up after the work is done?", a: "Yes. We respect your home and clean the job site at the end of every workday. Final cleanup — including disposal of all construction debris — is included in every project." },
    ],
  },
  {
    category: "Timeline & Scheduling",
    faqs: [
      { q: "How long does a typical renovation take?", a: "It depends on the scope. A bathroom renovation typically takes 1–3 weeks. A kitchen renovation 2–5 weeks. A full basement 4–8 weeks. We'll give you a detailed timeline in your quote and keep you updated throughout." },
      { q: "How far in advance do I need to book?", a: "Our schedule fills up, especially in spring and summer. We recommend booking 4–6 weeks in advance for smaller projects and 6–12 weeks for larger renovations to secure your preferred start date." },
      { q: "What happens if the project runs over schedule?", a: "We build realistic timelines and do our best to stick to them. If delays occur (e.g., material back-orders, weather for exterior work), we'll communicate proactively and adjust the schedule with your input." },
      { q: "Do you work weekends?", a: "Our standard hours are Monday–Saturday. For time-sensitive commercial projects, we also offer evening and Sunday availability. Let us know your constraints and we'll work around them." },
    ],
  },
  {
    category: "Warranty & Quality",
    faqs: [
      { q: "Do you offer a warranty on your work?", a: "Yes. We offer a workmanship warranty on all our projects. The warranty period varies by project type — typically 1 year for residential renovations. Manufacturer warranties on materials are passed through to you as well." },
      { q: "What does the warranty cover?", a: "Our workmanship warranty covers defects in installation — things like tiles cracking due to improper installation, cabinetry that doesn't close properly, or flooring that separates. It does not cover normal wear and tear or damage caused by misuse." },
      { q: "Are you licensed and insured?", a: "Yes. Aarth Construction Inc is fully licensed to operate in Alberta, British Columbia, and Saskatchewan, and carries both general liability insurance and WCB (Workers' Compensation Board) coverage. We're happy to provide proof of insurance on request." },
      { q: "Do you use subcontractors?", a: "For specialized trades (electrical, plumbing, HVAC), we work with trusted, licensed subcontractors we have long-standing relationships with. Our team directly oversees all subcontracted work to maintain our quality standards." },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div variants={fadeUp} className="border-b border-stone-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-0 py-5 text-left hover:opacity-80 transition-opacity duration-150"
      >
        <span className="font-medium text-slate-800 text-sm md:text-base pr-4 tracking-tight">{q}</span>
        <span className={`flex-shrink-0 w-7 h-7 border flex items-center justify-center transition-all duration-200 ${open ? 'border-[#C9963B] text-[#C9963B]' : 'border-stone-300 text-slate-400'}`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pb-6 text-slate-500 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQPage() {
  return (
    <>
      <SEO title="FAQ — Pricing, Process & Warranty" description="Answers to the most common questions about Aarth Construction's pricing, renovation process, project timelines, and workmanship warranty." url="/faq" />

      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#111111_0%,_transparent_60%)]" />
        <motion.div initial="hidden" animate="show" variants={stagger(0.12)} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} className="flex items-center gap-4 justify-center mb-8">
            <span className="h-px w-12 bg-[#C9963B]/50" />
            <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>Frequently Asked Questions</span>
            <span className="h-px w-12 bg-[#C9963B]/50" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold text-white mt-2 mb-6 leading-none tracking-tight">
            Got Questions?<br /><em className="not-italic text-[#C9963B]">We Have Answers.</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Everything you need to know about pricing, our process, timelines, and our workmanship warranty.
          </motion.p>
        </motion.div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-16">
            {faqSections.map((section) => (
              <motion.div
                key={section.category}
                initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.06)}
              >
                <motion.div variants={fadeUp} className="mb-8">
                  <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-[0.15em]" style={{ fontFamily: 'Inter, sans-serif' }}>{section.category}</h2>
                  <div className="mt-3 h-px bg-stone-200" />
                </motion.div>
                <div>
                  {section.faqs.map((faq) => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
            className="mt-20 bg-[#111111] p-10 text-center text-white"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-8 bg-[#C9963B]/50" />
              <span className="text-[#C9963B] text-[10px] font-medium uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Still unsure?</span>
              <span className="h-px w-8 bg-[#C9963B]/50" />
            </div>
            <h3 className="text-3xl font-bold tracking-tight mb-3">We&apos;re happy to talk</h3>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Call us or send a message — no pressure, no commitment.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:5875962793" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-medium px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Phone className="w-3.5 h-3.5" /> 587-596-2793
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#C9963B] hover:bg-[#A67A2E] text-white font-medium px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                Send a Message <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
