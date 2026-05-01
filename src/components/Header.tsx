import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projectsDropdown = [
  { href: "/projects", label: "All Projects" },
  { href: "/transformations", label: "Before & After" },
];
const residentialDropdown = [
  { href: "/residential/kitchens", label: "Kitchens" },
  { href: "/residential/bathrooms", label: "Bathrooms" },
  { href: "/residential/flooring", label: "Flooring" },
  { href: "/residential/basements", label: "Basements" },
];
const commercialDropdown = [
  { href: "/commercial/offices", label: "Office Fit-Outs" },
  { href: "/commercial/retail", label: "Retail Spaces" },
  { href: "/commercial/restaurants", label: "Restaurants & Hospitality" },
];
const moreDropdown = [
  { href: "/about", label: "About Us" },
  { href: "/process", label: "How We Work" },
  { href: "/faq", label: "FAQ" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const projectsRef = useRef<HTMLDivElement>(null);
  const residentialRef = useRef<HTMLDivElement>(null);
  const commercialRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setProjectsOpen(false);
    setResidentialOpen(false);
    setCommercialOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (projectsRef.current && !projectsRef.current.contains(e.target as Node)) setProjectsOpen(false);
      if (residentialRef.current && !residentialRef.current.contains(e.target as Node)) setResidentialOpen(false);
      if (commercialRef.current && !commercialRef.current.contains(e.target as Node)) setCommercialOpen(false);
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => { setProjectsOpen(false); setResidentialOpen(false); setCommercialOpen(false); setMoreOpen(false); };
  const isUnderPath = (prefixes: string[]) => prefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));

  const linkBase = !scrolled && isHome ? "text-white/75 hover:text-white" : "text-white/70 hover:text-white";
  const activeCls = "text-[#C9963B]";
  const desktopLink = (active: boolean) =>
    `relative px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${active ? activeCls : linkBase}`;

  const dropdownPanel = "absolute top-full left-0 mt-1 w-56 bg-[#080808] border border-white/8 shadow-2xl overflow-hidden z-50";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#111111] border-b border-white/8" : isHome ? "bg-transparent" : "bg-[#111111]/95 backdrop-blur-md border-b border-white/5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">

            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src="/logo/logo.webp" alt="Aarth Construction Inc" className="h-[90px] w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0" aria-label="Main navigation" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Link to="/" className={desktopLink(pathname === "/")}>Home</Link>

              {/* Projects */}
              <div ref={projectsRef} className="relative">
                <button onClick={() => { closeAll(); setProjectsOpen(v => !v); }} aria-expanded={projectsOpen} className={`${desktopLink(isUnderPath(["/projects", "/transformations"]))} flex items-center gap-1`}>
                  Projects <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {projectsOpen && (
                    <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className={dropdownPanel}>
                      {projectsDropdown.map((item) => (
                        <Link key={item.href} to={item.href} className="block px-5 py-3.5 text-xs text-slate-300/80 hover:bg-white/5 hover:text-[#C9963B] transition-colors border-b border-white/5 last:border-0 uppercase tracking-widest">{item.label}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Residential */}
              <div ref={residentialRef} className="relative">
                <button onClick={() => { closeAll(); setResidentialOpen(v => !v); }} aria-expanded={residentialOpen} className={`${desktopLink(isUnderPath(["/residential"]))} flex items-center gap-1`}>
                  Residential <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${residentialOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {residentialOpen && (
                    <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className={dropdownPanel}>
                      {residentialDropdown.map((item) => (
                        <Link key={item.href} to={item.href} className="block px-5 py-3.5 text-xs text-slate-300/80 hover:bg-white/5 hover:text-[#C9963B] transition-colors border-b border-white/5 last:border-0 uppercase tracking-widest">{item.label}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Commercial */}
              <div ref={commercialRef} className="relative">
                <button onClick={() => { closeAll(); setCommercialOpen(v => !v); }} aria-expanded={commercialOpen} className={`${desktopLink(isUnderPath(["/commercial"]))} flex items-center gap-1`}>
                  Commercial <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${commercialOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {commercialOpen && (
                    <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className={`${dropdownPanel} w-64`}>
                      {commercialDropdown.map((item) => (
                        <Link key={item.href} to={item.href} className="block px-5 py-3.5 text-xs text-slate-300/80 hover:bg-white/5 hover:text-[#C9963B] transition-colors border-b border-white/5 last:border-0 uppercase tracking-widest">{item.label}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* More */}
              <div ref={moreRef} className="relative">
                <button onClick={() => { closeAll(); setMoreOpen(v => !v); }} aria-expanded={moreOpen} className={`${desktopLink(isUnderPath(["/about", "/process", "/faq", "/service-areas"]))} flex items-center gap-1`}>
                  More <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {moreOpen && (
                    <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className={`${dropdownPanel} left-auto right-0`}>
                      {moreDropdown.map((item) => (
                        <Link key={item.href} to={item.href} className="block px-5 py-3.5 text-xs text-slate-300/80 hover:bg-white/5 hover:text-[#C9963B] transition-colors border-b border-white/5 last:border-0 uppercase tracking-widest">{item.label}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link to="/contact" className="border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-5 py-2 text-xs uppercase tracking-widest transition-all duration-200 inline-block" style={{ fontFamily: 'Inter, sans-serif' }}>
                Contact Us
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} className="lg:hidden text-white p-2 hover:text-[#C9963B] transition-colors">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={menuOpen ? "x" : "menu"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} className="block">
                  {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden" onClick={() => setMenuOpen(false)} />
            <motion.div key="drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 35, stiffness: 320 }} className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-[#080808] border-l border-white/8 shadow-2xl lg:hidden flex flex-col">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
                <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center">
                  <img src="/logo/logo.webp" alt="Aarth Construction Inc" className="h-[60px] w-auto object-contain" />
                </Link>
                <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-white/50 hover:text-white p-1 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-0.5" aria-label="Mobile navigation" style={{ fontFamily: 'Inter, sans-serif' }}>
                {[{ href: "/", label: "Home" }].map((item, i) => (
                  <motion.div key={item.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 + 0.04 }}>
                    <Link to={item.href} onClick={() => setMenuOpen(false)} className={`flex items-center px-3 py-3 text-xs uppercase tracking-widest font-medium transition-colors ${pathname === item.href ? "text-[#C9963B]" : "text-white/70 hover:text-white"}`}>{item.label}</Link>
                  </motion.div>
                ))}

                {[
                  { label: "Projects", items: projectsDropdown, delay: 0.08 },
                  { label: "Residential", items: residentialDropdown, delay: 0.12 },
                  { label: "Commercial", items: commercialDropdown, delay: 0.16 },
                  { label: "More", items: moreDropdown, delay: 0.2 },
                ].map(({ label, items, delay }) => (
                  <motion.div key={label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay }}>
                    <p className="px-3 pt-5 pb-2 text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">{label}</p>
                    {items.map((item) => (
                      <Link key={item.href} to={item.href} onClick={() => setMenuOpen(false)} className={`flex items-center px-3 py-2.5 text-xs uppercase tracking-widest font-medium transition-colors ${pathname === item.href ? "text-[#C9963B]" : "text-white/55 hover:text-white"}`}>{item.label}</Link>
                    ))}
                  </motion.div>
                ))}
              </nav>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="px-4 py-5 border-t border-white/8">
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="block w-full border border-[#C9963B] text-[#C9963B] hover:bg-[#C9963B] hover:text-white font-medium px-4 py-3.5 text-xs text-center transition-colors uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Get a Free Quote
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
