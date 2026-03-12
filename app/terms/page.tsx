"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
});

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-[#091a3e] via-[#0f2557] to-[#1a3a7a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)}>
            <motion.span variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest">Legal</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl font-black text-white mt-4 mb-3 tracking-tight">Terms & Conditions</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-300">Please read these terms carefully before using our website.</motion.p>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
        className="max-w-4xl mx-auto px-6 py-20 text-slate-600 space-y-8"
      >
        <p className="text-lg leading-relaxed">
          Welcome to <strong className="text-slate-900">AARTH CONSTRUCTION INC</strong>. By accessing or using our
          website, you agree to comply with and be bound by the following terms
          and conditions. If you do not agree, please do not use our website.
        </p>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">1. Use of Website</h2>
          <p className="leading-relaxed">
            All content on this website is for general informational purposes only.
            While we strive to keep the information accurate, we do not guarantee
            completeness, reliability, or availability. Use of any information is
            at your own risk.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">2. Intellectual Property</h2>
          <p className="leading-relaxed">
            All text, images, graphics, logos, and other content on this site are
            the property of AARTH CONSTRUCTION INC unless otherwise stated. You may
            not copy, reproduce, or distribute our content without prior written consent.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">3. Limitation of Liability</h2>
          <p className="leading-relaxed">
            AARTH CONSTRUCTION INC shall not be held liable for any direct,
            indirect, incidental, or consequential damages resulting from the use
            of this website or reliance on any information provided.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">4. External Links</h2>
          <p className="leading-relaxed">
            Our website may contain links to third-party websites. We are not
            responsible for the content, privacy policies, or practices of these
            external sites.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">5. Changes to Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to update or modify these Terms & Conditions at
            any time. Updates will be effective immediately upon posting on this page.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">6. Governing Law</h2>
          <p className="leading-relaxed">
            These Terms & Conditions are governed by the laws of Alberta, Canada.
            Any disputes shall be resolved in the applicable courts of Alberta.
          </p>
        </div>

        <p className="text-sm text-slate-400">Last updated: {new Date().getFullYear()}</p>

        <Link href="/" className="inline-flex items-center gap-2 text-[#f5a623] font-semibold hover:text-[#d4891a] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </motion.section>
    </>
  );
}
