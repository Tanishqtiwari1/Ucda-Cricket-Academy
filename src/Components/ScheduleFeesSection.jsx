import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Calendar, Users, Layers } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const ageGroups = ["Under-8", "Under-10", "Under-12", "Under-14", "Under-16", "Under-19", "Senior"];

export default function ScheduleFeesSection() {
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
            Schedule & Pricing
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            TRAINING <span className="text-turf">SCHEDULE</span> & FEES
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="w-20 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Schedule Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="lg:col-span-1 p-8 bg-white/5 rounded-lg border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-turf/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-turf" />
              </div>
              <h3 className="text-white font-bold text-xl">Training Time</h3>
            </div>
            <div className="text-center py-6 mb-6 bg-white/5 rounded-lg border border-turf/20">
              <span className="font-mono-jb text-turf text-3xl lg:text-4xl font-bold">4:00 PM</span>
              <span className="text-inertia mx-3 text-lg">—</span>
              <span className="font-mono-jb text-turf text-3xl lg:text-4xl font-bold">7:00 PM</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-gold" />
                <span className="text-inertia text-sm">Monday to Saturday</span>
              </div>
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-gold" />
                <span className="text-inertia text-sm">Flexible batch timings available</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-gold" />
                <span className="text-inertia text-sm">All age groups supported</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-white font-bold text-sm mb-3">Age Groups</h4>
              <div className="flex flex-wrap gap-2">
                {ageGroups.map((ag) => (
                  <span key={ag} className="px-3 py-1 text-xs font-mono-jb text-turf bg-turf/10 rounded border border-turf/20">
                    {ag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Fee Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 grid sm:grid-cols-3 gap-6"
          >
            {/* Admission Fee */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="relative p-6 rounded-lg border-2 border-gold/40 bg-gradient-to-b from-[#E5B35A]/10 to-transparent overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <span className="font-mono-jb text-gold text-xs tracking-[0.3em] uppercase">One Time</span>
              <h3 className="text-white font-black text-xl mt-2 mb-5">Admission Fee</h3>
              <div className="mb-6">
                <span className="font-mono-jb text-gold text-4xl lg:text-5xl font-bold">₹2000</span>
              </div>
              <ul className="space-y-3 mb-6 text-inertia text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Charged once at enrollment
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Skill assessment included
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Academy kit orientation
                </li>
              </ul>
              <Link
                to="/payment"
                className="block w-full py-3.5 bg-gold text-[#050A18] font-bold text-sm text-center rounded tracking-wide hover:shadow-[0_0_25px_rgba(229,179,90,0.3)] transition-all duration-300"
              >
                ENROLL NOW
              </Link>
            </motion.div>

            {/* Normal Training */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="relative p-6 rounded-lg border-2 border-turf/40 bg-gradient-to-b from-[#16DB65]/10 to-transparent overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-turf/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <span className="font-mono-jb text-turf text-xs tracking-[0.3em] uppercase">Recurring</span>
              <h3 className="text-white font-black text-xl mt-2 mb-5">Normal Training</h3>
              <div className="mb-6">
                <span className="font-mono-jb text-turf text-4xl lg:text-5xl font-bold">₹2000</span>
                <span className="text-inertia text-sm ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-6 text-inertia text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-turf" />
                  6 days/week group coaching
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-turf" />
                  All facilities included
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-turf" />
                  Match practice sessions
                </li>
              </ul>
              <Link
                to="/payment"
                className="block w-full py-3.5 bg-turf text-[#050A18] font-bold text-sm text-center rounded tracking-wide hover:shadow-[0_0_25px_rgba(22,219,101,0.3)] transition-all duration-300"
              >
                JOIN NOW
              </Link>
            </motion.div>

            {/* Personal Training */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="relative p-6 rounded-lg border-2 border-gold/40 bg-gradient-to-b from-[#E5B35A]/10 to-transparent overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <span className="font-mono-jb text-gold text-xs tracking-[0.3em] uppercase">Recurring</span>
              <h3 className="text-white font-black text-xl mt-2 mb-5">Personal Training</h3>
              <div className="mb-6">
                <span className="font-mono-jb text-gold text-4xl lg:text-5xl font-bold">₹8000</span>
                <span className="text-inertia text-sm ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-6 text-inertia text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  1-on-1 dedicated coaching
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Personalized training plan
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Video analysis & feedback
                </li>
              </ul>
              <Link
                to="/payment"
                className="block w-full py-3.5 bg-gold text-[#050A18] font-bold text-sm text-center rounded tracking-wide hover:shadow-[0_0_25px_rgba(229,179,90,0.3)] transition-all duration-300"
              >
                JOIN NOW
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}