"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Phone, ArrowRight, ShieldCheck, Award, Clock, Check } from "lucide-react";
import SEO from "../components/SEO";

const PHONE = "587-596-2793";
const PHONE_HREF = "tel:5875962793";

const services = [
  { name: "Kitchen Renovations", img: "/homepage/kitchen.webp", link: "/residential/kitchens" },
  { name: "Bathroom Renovations", img: "/homepage/bathroom.webp", link: "/residential/bathrooms" },
  { name: "Basement Finishing", img: "/homepage/basement.webp", link: "/residential/basements" },
  { name: "Flooring", img: "/homepage/flooring.webp", link: "/residential/flooring" },
  { name: "Commercial Fit-Outs", img: "/homepage/commercial.jpg", link: "/projects" },
];

const faqs = [
  { q: "How long does a kitchen renovation take?", a: "Most kitchen renovations take 3–6 weeks depending on scope. We give you a detailed timeline before we start and keep you updated throughout." },
  { q: "Do you provide free quotes?", a: "Yes — all quotes are free, detailed, and itemized. No pressure, no hidden fees. What we quote is what you pay." },
  { q: "Are you licensed and insured?", a: "Yes. Aarth Construction is fully licensed and insured in Alberta, British Columbia, and Saskatchewan." },
  { q: "Do you handle permits?", a: "Yes, we manage all required permits and inspections as part of the project — you don't have to deal with the paperwork." },
  { q: "What areas do you serve?", a: "We serve Edmonton and surrounding areas in Alberta, as well as Vancouver/Kelowna in BC, and Regina/Saskatoon in Saskatchewan." },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="w-4 h-4"
          fill={i <= Math.round(rating) ? "#f59e0b" : "none"}
          stroke={i <= Math.round(rating) ? "#f59e0b" : "#d1d5db"}
        />
      ))}
    </div>
  );
}

