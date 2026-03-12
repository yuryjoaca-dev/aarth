"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
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
      {/* ─── Hero ─── */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#091a3e] via-[#0f2557] to-[#1a3a7a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-[#f5a623]/15 border border-[#f5a623]/30 text-[#f5a623] font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse" />
              Get in Touch
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-black text-white mt-4 mb-6 tracking-tight leading-none">
              Contact Us
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Whether you&apos;re planning a new
              project or just want to learn more about our services, feel free to
              reach out.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-start">

        {/* Contact Info */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger(0.1)}>
          <motion.h3 variants={fadeUp} className="text-3xl font-black tracking-tight text-slate-900 mb-3">Get in Touch</motion.h3>
          <motion.p variants={fadeUp} className="mb-8 text-slate-600 leading-relaxed">
            Our team is here to answer your questions and provide the
            information you need to bring your project to life. You can reach
            us directly via phone or email, or use the form to request a
            personalised quote.
          </motion.p>

          <motion.ul variants={stagger(0.1)} className="space-y-5 mb-10">
            <motion.li variants={fadeUp} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
              <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#f5a623]" />
              </div>
              <a href="tel:5875962793" className="font-semibold text-slate-800 hover:text-[#f5a623] transition-colors">
                587-596-2793
              </a>
            </motion.li>
            <motion.li variants={fadeUp} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
              <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#f5a623]" />
              </div>
              <a href="mailto:aarth.construct@gmail.com" className="font-semibold text-slate-800 hover:text-[#f5a623] transition-colors">
                Aarth.construct@gmail.com
              </a>
            </motion.li>
            <motion.li variants={fadeUp} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
              <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#f5a623]" />
              </div>
              <a
                href="https://www.google.com/maps?q=16307+111+Ave+NW,+Edmonton,+AB+T5M+2S2"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-800 hover:text-[#f5a623] transition-colors"
              >
                16307 111 Ave NW, Edmonton, AB, Canada
              </a>
            </motion.li>
          </motion.ul>

          {/* Google Maps Embed */}
          <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d518.2757824976627!2d-113.6048132626903!3d53.558004669510474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0213c395ea7ad%3A0xb846e04aa5c98811!2s16307%20111%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5M%202S2%2C%20Canada!5e1!3m2!1sro!2sro!4v1757786951567!5m2!1sro!2sro"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Form */}
        {submitted ? (
          <div className="bg-white shadow-2xl shadow-slate-200/60 rounded-3xl p-10 flex flex-col items-center justify-center text-center min-h-[500px]">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Thank You!</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">We will get back to you shortly.</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" });
              }}
              className="text-sm font-bold text-[#0f2557] hover:text-[#f5a623] transition-colors underline underline-offset-4"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <motion.form initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} onSubmit={handleSubmit} className="bg-white shadow-2xl shadow-slate-200/60 rounded-3xl p-10 space-y-5">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 mb-1">Request a Quote</h3>
              <p className="text-slate-500 text-sm">
                Share a few details about your project and our team will prepare a
                tailored estimate for you.
              </p>
            </div>

            <input
              type="text" name="name" placeholder="Your Name" required
              value={formData.name} onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2557] focus:border-transparent bg-slate-50 placeholder-slate-400 transition-all"
            />
            <input
              type="email" name="email" placeholder="Your Email" required
              value={formData.email} onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2557] focus:border-transparent bg-slate-50 placeholder-slate-400 transition-all"
            />
            <input
              type="tel" name="phone" placeholder="Phone Number"
              value={formData.phone} onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2557] focus:border-transparent bg-slate-50 placeholder-slate-400 transition-all"
            />
            <select
              name="projectType" required
              value={formData.projectType} onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2557] focus:border-transparent bg-slate-50 text-slate-600 transition-all"
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
              className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2557] focus:border-transparent bg-slate-50 placeholder-slate-400 transition-all"
            />
            <textarea
              name="message" placeholder="Project Details" rows={4} required
              value={formData.message} onChange={handleChange}
              className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f2557] focus:border-transparent bg-slate-50 placeholder-slate-400 resize-none transition-all"
            />
            <button
              type="submit"
              className="w-full bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Submit Request
            </button>
          </motion.form>
        )}
      </section>
    </>
  );
}
