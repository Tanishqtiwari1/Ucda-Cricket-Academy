import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Swords, Star, Medal, Target } from "lucide-react";

const TROPHY_IMG = "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/d79f71201_WhatsAppImage2026-06-30at2046414.jpg";
const STAR_PLAYER_IMG = "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/210eda8c8_StarPlayer.jpg";

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-mono-jb text-4xl lg:text-5xl font-bold text-turf">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { label: "Students Trained", value: 500, suffix: "+", icon: Users },
  { label: "Matches Played", value: 200, suffix: "+", icon: Swords },
  { label: "Tournament Wins", value: 25, suffix: "+", icon: Trophy },
  { label: "Years of Excellence", value: 5, suffix: "+", icon: Star },
];

const achievements = [
  { icon: Trophy, title: "Tournament Victories", desc: "Multiple championship wins in district and state-level cricket tournaments." },
  { icon: Medal, title: "Player Selections", desc: "Students selected for district, state, and representative cricket teams." },
  { icon: Star, title: "Student Success Stories", desc: "Numerous students progressing to professional cricket careers and higher academies." },
  { icon: Target, title: "Individual Awards", desc: "Players earning Man of the Match, Best Bowler, and Best Batsman awards." },
  { icon: Trophy, title: "Academy Milestones", desc: "Recognized as a leading cricket training institution in the Ghaziabad region." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function AchievementsSection() {
  return (
    <section className="py-24 lg:py-32 bg-midnight relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#16DB65]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="font-mono-jb text-turf text-sm tracking-[0.3em] uppercase">
            Our Legacy
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            ACHIEVEMENTS & <span className="text-gold">MILESTONES</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="w-20 h-1 bg-turf mx-auto mt-6" />
        </motion.div>

        {/* Stats Counters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="text-center p-6 bg-white/5 rounded-lg border border-white/5"
            >
              <stat.icon className="w-6 h-6 text-gold mx-auto mb-3" />
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-inertia text-sm mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Star Player Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 relative rounded-lg overflow-hidden border border-gold/30"
        >
          <img
            src={STAR_PLAYER_IMG}
            alt="UDCA star player in match action"
            className="w-full h-72 lg:h-[28rem] object-contain bg-black"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#050A18]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 lg:p-10">
            <span className="inline-block px-3 py-1 bg-gold/20 border border-gold/40 rounded-full text-gold font-mono-jb text-xs tracking-wider mb-3">
              STAR PLAYER
            </span>
            <h3 className="text-white font-black text-2xl lg:text-3xl">A UDCA SUCCESS STORY</h3>
            <p className="text-inertia text-sm lg:text-base mt-2 max-w-xl">
              Proof of what disciplined coaching can achieve — one of our own now competing at the highest levels.
            </p>
          </div>
        </motion.div>

        {/* Achievements */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src={TROPHY_IMG}
              alt="Cricket trophies and awards display"
              className="w-full h-full object-cover aspect-video"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="flex gap-4 p-5 bg-white/5 rounded-lg border border-white/5 hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <ach.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{ach.title}</h3>
                  <p className="text-inertia text-sm leading-relaxed">{ach.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}