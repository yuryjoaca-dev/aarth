import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
});

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stats = [
  { v: "120+", l: "Kitchens Completed" },
  { v: "90+", l: "Bathrooms Renovated" },
  { v: "150+", l: "Flooring Projects" },
  { v: "70+", l: "Basements Finished" },
];

export default function ProjectsPage() {
  return (
    <>
      <SEO title="Our Projects" description="Browse Aarth Construction's portfolio of completed kitchens, bathrooms, basements, and commercial projects in Edmonton." url="/projects" />

      {/* Split Hero */}
      <section className="relative pt-16">
        {/* Desktop split */}
        <div className="hidden md:flex h-[85vh]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeLeft}
            className="relative w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80')",
              clipPath: "polygon(0 0, 100% 0, 82% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
            <div className="relative z-10 flex flex-col items-start justify-center h-full px-12 text-white">
              <p className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Transformations</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                Before &amp; After<br />Transformations
              </h1>
              <Link
                to="/transformations"
                className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Explore Transformations <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeRight}
            className="relative w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80')",
              clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-black/60 to-black/40" />
            <div className="relative z-10 flex flex-col items-end justify-center h-full px-12 text-white text-right">
              <p className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Commercial</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                Commercial<br />Projects
              </h1>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                View Projects <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col md:hidden">
          <div className="relative h-[60vh]">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="Before & After" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-3xl font-bold mb-5 tracking-tight">Before &amp; After</h1>
              <Link to="/transformations" className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Explore Transformations
              </Link>
            </div>
          </div>
          <div className="relative h-[60vh]">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Commercial" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-3xl font-bold mb-5 tracking-tight">Commercial Projects</h1>
              <Link to="/services" className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
        <section className="max-w-4xl mx-auto text-center py-20 px-6">
          <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Our Work</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Building More Than Spaces</motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 text-sm leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            At Aarth Construction, we believe every transformation tells a story.
            Kitchens that bring families together, bathrooms that redefine
            relaxation, basements turned into entertainment hubs, and floors that
            welcome every step. Explore how we elevate spaces with precision and
            passion.
          </motion.p>
        </section>
      </motion.div>

      {/* 4-Category Grid */}
      <motion.section
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {[
          { title: "Kitchens", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", link: "/residential/kitchens" },
          { title: "Basements", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", link: "/residential/basements" },
          { title: "Flooring", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", link: "/residential/flooring" },
          { title: "Bathrooms", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80", link: "/residential/bathrooms" },
        ].map((item) => (
          <motion.div key={item.title} variants={fadeUp} className="relative h-[300px] lg:h-[80vh] overflow-hidden group">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-all duration-300" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <h3 className="text-3xl font-bold mb-6 tracking-tight">{item.title}</h3>
              <Link
                to={item.link}
                className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Explore {item.title}
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Stats */}
      <section className="bg-[#111111] text-white">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.1)}
          className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 text-center"
        >
          {stats.map((s) => (
            <motion.div key={s.l} variants={fadeUp} className="py-14 px-6">
              <h3 className="text-4xl md:text-5xl font-bold text-[#C9963B]">{s.v}</h3>
              <p className="mt-2 text-slate-400 text-xs uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>{s.l}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808] text-white py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#111111_0%,_transparent_70%)]" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.12)}
          className="relative max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#C9963B]/50" />
            <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>Get Started</span>
            <span className="h-px w-12 bg-[#C9963B]/50" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to start your project?</motion.h2>
          <motion.p variants={fadeUp} className="mb-12 text-slate-400 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Let&apos;s build something extraordinary together.</motion.p>
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
  );
}
