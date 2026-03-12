import { Link } from 'react-router-dom'
import { ArrowRight, Home, Mail } from 'lucide-react'
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

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist or has been moved." url="/404" />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#111111_0%,_transparent_65%)]" />

        <motion.div initial="hidden" animate="show" variants={stagger(0.12)} className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} className="mb-2">
            <span className="text-[140px] md:text-[180px] font-bold leading-none text-[#C9963B]/30 block select-none tabular-nums">
              404
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-6 -mt-6">
            <span className="h-px w-12 bg-[#C9963B]/50" />
            <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>Page Not Found</span>
            <span className="h-px w-12 bg-[#C9963B]/50" />
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Nothing here.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-slate-400 text-base leading-relaxed mb-12 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="inline-flex items-center justify-center gap-2 bg-[#C9963B] hover:bg-[#A67A2E] text-white font-medium px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Home className="w-3.5 h-3.5" />
              Go Home
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-medium px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Mail className="w-3.5 h-3.5" />
              Contact Us
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp} className="mt-16 pt-10 border-t border-white/10">
            <p className="text-slate-500 text-xs mb-6 uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>Or jump to a page</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { to: '/services', label: 'Services' },
                { to: '/projects', label: 'Projects' },
                { to: '/residential/kitchens', label: 'Kitchens' },
                { to: '/residential/bathrooms', label: 'Bathrooms' },
                { to: '/faq', label: 'FAQ' },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-xs text-slate-400 hover:text-[#C9963B] bg-white/5 hover:bg-white/8 px-4 py-2 border border-white/8 hover:border-[#C9963B]/30 transition-all duration-150 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
