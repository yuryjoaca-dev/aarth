import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.05 } },
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy policy for Aarth Construction Inc." url="/privacy-policy" />
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-[#080808] via-[#111111] to-[#1c1c1c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="show" variants={stagger(0.12)}>
            <motion.span variants={fadeUp} className="text-[#f5a623] font-bold text-xs uppercase tracking-widest">Legal</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl font-black text-white mt-4 mb-3 tracking-tight">Privacy Policy</motion.h1>
            <motion.p variants={fadeUp} className="text-slate-300">How we handle your personal data and cookies.</motion.p>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
        className="max-w-4xl mx-auto px-6 py-20 text-slate-600 space-y-8"
      >
        <p className="text-lg leading-relaxed">
          At <strong className="text-slate-900">AARTH CONSTRUCTION INC</strong>, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and safeguard your data.
        </p>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
          <p className="leading-relaxed">
            We may collect personal details such as your name, email, phone number,
            and project information when you use our contact forms.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">2. Use of Information</h2>
          <p className="leading-relaxed">
            The information provided is used solely for communication purposes and
            to provide you with estimates or requested services.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">3. Cookies</h2>
          <p className="leading-relaxed">
            Our website uses cookies to improve user experience and track website
            traffic via analytics tools. You can choose to accept or decline cookies.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">4. Third Parties</h2>
          <p className="leading-relaxed">
            We do not sell or share your personal information with third parties
            without your consent, except when required by law.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">5. Your Rights</h2>
          <p className="leading-relaxed">
            You have the right to request access, correction, or deletion of your
            data at any time by contacting us at{" "}
            <a href="mailto:aarth.construct@gmail.com" className="text-[#f5a623] underline underline-offset-2 hover:text-[#d4891a] transition-colors">
              Aarth.construct@gmail.com
            </a>.
          </p>
        </div>

        <p className="text-sm text-slate-400">
          This Privacy Policy may be updated from time to time. Last updated: {new Date().getFullYear()}.
        </p>

        <Link to="/" className="inline-flex items-center gap-2 text-[#f5a623] font-semibold hover:text-[#d4891a] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </motion.section>
    </>
  );
}
