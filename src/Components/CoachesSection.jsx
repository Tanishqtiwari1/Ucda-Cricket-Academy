import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Target } from "lucide-react";

const COACH_IMG = "/images/COACH_IMG.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function CoachesSection() {
  return (
    <section className="py-24 lg:py-32 bg-midnight relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#16DB65]/30 to-transparent" />
      <div className="absolute -right-40 top-20 w-80 h-80 rounded-full bg-[#16DB65]/3 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp} custom={0} className="font-mono-jb text-turf text-sm tracking-[0.3em] uppercase">
            Our Trainers
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            MEET THE <span className="text-gold">COACH</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="w-20 h-1 bg-turf mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-5 gap-12 items-center"
        >
          <motion.div variants={fadeUp} custom={0} className="lg:col-span-2 relative">
            <div className="relative">
              <img
                src={COACH_IMG}
                alt="Head Coach Shubham Sharma UD portrait"
                className="rounded-lg w-full object-cover aspect-[3/4]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#050A18] to-transparent">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/20 border border-gold/30 rounded-full">
                  <Award className="w-4 h-4 text-gold" />
                  <span className="text-gold font-mono-jb text-xs tracking-wider">ICC LEVEL 1</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <motion.span variants={fadeUp} custom={0} className="font-mono-jb text-turf text-sm tracking-[0.2em]">
              HEAD COACH & FOUNDER
            </motion.span>
            <motion.h3 variants={fadeUp} custom={1} className="text-3xl lg:text-4xl font-black text-white mt-3 mb-2 tracking-tight">
              SHUBHAM SHARMA UD
            </motion.h3>
            <motion.p variants={fadeUp} custom={2} className="text-gold font-mono-jb text-sm tracking-wider mb-6">
              ICC LEVEL 1 CERTIFIED COACH
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-inertia leading-relaxed mb-6 text-lg">
              An ICC Level 1 Certified Coach with a deep passion for developing young cricketers,
              Coach Shubham Sharma UD brings professional expertise and a player-first coaching
              philosophy to every training session at UDCA.
            </motion.p>
            <motion.div variants={fadeUp} custom={4} className="space-y-4">
              {[
                { icon: BookOpen, label: "Coaching Philosophy", desc: "Technique-first approach with emphasis on mental strength, match awareness, and continuous skill development." },
                { icon: Target, label: "Training Methodology", desc: "Structured programs combining net practice, match simulations, video analysis, and fitness conditioning." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                  <item.icon className="w-5 h-5 text-turf flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.label}</h4>
                    <p className="text-inertia text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}