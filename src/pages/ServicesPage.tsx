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

const services = [
  {
    title: "Kitchens",
    subtitle: "The heart of your home, reimagined.",
    description: "From modern open-concept designs to timeless classics, our kitchens are built to bring families together. High-end finishes, durable materials, and custom cabinetry make every kitchen both beautiful and functional.",
    features: ["Custom Cabinetry", "Open-Concept Designs", "Premium Countertops", "Modern Lighting", "Backsplash & Tile", "Full Installation"],
    link: "/residential/kitchens",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    title: "Bathrooms",
    subtitle: "Luxury and comfort redefined.",
    description: "We specialize in creating luxurious and functional bathrooms that feel like your personal spa. From elegant vanities and walk-in showers to freestanding tubs, every project is designed with comfort and style in mind.",
    features: ["Walk-In Showers", "Freestanding Tubs", "Vanity & Storage", "Heated Flooring", "Tile & Stone Work", "Full Plumbing"],
    link: "/residential/bathrooms",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
  {
    title: "Basements",
    subtitle: "Transforming unused spaces into modern living areas.",
    description: "From cozy family rooms to fully equipped suites, we transform basements into functional and stylish living spaces. Waterproofing, lighting, and smart layouts ensure comfort and durability.",
    features: ["Full Basement Finishing", "Home Theatre Rooms", "Guest Suites", "Wet Bars", "Waterproofing", "Egress Windows"],
    link: "/residential/basements",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Flooring",
    subtitle: "Durable, elegant, and crafted to perfection.",
    description: "Our flooring solutions combine durability with beauty. Whether it's hardwood, laminate, or tile, we deliver precision installation and premium quality that enhances every room in your home.",
    features: ["Hardwood Flooring", "Laminate & Vinyl", "Ceramic & Porcelain Tile", "Carpet Installation", "Floor Refinishing", "Subfloor Repair"],
    link: "/residential/flooring",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    title: "Commercial Projects",
    subtitle: "Smart, efficient, and built for success.",
    description: "From offices to retail and healthcare, our commercial projects bring together function, style, and performance. We design and deliver spaces that boost productivity, represent your brand, and ensure long-term value.",
    features: ["Office Fit-Outs", "Retail Spaces", "Healthcare Facilities", "Restaurant & Hospitality", "Project Management", "24/7 Service"],
    link: "/projects",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    title: "New Build & Renovations",
    subtitle: "Turning your vision into reality.",
    description: "We specialize in improving homes with renovations that boost functionality, beauty, and value. From kitchens to basements, we turn visions into reality using premium materials and craftsmanship, backed by warranty.",
    features: ["New Home Construction", "Full-Home Renovations", "Additions & Extensions", "Exterior Work", "Workmanship Warranty", "Free Estimates"],
    link: "/contact",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEO title="Our Services" description="Kitchens, bathrooms, basements, flooring, commercial projects and full home renovations in Edmonton, AB." url="/services" />

      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=1920&q=80" alt="Services background" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/88" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)} className="max-w-3xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#C9963B]/50" />
              <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>What We Offer</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold text-white mt-4 mb-6 tracking-tight leading-none">Our Services</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-300/80 text-base max-w-2xl leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive construction solutions tailored to your goals — from residential renovations to large-scale commercial builds.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services alternating */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-0 divide-y divide-stone-100">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.08)}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Image */}
                <motion.div variants={fadeUp} className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover absolute inset-0 hover:scale-105 transition-transform duration-700" />
                  {/* Gold accent on bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9963B] to-transparent opacity-60" />
                  {/* Service number overlay */}
                  <div className="absolute top-6 left-6">
                    <span className="text-white/20 font-bold text-5xl leading-none tabular-nums select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div variants={stagger(0.08)} className="p-10 lg:p-16 flex flex-col justify-center">
                  <motion.p variants={fadeUp} className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.2em] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {service.subtitle}
                  </motion.p>
                  <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-slate-900 mb-5">
                    {service.title}
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-slate-500 leading-relaxed mb-8 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{service.description}</motion.p>

                  {/* Feature list — minimal dash treatment */}
                  <motion.div variants={stagger(0.04)} className="grid grid-cols-2 gap-x-6 gap-y-2.5 mb-10">
                    {service.features.map((f) => (
                      <motion.p key={f} variants={fadeUp} className="flex items-center gap-2.5 text-xs text-slate-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <span className="w-3 h-px bg-[#C9963B] flex-shrink-0" />
                        {f}
                      </motion.p>
                    ))}
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-6 py-3 text-xs uppercase tracking-widest transition-all duration-200" style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
          <motion.p variants={fadeUp} className="mb-12 text-slate-400 max-w-xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>Let&apos;s build something extraordinary together.</motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-8 py-3.5 text-xs uppercase tracking-widest transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Contact Us <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
