import React from "react";
import { motion } from "framer-motion";
import {
  Tent, Cog, Grid3X3, Sun, Dumbbell, Car, DoorOpen, Wrench,
} from "lucide-react";

const facilities = [
  { icon: Tent, title: "Turf Practice Wickets", desc: "Professional-grade turf wickets replicating match conditions for realistic practice." },
  { icon: Cog, title: "Bowling Machine", desc: "Automated bowling machines for consistent batting practice at various speeds and styles." },
  { icon: Grid3X3, title: "Practice Nets", desc: "Multiple well-maintained practice nets for simultaneous batting and bowling sessions." },
  { icon: Sun, title: "Floodlights", desc: "High-quality floodlight facility enabling evening training sessions after school hours." },
  { icon: Dumbbell, title: "Fitness Training Area", desc: "Dedicated fitness zone equipped for sport-specific strength and conditioning." },
  { icon: Car, title: "Parking Facility", desc: "Ample and secure parking space for parents and students within the academy premises." },
  { icon: DoorOpen, title: "Changing Rooms", desc: "Clean and well-maintained changing rooms with storage lockers for players." },
  { icon: Wrench, title: "Professional Equipment", desc: "Top-quality coaching equipment including side-arm throwers, speed guns, and cones." },
];

const FACILITY_IMG = "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/e031bca15_WhatsAppImage2026-06-30at20464113.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function FacilitiesSection() {
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
            Infrastructure
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            WORLD-CLASS <span className="text-gold">FACILITIES</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="w-20 h-1 bg-turf mx-auto mt-6" />
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-lg overflow-hidden"
        >
          <img
            src={FACILITY_IMG}
            alt="UDCA Cricket Academy training facility with floodlights"
            className="w-full h-64 lg:h-96 object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {facilities.map((facility, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="group p-6 bg-white/5 rounded-lg border border-white/5 hover:border-gold/30 transition-all duration-500 hover:bg-white/[0.07]"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <facility.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{facility.title}</h3>
              <p className="text-inertia text-sm leading-relaxed">{facility.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}