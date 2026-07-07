import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const IMGS = {
  beginner: "/images/beginner.jpg",
  advanced: "/images/advanced.jpg",
  match: "/images/match.jpg",
  bowling: "/images/bowling.jpg",
  batting: "/images/batting.jpg",
  fielding: "/images/fielding.jpg",
  wicket: "/images/wicket.jpg",
  fitness: "/images/fitness.jpg",
  summer: "/images/summer.jpg",
};

const programs = [
  { title: "Beginner Cricket Coaching", desc: "Foundation program for young cricketers learning the basics of batting, bowling, and fielding with proper technique.", img: IMGS.beginner },
  { title: "Advanced Coaching", desc: "Elite training for serious cricketers focusing on match strategy, advanced techniques, and tournament readiness.", img: IMGS.advanced },
  { title: "Match Preparation", desc: "Intensive match simulation sessions to build temperament, decision-making, and competitive match fitness.", img: IMGS.match },
  { title: "Bowling Coaching", desc: "Specialized coaching covering pace, spin, swing, and seam bowling with biomechanical analysis.", img: IMGS.bowling },
  { title: "Catching Practice", desc: "Focused fielding drills to improve catching technique, reaction time, hand-eye coordination, and match awareness.", img: IMGS.batting },
  { title: "Fielding Drills", desc: "Agility, reflexes, and catching drills to develop sharp, athletic fielding skills.", img: IMGS.fielding },
  { title: "Six Hitting Practice", desc: "Power-hitting sessions designed to improve timing, bat speed, shot selection, and boundary-clearing ability.", img: IMGS.wicket },
  { title: "Fitness & Conditioning", desc: "Sport-specific fitness programs for strength, speed, flexibility, and injury prevention.", img: IMGS.fitness },
  { title: "Winter Cricket Camps", desc: "Seasonal winter coaching camp featuring intensive training, match practice, fitness sessions, and skill development for players of all age groups.", img: IMGS.summer },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5 } }),
};

export default function ProgramsSection() {
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
            Our Programs
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            COACHING <span className="text-gold">PROGRAMS</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="w-20 h-1 bg-turf mx-auto mt-6" />
          <motion.p variants={fadeUp} custom={3} className="text-inertia mt-6 max-w-2xl mx-auto text-lg">
            Comprehensive cricket training programs designed for every skill level — from first-timers to tournament-ready professionals.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {programs.map((program, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="group relative rounded-lg overflow-hidden bg-white/5 border border-white/5 hover:border-turf/30 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={program.img}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-sm mb-2 leading-snug">{program.title}</h3>
                <p className="text-inertia text-xs leading-relaxed mb-3">{program.desc}</p>
                <a
                  href="https://wa.me/918010073509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-turf text-xs font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}