import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { blogPosts } from '../data/blogPosts'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
})

const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0]
const rest = blogPosts.filter((p) => p.slug !== featured.slug)

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog — Renovation Insights & Advice"
        description="Expert renovation advice, project guides, and construction insights from Aarth Construction — Edmonton's trusted renovation team."
        url="/blog"
      />

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-[#080808]">
        {/* Decorative large number in background */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 font-bold leading-none select-none pointer-events-none text-white/[0.025] overflow-hidden"
          style={{ fontSize: 'clamp(180px, 30vw, 360px)', fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          aria-hidden="true"
        >
          {String(blogPosts.length).padStart(2, '0')}
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.12)}
          className="relative z-10 max-w-7xl mx-auto px-6"
        >
          <div className="max-w-3xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <span className="h-px w-12 bg-[#C9963B]/50" />
              <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Insights & Advice
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-6xl lg:text-8xl font-bold text-white leading-none mb-8">
              The Aarth<br />Blog.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-400 text-base max-w-xl leading-relaxed font-light mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
              Practical renovation guides, project planning advice, and construction insights — written by the team that builds it every day.
            </motion.p>

            {/* Article count chip */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-4 border border-white/10 px-6 py-3">
              <span className="text-[#C9963B] font-bold text-2xl tabular-nums" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
                {String(blogPosts.length).padStart(2, '0')}
              </span>
              <span className="w-px h-5 bg-white/10" />
              <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Articles Published</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── FEATURED POST — full-bleed magazine cover ── */}
      <section className="bg-black">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <Link to={`/blog/${featured.slug}`} className="group relative flex items-end overflow-hidden" style={{ height: 'clamp(480px, 70vh, 720px)' }}>
            {/* Image */}
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />

            {/* FEATURED badge top-left */}
            <div className="absolute top-8 left-8 z-10">
              <span className="bg-[#C9963B] text-white text-[10px] font-medium px-3 py-1.5 uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Featured Article
              </span>
            </div>

            {/* Bottom content */}
            <div className="relative z-10 w-full px-8 pb-12 lg:px-16 lg:pb-16 max-w-5xl">
              {/* Meta row */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[#C9963B] text-xs font-medium uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>{featured.category}</span>
                <span className="w-px h-3 bg-white/25" />
                <span className="text-white/50 text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{featured.date}</span>
                <span className="w-px h-3 bg-white/25" />
                <span className="flex items-center gap-1.5 text-white/50 text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Clock className="w-3 h-3" />
                  {featured.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-5 max-w-4xl">
                {featured.title}
              </h2>

              {/* Excerpt */}
              <p className="text-slate-300/70 text-sm md:text-base leading-relaxed mb-7 max-w-2xl font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                {featured.excerpt}
              </p>

              {/* CTA */}
              <span className="inline-flex items-center gap-2.5 text-[#C9963B] text-xs font-medium uppercase tracking-widest group-hover:gap-4 transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* ── ARTICLE GRID ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger(0.1)}
            className="flex items-end justify-between mb-14 pb-6 border-b border-stone-100"
          >
            <div>
              <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                All Articles
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-slate-900 tracking-tight">
                More from the Blog
              </motion.h2>
            </div>
            <motion.span variants={fadeUp} className="hidden md:block text-slate-300 text-xs uppercase tracking-widest font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              {rest.length} articles
            </motion.span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger(0.08)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {rest.map((post) => (
              <motion.article key={post.slug} variants={fadeUp} className="group flex flex-col">
                <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                  {/* Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden mb-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Dark overlay lightens on hover */}
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-500" />
                    {/* Category chip on image */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/50 backdrop-blur-sm text-[#C9963B] text-[9px] font-medium px-2.5 py-1 uppercase tracking-[0.18em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {post.category}
                      </span>
                    </div>
                    {/* Gold accent line slides up on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9963B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </div>

                  {/* Card body */}
                  <div className="pt-6 flex flex-col flex-1 border-x border-b border-stone-200 px-6 pb-7 group-hover:border-[#C9963B]/20 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-slate-400 text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{post.date}</span>
                      <span className="w-px h-3 bg-stone-200" />
                      <span className="flex items-center gap-1 text-slate-400 text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <Clock className="w-2.5 h-2.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-[#080808] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-2 mb-6 flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#C9963B] text-[10px] font-medium uppercase tracking-widest group-hover:gap-3 transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Read Article <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#080808] text-white py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#111111_0%,_transparent_70%)]" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger(0.12)}
          className="relative max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#C9963B]/50" />
            <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Ready to Build</span>
            <span className="h-px w-12 bg-[#C9963B]/50" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to start your project?
          </motion.h2>
          <motion.p variants={fadeUp} className="mb-12 text-slate-400 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Let&apos;s build something extraordinary together. Contact us for a free, no-obligation quote.
          </motion.p>
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
  )
}