function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [formData, setFormData] = useState({ name: "", phone: "", projectType: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch((import.meta.env.VITE_API_URL ?? "") + "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, email: "via-landing@aarthconstruction.com", message: `Landing page lead — Project: ${formData.projectType}` }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`flex flex-col items-center justify-center text-center gap-3 ${compact ? "py-6" : "py-10"}`}>
        <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center">
          <Check className="w-5 h-5 text-green-500" />
        </div>
        <p className="font-semibold text-slate-900">We'll call you within 2 hours!</p>
        <p className="text-sm text-slate-500">Or call us directly: <a href={PHONE_HREF} className="text-[#C9963B] font-medium">{PHONE}</a></p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text" placeholder="Your Name" required
        value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
        className="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9963B] bg-white placeholder-slate-400"
      />
      <input
        type="tel" placeholder="Phone Number" required
        value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
        className="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9963B] bg-white placeholder-slate-400"
      />
      <select
        required value={formData.projectType} onChange={e => setFormData({ ...formData, projectType: e.target.value })}
        className="w-full border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9963B] bg-white text-slate-600"
      >
        <option value="">Select Project Type</option>
        <option>Kitchen Renovation</option>
        <option>Bathroom Renovation</option>
        <option>Basement Finishing</option>
        <option>Flooring</option>
        <option>Commercial Fit-Out</option>
        <option>Other</option>
      </select>
      <button
        type="submit" disabled={loading}
        className="w-full bg-[#C9963B] hover:bg-[#A67A2E] disabled:opacity-60 text-white font-semibold px-6 py-3.5 transition-colors uppercase tracking-wider text-sm"
      >
        {loading ? "Sending..." : "Get My Free Quote →"}
      </button>
      <p className="text-xs text-slate-400 text-center">No obligation. We'll call you within 2 hours.</p>
    </form>
  );
}

export default function LandingPage() {
  return (
    <>
      <SEO
        title="Renovation Contractor Edmonton | Free Quote | Aarth Construction"
        description="Kitchen, bathroom, basement & flooring renovations in Edmonton. Licensed & insured. 400+ projects completed. Get your free quote today — we call back within 2 hours."
        url="/renovations-edmonton"
      />

      {/* ── STICKY PHONE BAR ── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f] border-b border-white/10 py-2.5 px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo/logo.webp" alt="Aarth Construction" className="h-14 w-auto object-contain" loading="eager" />
        </Link>
        <a href={PHONE_HREF} className="flex items-center gap-2 bg-[#C9963B] hover:bg-[#A67A2E] text-white font-bold px-4 py-2 text-sm transition-colors">
          <Phone className="w-4 h-4" /> {PHONE}
        </a>
      </div>

      {/* ── HERO ── */}
      <section className="pt-16 min-h-screen bg-[#080808] flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/homepage/kitchen.webp" alt="Kitchen renovation Edmonton" loading="eager" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-[#080808]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <StarRating rating={4.2} />
              <span className="text-slate-300 text-sm">4.2 · 5 Reviews on Google</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Edmonton's Trusted<br />
              <span className="text-[#C9963B]">Renovation Contractor</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Kitchens, bathrooms, basements, flooring & commercial fit-outs.<br />
              Licensed & insured · 400+ projects · Free quotes in 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href={PHONE_HREF} className="flex items-center justify-center gap-2 bg-[#C9963B] hover:bg-[#A67A2E] text-white font-bold px-8 py-4 text-lg transition-colors">
                <Phone className="w-5 h-5" /> Call {PHONE}
              </a>
              <a href="#quote" className="flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-8 py-4 transition-colors">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              {["Licensed & Insured", "400+ Projects", "Free Quotes", "Serving AB · BC · SK"].map(t => (
                <div key={t} className="flex items-center gap-1.5 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#C9963B] flex-shrink-0" /> {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div id="quote" className="bg-white p-8 shadow-2xl">
            <h2 className="text-xl font-bold text-slate-900 mb-1">Get a Free Quote</h2>
            <p className="text-slate-500 text-sm mb-6">We'll call you back within 2 hours.</p>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#C9963B] py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-8">
          {[
            { icon: ShieldCheck, text: "Licensed & Insured" },
            { icon: Award, text: "400+ Projects Completed" },
            { icon: Clock, text: "On-Time Delivery" },
            { icon: CheckCircle, text: "Workmanship Warranty" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white font-semibold text-sm">
              <Icon className="w-4 h-4" /> {text}
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">What We Renovate</h2>
            <p className="text-slate-500">Full-service renovations across residential and commercial.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map(s => (
              <Link key={s.name} to={s.link} className="relative overflow-hidden group aspect-square block">
                <img src={s.img} alt={s.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm">{s.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-3">
            <StarRating rating={4.2} />
          </div>
          <p className="text-3xl font-bold text-slate-900 mb-2">4.2 out of 5</p>
          <p className="text-slate-500 mb-6">Based on 5 Google reviews</p>
          <a
            href="https://www.google.com/maps/search/Aarth+Construction+Edmonton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-semibold px-6 py-3 transition-colors text-sm"
          >
            Read Our Reviews on Google <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── BEFORE/AFTER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 text-center">Our Work</h2>
          <p className="text-slate-500 text-center mb-12">Real projects, real results.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { img: "/Kitchens/k1.jpg", label: "Kitchen Renovation" },
              { img: "/Bathrooms/b1.jpg", label: "Bathroom Renovation" },
              { img: "/Basements/b1.jpg", label: "Basement Finishing" },
            ].map(item => (
              <div key={item.label} className="relative overflow-hidden group aspect-[4/3]">
                <img src={item.img} alt={item.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects" className="inline-flex items-center gap-2 text-[#C9963B] font-semibold hover:underline">
              See All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-white border border-stone-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-slate-400 mb-6">Call us now or fill out the form — we'll get back to you within 2 hours with a free, no-obligation quote.</p>
            <a href={PHONE_HREF} className="flex items-center gap-2 bg-[#C9963B] hover:bg-[#A67A2E] text-white font-bold px-8 py-4 text-lg transition-colors w-fit">
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
          </div>
          <div className="bg-white p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Get a Free Quote</h3>
            <QuoteForm compact />
          </div>
        </div>
      </section>

      {/* ── MINIMAL FOOTER ── */}
      <footer className="bg-[#0a0a0a] border-t border-white/10 py-6 px-6 text-center">
        <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Aarth Construction Inc · Edmonton, AB · <a href={PHONE_HREF} className="text-[#C9963B]">{PHONE}</a></p>
      </footer>
    </>
  );
}
