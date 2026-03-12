"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const projectsRef = useRef<HTMLDivElement>(null);
  const residentialRef = useRef<HTMLDivElement>(null);
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
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (projectsRef.current && !projectsRef.current.contains(e.target as Node))
        setProjectsOpen(false);
      if (residentialRef.current && !residentialRef.current.contains(e.target as Node))
        setResidentialOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isUnderPath = (prefixes: string[]) =>
    prefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));

  // On the hero (home + not scrolled) nav text is white; after scroll always white on navy bg
  const linkBase = !scrolled && isHome ? "text-white/85 hover:text-white" : "text-white/80 hover:text-white";
  const activeCls = "text-[#f5a623]";

  const desktopLink = (active: boolean) =>
    `relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${active ? activeCls : linkBase}`;

  return (
    <>
      {/* ─── Main bar ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0f2557] shadow-2xl shadow-black/30"
            : isHome
            ? "bg-transparent"
            : "bg-[#0f2557]/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              {/* Amber icon mark */}
              <div className="w-9 h-9 bg-[#f5a623] group-hover:bg-[#d4891a] rounded-xl flex items-center justify-center shadow-md transition-colors duration-200 flex-shrink-0">
                <span className="text-[#0f2557] font-black text-base leading-none select-none">A</span>
              </div>
              <div className="leading-tight">
                <span className="block text-white font-black text-xl tracking-tight">AARTH</span>
                <span className="block text-[#f5a623] font-semibold text-[9px] tracking-widest uppercase -mt-0.5">
                  Construction Inc
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">

              <Link href="/" className={desktopLink(pathname === "/")}>
                Home
                {pathname === "/" && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#f5a623]" />
                )}
              </Link>

              {/* Projects dropdown */}
              <div ref={projectsRef} className="relative">
                <button
                  onClick={() => { setProjectsOpen(!projectsOpen); setResidentialOpen(false); }}
                  aria-expanded={projectsOpen}
                  className={`${desktopLink(isUnderPath(["/projects", "/transformations"]))} flex items-center gap-1`}
                >
                  Projects
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`} />
                  {isUnderPath(["/projects", "/transformations"]) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#f5a623]" />
                  )}
                </button>
                <AnimatePresence>
                  {projectsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-52 bg-[#0f2557] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                    >
                      {projectsDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-5 py-3.5 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-colors border-b border-white/5 last:border-0"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Residential dropdown */}
              <div ref={residentialRef} className="relative">
                <button
                  onClick={() => { setResidentialOpen(!residentialOpen); setProjectsOpen(false); }}
                  aria-expanded={residentialOpen}
                  className={`${desktopLink(isUnderPath(["/residential"]))} flex items-center gap-1`}
                >
                  Residential
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${residentialOpen ? "rotate-180" : ""}`} />
                  {isUnderPath(["/residential"]) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#f5a623]" />
                  )}
                </button>
                <AnimatePresence>
                  {residentialOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-52 bg-[#0f2557] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                    >
                      {residentialDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-5 py-3.5 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-colors border-b border-white/5 last:border-0"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className={desktopLink(pathname === "/about")}>
                About
                {pathname === "/about" && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#f5a623]" />
                )}
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-6 py-2.5 rounded-xl text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 inline-block"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile full-screen drawer ─── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in drawer from right */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-[#091a3e] shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-[#f5a623] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0f2557] font-black text-sm leading-none">A</span>
                  </div>
                  <div className="leading-tight">
                    <span className="block text-white font-black text-lg tracking-tight">AARTH</span>
                    <span className="block text-[#f5a623] font-semibold text-[9px] tracking-widest uppercase -mt-0.5">
                      Construction Inc
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links with staggered entrance */}
              <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-0.5" aria-label="Mobile navigation">
                {/* Home */}
                {[{ href: "/", label: "Home" }].map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center px-4 py-3.5 rounded-xl text-base font-semibold transition-colors ${
                        pathname === item.href ? "text-[#f5a623] bg-white/5" : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Projects group */}
                <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                  <p className="px-4 pt-5 pb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Projects</p>
                  {projectsDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        pathname === item.href ? "text-[#f5a623] bg-white/5" : "text-white/65 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>

                {/* Residential group */}
                <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
                  <p className="px-4 pt-5 pb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Residential</p>
                  {residentialDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        pathname === item.href ? "text-[#f5a623] bg-white/5" : "text-white/65 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>

                {/* About */}
                <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                  <Link
                    href="/about"
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center px-4 py-3.5 rounded-xl text-base font-semibold transition-colors mt-1 ${
                      pathname === "/about" ? "text-[#f5a623] bg-white/5" : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    About
                  </Link>
                </motion.div>
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="px-4 py-5 border-t border-white/10"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full bg-[#f5a623] hover:bg-[#d4891a] text-[#0f2557] font-bold px-4 py-4 rounded-xl text-base text-center transition-colors shadow-lg"
                >
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
