import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What age groups does UDCA Cricket Academy train?",
    a: "UDCA Cricket Academy in Ghaziabad welcomes cricketers of all age groups, from young beginners just picking up a bat for the first time to advanced players preparing for district, state, and tournament-level competition. Our coaching programs are structured so that each age group receives training suited to their physical development and skill level.",
  },
  {
    q: "Who is the head coach at UDCA Cricket Academy?",
    a: "UDCA Cricket Academy is led by Shubham Sharma UD, an ICC Level 1 Certified Coach with years of hands-on experience developing young cricketers in Ghaziabad. His coaching philosophy centers on technique-first fundamentals, mental toughness, and match awareness.",
  },
  {
    q: "What training programs are available?",
    a: "We offer Beginner Cricket Coaching, Advanced Coaching, Match Preparation, Bowling Coaching, Batting and Catching Practice, Fielding Drills, Fitness & Conditioning, and seasonal Winter Cricket Camps. Students can also choose between Normal Training (group sessions) and Personal Training (one-on-one coaching) depending on their goals and budget.",
  },
  {
    q: "How much does cricket coaching cost at UDCA?",
    a: "Admission to the academy requires a one-time Admission Fee of ₹2000. Normal Training costs ₹2000 per month, while Personal Training, which includes individual attention and a customized training plan, costs ₹8000 per month. Full details and online payment options are available on our Payment page.",
  },
  {
    q: "Where is the academy located?",
    a: "UDCA Cricket Academy is located in Sun City, near Hi-Tech World School, Ghaziabad, offering easy access to players across the region with well-maintained cricket grounds and training facilities including automatic bowling machines.",
  },
  {
    q: "How do I enroll my child at UDCA Cricket Academy?",
    a: "Enrolling is simple — visit our Admissions page to learn about the enrollment process, or contact the coach directly via WhatsApp or phone. Once you're ready, head to the Payment page to complete your admission fee and select a training program.",
  },
];

export default function FAQPage() {
  return (
    <div className="pt-28 pb-24 lg:pb-32 bg-midnight min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#16DB65]/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="font-mono-jb text-gold text-sm tracking-[0.3em] uppercase">Help Center</span>
          <h1 className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            CRICKET COACHING <span className="text-turf">FAQS</span>
          </h1>
          <div className="w-20 h-1 bg-turf mx-auto mt-6" />
          <p className="text-inertia mt-6 max-w-2xl mx-auto text-lg">
            Everything you need to know about training programs, fees, and enrollment at UDCA Cricket Academy, Ghaziabad's professional cricket coaching institution led by ICC Level 1 Certified Coach Shubham Sharma UD.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 bg-white/5 rounded-lg border border-white/10"
            >
              <h2 className="text-white font-bold text-lg mb-2">{item.q}</h2>
              <p className="text-inertia text-sm leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}