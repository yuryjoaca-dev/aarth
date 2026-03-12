import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Clock, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { blogPosts, getPostBySlug, type ContentBlock } from '../data/blogPosts'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
})

function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-white/5">
      <div
        className="h-full bg-[#C9963B] transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((block, i) => {
        if (block.type === 'paragraph') {
          return (
            <p key={i} className="text-slate-600 text-base leading-[1.9] font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              {block.text}
            </p>
          )
        }
        if (block.type === 'heading') {
          return (
            <div key={i} className="pt-8 pb-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{block.text}</h2>
              <span className="block w-8 h-[1.5px] bg-[#C9963B]" />
            </div>
          )
        }
        if (block.type === 'list') {
          return (
            <ul key={i} className="space-y-3.5 pl-0">
              {block.items?.map((item, j) => (
                <li key={j} className="flex items-start gap-4 text-slate-600 text-sm leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="w-4 h-px bg-[#C9963B] flex-shrink-0 mt-[0.65rem]" />
                  {item}
                </li>
              ))}
            </ul>
          )
        }
        if (block.type === 'quote') {
          return (
            <div key={i} className="my-12 -mx-6 md:-mx-10 bg-[#080808] px-8 md:px-14 py-12">
              <span className="block text-[#C9963B]/30 text-[6rem] leading-none font-bold mb-0 select-none" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>&ldquo;</span>
              <p className="text-2xl md:text-3xl leading-snug font-light italic text-white -mt-6 mb-6" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
                {block.text}
              </p>
              {block.attribution && (
                <cite className="text-xs text-[#C9963B] uppercase tracking-[0.2em] not-italic font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  — {block.attribution}
                </cite>
              )}
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = getPostBySlug(slug ?? '')

  if (!post) return <Navigate to="/blog" replace />

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <ReadingProgress />
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
      />

      {/* Hero */}
      <section className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/15" />
        </div>

        {/* Decorative large category in background */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 font-bold leading-none select-none pointer-events-none text-white/[0.025] overflow-hidden"
          style={{ fontSize: 'clamp(120px, 20vw, 260px)', fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          aria-hidden="true"
        >
          {post.category}
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.12)}
          className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-20"
        >
          {/* Back breadcrumb */}
          <motion.div variants={fadeUp} className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/40 hover:text-[#C9963B] text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <ArrowLeft className="w-3 h-3" />
              Blog
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-7">
            <span className="flex items-center gap-1.5 bg-[#C9963B] text-white text-[10px] font-medium px-3 py-1.5 uppercase tracking-[0.15em]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Tag className="w-2.5 h-2.5" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/50 text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
            <span className="text-white/35 text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{post.date}</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] max-w-4xl tracking-tight"
          >
            {post.title}
          </motion.h1>
        </motion.div>
      </section>

      {/* Article Body */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_300px] gap-20 items-start">

            {/* Main content */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger(0.08)}
            >
              {/* Excerpt / lead */}
              <motion.p
                variants={fadeUp}
                className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light mb-12 pb-12 border-b border-stone-200 italic"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                {post.excerpt}
              </motion.p>

              <motion.div variants={fadeUp}>
                <ContentRenderer blocks={post.content} />
              </motion.div>

              {/* Tags row */}
              <motion.div variants={fadeUp} className="mt-14 pt-10 border-t border-stone-200 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 text-[10px] uppercase tracking-widest font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Category</span>
                  <span className="border border-[#C9963B]/30 text-[#C9963B] text-[10px] font-medium px-3 py-1.5 uppercase tracking-[0.15em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {post.category}
                  </span>
                </div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-[#C9963B] text-xs uppercase tracking-widest font-medium transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back to Blog
                </Link>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial="hidden"
              animate="show"
              variants={stagger(0.1)}
              className="hidden lg:block sticky top-28 space-y-6"
            >
              {/* CTA card */}
              <motion.div variants={fadeUp} className="bg-[#080808] border-t-2 border-[#C9963B] p-8">
                <p className="text-[#C9963B] text-[10px] font-medium uppercase tracking-[0.25em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Free Consultation
                </p>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  Ready to renovate?
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-7 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Get a free, no-obligation quote from Edmonton&apos;s trusted renovation experts.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium py-3 text-[10px] uppercase tracking-widest transition-all duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Get a Quote <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>

              {/* About blurb */}
              <motion.div variants={fadeUp} className="border border-stone-200 p-8">
                <span className="block w-6 h-px bg-[#C9963B] mb-6" />
                <p className="text-slate-800 font-semibold text-sm mb-2 tracking-tight">Aarth Construction Inc.</p>
                <p className="text-slate-500 text-xs leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Edmonton&apos;s trusted renovation experts — kitchens, bathrooms, basements, flooring, and commercial projects. Licensed, insured, and WCB covered.
                </p>
                <div className="mt-6 pt-6 border-t border-stone-100">
                  <a
                    href="tel:5875962793"
                    className="text-[#C9963B] text-xs font-medium uppercase tracking-widest block mb-1"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    587-596-2793
                  </a>
                  <a
                    href="mailto:info@aarthconstruction.ca"
                    className="text-slate-400 text-xs font-light"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    info@aarthconstruction.ca
                  </a>
                </div>
              </motion.div>

              {/* More articles */}
              {otherPosts.slice(0, 2).length > 0 && (
                <motion.div variants={fadeUp} className="border border-stone-200 p-8">
                  <span className="block text-[10px] text-slate-400 uppercase tracking-[0.2em] font-medium mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>More Articles</span>
                  <div className="space-y-6">
                    {otherPosts.slice(0, 2).map((p) => (
                      <Link key={p.slug} to={`/blog/${p.slug}`} className="group block">
                        <span className="text-[9px] text-[#C9963B] uppercase tracking-[0.15em] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{p.category}</span>
                        <p className="text-sm font-semibold text-slate-800 leading-snug mt-1 group-hover:text-[#C9963B] transition-colors duration-200 tracking-tight">
                          {p.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="bg-[#080808] py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger(0.1)}
            >
              <div className="flex items-end justify-between mb-14">
                <div>
                  <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Continue Reading
                  </motion.p>
                  <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white tracking-tight">
                    More Articles
                  </motion.h2>
                </div>
                <motion.div variants={fadeUp}>
                  <Link
                    to="/blog"
                    className="hidden md:inline-flex items-center gap-2 border border-white/10 text-white/50 hover:border-[#C9963B] hover:text-[#C9963B] text-[10px] font-medium px-5 py-3 uppercase tracking-widest transition-all duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    All Articles <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              </div>

              <motion.div variants={stagger(0.08)} className="grid md:grid-cols-3 gap-px bg-white/5">
                {otherPosts.map((p) => (
                  <motion.article key={p.slug} variants={fadeUp} className="bg-[#080808] group">
                    <Link to={`/blog/${p.slug}`} className="block h-full">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9963B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      </div>
                      <div className="p-7">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[#C9963B] text-[9px] font-medium uppercase tracking-[0.15em]" style={{ fontFamily: 'Inter, sans-serif' }}>{p.category}</span>
                          <span className="w-px h-3 bg-white/10" />
                          <span className="text-white/30 text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{p.readTime}</span>
                        </div>
                        <h3 className="text-base font-bold text-white leading-snug mb-4 group-hover:text-[#C9963B] transition-colors duration-200 tracking-tight">
                          {p.title}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 text-[#C9963B]/60 text-[10px] font-medium uppercase tracking-widest group-hover:text-[#C9963B] group-hover:gap-3 transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#080808] text-white py-28 px-6 relative overflow-hidden border-t border-white/5">
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
            <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Get Started</span>
            <span className="h-px w-12 bg-[#C9963B]/50" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to start your project?
          </motion.h2>
          <motion.p variants={fadeUp} className="mb-12 text-slate-400 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Let&apos;s build something extraordinary together.
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
