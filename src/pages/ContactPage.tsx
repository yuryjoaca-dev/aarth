import { useState } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO title="Contact Us" description="Get a free construction quote from Aarth Construction Inc. Call 587-596-2793 or email us today." url="/contact" />

      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#111111_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)}>
            <motion.div variants={fadeUp} className="flex items-center gap-4 justify-center mb-8">
              <span className="h-px w-12 bg-[#C9963B]/50" />
              <span className="text-[#C9963B] font-medium text-xs uppercase tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif' }}>Get in Touch</span>
              <span className="h-px w-12 bg-[#C9963B]/50" />
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold text-white mt-4 mb-6 tracking-tight leading-none">
              Contact Us
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              We&apos;d love to hear from you. Whether you&apos;re planning a new
              project or just want to learn more about our services, feel free to
              reach out.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-start">

        {/* Contact Info */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
          <motion.h3 variants={fadeUp} className="text-3xl font-bold tracking-tight text-slate-900 mb-3">Get in Touch</motion.h3>
          <motion.p variants={fadeUp} className="mb-8 text-slate-500 leading-relaxed text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our team is here to answer your questions and provide the
            information you need to bring your project to life. You can reach
            us directly via phone or email, or use the form to request a
            personalised quote.
          </motion.p>

          <motion.ul variants={stagger(0.1)} className="space-y-3 mb-10">
            <motion.li variants={fadeUp} className="flex items-center gap-4 p-4 border border-stone-200 bg-stone-50">
              <Phone className="w-4 h-4 text-[#C9963B] flex-shrink-0" />
              <a href="tel:5875962793" className="font-medium text-sm text-slate-800 hover:text-[#C9963B] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                587-596-2793
              </a>
            </motion.li>
            <motion.li variants={fadeUp} className="flex items-center gap-4 p-4 border border-stone-200 bg-stone-50">
              <Mail className="w-4 h-4 text-[#C9963B] flex-shrink-0" />
              <a href="mailto:aarth.construct@gmail.com" className="font-medium text-sm text-slate-800 hover:text-[#C9963B] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Aarth.construct@gmail.com
              </a>
            </motion.li>
            <motion.li variants={fadeUp} className="flex items-center gap-4 p-4 border border-stone-200 bg-stone-50">
              <MapPin className="w-4 h-4 text-[#C9963B] flex-shrink-0" />
              <a
                href="https://www.google.com/maps?q=16307+111+Ave+NW,+Edmonton,+AB+T5M+2S2"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sm text-slate-800 hover:text-[#C9963B] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}
              >
                16307 111 Ave NW, Edmonton, AB, Canada
              </a>
            </motion.li>
          </motion.ul>

          {/* Google Maps Embed */}
          <motion.div variants={fadeUp} className="overflow-hidden border border-stone-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d518.2757824976627!2d-113.6048132626903!3d53.558004669510474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0213c395ea7ad%3A0xb846e04aa5c98811!2s16307%20111%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5M%202S2%2C%20Canada!5e1!3m2!1sro!2sro!4v1757786951567!5m2!1sro!2sro"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>

        {/* Form */}
        {submitted ? (
          <div className="bg-white border border-stone-200 p-10 flex flex-col items-center justify-center text-center min-h-[500px]">
            <div className="w-16 h-16 border border-[#C9963B] flex items-center justify-center mb-6">
              <Check className="w-7 h-7 text-[#C9963B]" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Thank You.</h3>
            <p className="text-slate-500 mb-8 leading-relaxed text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>We will get back to you shortly.</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" });
              }}
              className="text-xs font-medium text-[#111111] hover:text-[#C9963B] transition-colors uppercase tracking-widest underline underline-offset-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <motion.form initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} onSubmit={handleSubmit} className="bg-white border border-stone-200 p-10 space-y-5">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Request a Quote</h3>
              <p className="text-slate-500 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                Share a few details about your project and our team will prepare a
                tailored estimate for you.
              </p>
            </div>

            <input
              type="text" name="name" placeholder="Your Name" required
              value={formData.name} onChange={handleChange}
              className="w-full border border-stone-200 px-4 py-3.5 text-sm focus:outline-none focus:border-[#111111] bg-stone-50 placeholder-slate-400 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <input
              type="email" name="email" placeholder="Your Email" required
              value={formData.email} onChange={handleChange}
              className="w-full border border-stone-200 px-4 py-3.5 text-sm focus:outline-none focus:border-[#111111] bg-stone-50 placeholder-slate-400 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <input
              type="tel" name="phone" placeholder="Phone Number"
              value={formData.phone} onChange={handleChange}
              className="w-full border border-stone-200 px-4 py-3.5 text-sm focus:outline-none focus:border-[#111111] bg-stone-50 placeholder-slate-400 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <select
              name="projectType" required
              value={formData.projectType} onChange={handleChange}
              className="w-full border border-stone-200 px-4 py-3.5 text-sm focus:outline-none focus:border-[#111111] bg-stone-50 text-slate-600 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <option value="">Select Project Type</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Renovation</option>
              <option>Painting</option>
              <option>Flooring</option>
              <option>Other</option>
            </select>
            <input
              type="text" name="budget" placeholder="Estimated Budget"
              value={formData.budget} onChange={handleChange}
              className="w-full border border-stone-200 px-4 py-3.5 text-sm focus:outline-none focus:border-[#111111] bg-stone-50 placeholder-slate-400 transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <textarea
              name="message" placeholder="Project Details" rows={4} required
              value={formData.message} onChange={handleChange}
              className="w-full border border-stone-200 px-4 py-3.5 text-sm focus:outline-none focus:border-[#111111] bg-stone-50 placeholder-slate-400 resize-none transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <button
              type="submit"
              className="w-full bg-[#C9963B] hover:bg-[#A67A2E] text-white font-medium px-6 py-4 transition-all duration-200 uppercase tracking-widest text-xs"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Submit Request
            </button>
          </motion.form>
        )}
      </section>
    </>
  );
}
