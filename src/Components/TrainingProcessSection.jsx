import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Search, UserCheck, Repeat, Swords, BarChart3 } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Registration", desc: "Complete your enrollment and join the UDCA family with a simple admission process." },
  { icon: Search, title: "Skill Assessment", desc: "Initial evaluation of your current skill level, strengths, and areas for improvement." },
  { icon: UserCheck, title: "Personalized Coaching", desc: "Custom training plan designed specifically for your goals and development needs." },
  { icon: Repeat, title: "Practice Sessions", desc: "Regular structured practice covering batting, bowling, fielding, and fitness." },
  { icon: Swords, title: "Match Exposure", desc: "Competitive match simulations and tournament participation for real-game experience." },
  { icon: BarChart3, title: "Performance Review", desc: "Regular progress tracking and feedback to ensure continuous improvement." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

export default function TrainingProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-midnight-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5B35A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="font-mono-jb text-gold text-sm tracking-[0.3em] uppercase">
            Your Journey
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            THE PATH TO <span className="text-turf">EXCELLENCE</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="w-20 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-turf/50 via-gold/30 to-turf/50" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className={`relative lg:flex items-center ${isLeft ? "" : "lg:flex-row-reverse"} lg:mb-0 mb-0`}
                >
                  {/* Content */}
                  <div className={`lg:w-[calc(50%-40px)] ${isLeft ? "lg:pr-8 lg:text-right" : "lg:pl-8"}`}>
                    <div className={`p-6 bg-white/5 rounded-lg border border-white/5 hover:border-turf/20 transition-all duration-300 ${isLeft ? "lg:ml-auto" : ""}`}>
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-lg bg-turf/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-5 h-5 text-turf" />
                        </div>
                        <h3 className="text-white font-bold text-lg">{step.title}</h3>
                      </div>
                      <p className={`text-inertia text-sm leading-relaxed ${isLeft ? "lg:text-right" : ""}`}>{step.desc}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050A18] border-2 border-turf items-center justify-center z-10">
                    <span className="font-mono-jb text-turf text-sm font-bold">{i + 1}</span>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block lg:w-[calc(50%-40px)]" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}