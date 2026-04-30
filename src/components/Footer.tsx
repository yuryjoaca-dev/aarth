import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const socialIcons = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61583064910290",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/AarthConstruct",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aarthconstructioninc/",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/process", label: "How We Work" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

const services = [
  { href: "/residential/kitchens", label: "Kitchens" },
  { href: "/residential/bathrooms", label: "Bathrooms" },
  { href: "/residential/basements", label: "Basements" },
  { href: "/residential/flooring", label: "Flooring" },
  { href: "/commercial/offices", label: "Office Fit-Outs" },
  { href: "/commercial/retail", label: "Retail Spaces" },
  { href: "/commercial/restaurants", label: "Restaurants" },
  { href: "/transformations", label: "Before & After" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand column (spans 2 cols) */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-6">
              <img src="/logo/logo.png" alt="Aarth Construction Inc" className="h-24 w-auto object-contain" />
            </Link>

            <p className="text-sm leading-relaxed mb-6 text-slate-400 max-w-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Building with passion, precision, and trust. Delivering outstanding
              residential and commercial construction projects across Alberta,
              British Columbia, Saskatchewan and Northwest Territories.
            </p>

            {/* Social icons */}
            <div className="flex gap-2 mb-7">
              {socialIcons.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 bg-white/5 hover:border-[#C9963B]/40 hover:text-[#C9963B] text-slate-400 flex items-center justify-center transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>

            {/* Procore badge */}
            <a
              href="https://network.procore.com/p/aarth-construction-inc-edmonton"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-block opacity-90 hover:opacity-100 transition-opacity duration-200"
            >
              <img
                src="/procore-badge.svg"
                alt="Verified on Procore"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-[10px] uppercase tracking-widest mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-[#C9963B] transition-colors duration-150 flex items-center gap-2 group font-light"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="w-1 h-1 bg-[#C9963B] flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium text-[10px] uppercase tracking-widest mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-sm text-slate-400 hover:text-[#C9963B] transition-colors duration-150 flex items-center gap-2 group font-light"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="w-1 h-1 bg-[#C9963B] flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium text-[10px] uppercase tracking-widest mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#C9963B] flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps?q=16307+111+Ave+NW,+Edmonton,+AB+T5M+2S2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-[#C9963B] transition-colors leading-relaxed font-light"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  16307 111 Ave NW,<br />Edmonton, AB, Canada
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-[#C9963B] flex-shrink-0 mt-0.5" />
                <a href="tel:5875962793" className="text-sm text-slate-400 hover:text-[#C9963B] transition-colors font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  587-596-2793
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-[#C9963B] flex-shrink-0 mt-0.5" />
                <a href="mailto:aarth.construct@gmail.com" className="text-sm text-slate-400 hover:text-[#C9963B] transition-colors break-all font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Aarth.construct@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} AARTH CONSTRUCTION INC. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-slate-500 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Link to="/privacy-policy" className="hover:text-[#C9963B] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#C9963B] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
