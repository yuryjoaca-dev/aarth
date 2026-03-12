import { ShieldCheck, BadgeCheck, Wrench, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const badges = [
  { icon: BadgeCheck, title: "Licensed & Insured", sub: "Alberta, Canada" },
  { icon: ShieldCheck, title: "WCB Covered", sub: "Worker safety protected" },
  { icon: Wrench, title: "1-Year Warranty", sub: "On all workmanship" },
  { icon: ClipboardList, title: "Free Estimates", sub: "No obligation quotes" },
];

export default function TrustSignals() {
  return (
    <section className="bg-stone-50 border-y border-stone-150">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-200"
        >
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <motion.div key={b.title} variants={fadeUp} className="flex flex-col items-center text-center gap-3 px-6 py-10">
                <Icon className="w-4 h-4 text-[#C9963B]" />
                <div>
                  <p className="font-medium text-slate-800 text-xs uppercase tracking-widest leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>{b.title}</p>
                  <p className="text-slate-400 text-xs mt-1 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{b.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
