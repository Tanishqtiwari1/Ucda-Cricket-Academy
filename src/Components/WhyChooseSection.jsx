import React from "react";
import { motion } from "framer-motion";
import {
  Award, User, TrendingUp, Swords, Building2,
  Dumbbell, ShieldCheck, BarChart3,
} from "lucide-react";

const reasons = [
  { icon: Award, title: "ICC Certified Coaching", desc: "Training under an ICC Level 1 Certified Coach ensuring international coaching standards." },
  { icon: User, title: "Individual Attention", desc: "Limited batch sizes to provide personalized coaching and focused skill development." },
  { icon: TrendingUp, title: "Structured Development", desc: "Progressive skill-building programs designed for systematic improvement." },
  { icon: Swords, title: "Match Practice", desc: "Regular match simulations and competitive practice to build match temperament." },
  { icon: Building2, title: "Modern Infrastructure", desc: "Professional-grade facilities including turf wickets, bowling machines, and nets." },
  { icon: Dumbbell, title: "Fitness & Conditioning", desc: "Dedicated fitness programs to build strength, agility, and endurance." },
  { icon: ShieldCheck, title: "Safe Environment", desc: "Safe and professional training environment with proper equipment and supervision." },
  { icon: BarChart3, title: "Performance Tracking", desc: "Regular assessments and progress reports to track every player's development." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function WhyChooseSection() {
  return (
    <section className="pt-20 pb-24 lg:pb-32 bg-midnight-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5B35A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="font-mono-jb text-gold text-sm tracking-[0.3em] uppercase">
            Why Choose Us
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            THE UDCA <span className="text-turf">ADVANTAGE</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="w-20 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="group p-6 bg-white/5 rounded-lg border border-white/5 hover:border-turf/30 transition-all duration-500 hover:bg-white/[0.07]"
            >
              <div className="w-12 h-12 rounded-lg bg-turf/10 flex items-center justify-center mb-4 group-hover:bg-turf/20 transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-turf" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{reason.title}</h3>
              <p className="text-inertia text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}