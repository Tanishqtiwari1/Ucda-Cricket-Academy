import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const BALL_IMG = "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/dded8a49c_WhatsAppImage2026-06-30at20464118.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function AboutSection() {
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
            About Us
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            WHERE PASSION MEETS{" "}
            <span className="text-gold">PERFORMANCE</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="w-20 h-1 bg-turf mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h3 variants={fadeUp} custom={0} className="text-2xl lg:text-3xl font-bold text-white mb-6">
              UDCA Cricket Academy Ghaziabad
            </motion.h3>
            <motion.p variants={fadeUp} custom={1} className="text-inertia leading-relaxed mb-6 text-lg">
              UDCA Cricket Academy is a premier cricket training institution dedicated to nurturing
              the next generation of cricketing talent. Founded with the vision of providing
              world-class cricket coaching in Ghaziabad, we combine professional training
              methodologies with modern infrastructure.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-inertia leading-relaxed mb-8">
              Our structured programs cater to cricketers of all skill levels — from beginners
              taking their first guard to advanced players preparing for competitive tournaments.
              We believe every aspiring cricketer deserves access to quality coaching, proper
              technique development, and a pathway to excellence.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, label: "Vision", text: "Create champions through disciplined coaching" },
                { icon: Eye, label: "Mission", text: "Make professional coaching accessible to all" },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <item.icon className="w-5 h-5 text-turf mb-2" />
                  <h4 className="text-white font-bold text-sm mb-1">{item.label}</h4>
                  <p className="text-inertia text-sm">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div variants={fadeUp} custom={2} className="relative">
            <img
              src={BALL_IMG}
              alt="Close-up of red leather cricket ball on green turf"
              className="rounded-lg w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-turf/20 rounded-lg -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}