import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Users, Dumbbell, Award } from "lucide-react";

const HERO_IMG = "/images/hero-player.png";

const badges = [
  { icon: Award, label: "ICC Level 1 Certified" },
  { icon: Shield, label: "Professional Coaching" },
  { icon: Dumbbell, label: "Modern Facilities" },
  { icon: Users, label: "All Age Groups" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="UDCA star player in batting stance on the field"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A18] via-[#050A18]/85 to-[#050A18]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-transparent to-[#050A18]/30" />
      </div>

      {/* Decorative Slash */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#16DB65]/5 to-transparent transform skew-x-[-22deg] origin-top-right" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-[#E5B35A]/10 mb-8"
          >
            <Award className="w-4 h-4 text-gold" />
            <span className="text-gold font-mono-jb text-xs tracking-wider">
              ICC LEVEL 1 CERTIFIED ACADEMY
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            TRAIN LIKE A{" "}
            <span className="text-turf">CHAMPION.</span>
            <br />
            PLAY LIKE A{" "}
            <span className="text-gold">PROFESSIONAL.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg lg:text-xl text-inertia leading-relaxed mb-10 max-w-2xl"
          >
            Professional cricket coaching under an ICC Level 1 Certified Coach
            with world-class training facilities for aspiring cricketers of all
            age groups.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <Link
              to="/admissions"
              className="px-8 py-4 bg-turf text-[#050A18] font-bold text-base tracking-wide rounded hover:shadow-[0_0_30px_rgba(22,219,101,0.4)] transition-all duration-300 text-center"
            >
              JOIN NOW
            </Link>
            <a
              href="https://wa.me/918010073509"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/20 text-white font-bold text-base tracking-wide rounded hover:border-gold hover:text-gold transition-all duration-300 text-center"
            >
              CONTACT COACH
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {badges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm rounded border border-white/10"
              >
                <badge.icon className="w-5 h-5 text-turf flex-shrink-0" />
                <span className="text-sm font-medium text-white/80">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}