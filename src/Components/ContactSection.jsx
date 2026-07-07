import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/Components/ui/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    age: "",
    experience: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Build WhatsApp message
    const text = `Hello Coach,\n\nI'd like to inquire about joining UDCA Cricket Academy.\n\nStudent Name: ${form.studentName}\nParent Name: ${form.parentName}\nPhone: ${form.phone}\nAge: ${form.age}\nCricket Experience: ${form.experience}\nMessage: ${form.message}`;
    const url = `https://wa.me/918010073509?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSending(false);
    toast({ title: "Redirecting to WhatsApp", description: "Your inquiry is being sent to Coach Shubham." });
  };

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
            Get In Touch
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            JOIN THE <span className="text-gold">ACADEMY</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="w-20 h-1 bg-turf mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Phone, label: "Phone", value: "+91 8010073509", href: "tel:+918010073509" },
              { icon: MessageCircle, label: "WhatsApp", value: "+91 8010073509", href: "https://wa.me/918010073509" },
              { icon: Mail, label: "Email", value: "Shubhamvats.8011@gmail.com", href: "mailto:Shubhamvats.8011@gmail.com" },
              { icon: MapPin, label: "Address", value: "Sun City, Near Hi Tech World School, Ghaziabad" },
              { icon: Clock, label: "Training Hours", value: "Mon–Sat: 4:00 PM – 7:00 PM" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-turf/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-turf/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-turf" />
                    </div>
                    <div>
                      <span className="text-inertia text-xs font-mono-jb tracking-wider">{item.label.toUpperCase()}</span>
                      <p className="text-white text-sm mt-0.5">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-turf/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-turf" />
                    </div>
                    <div>
                      <span className="text-inertia text-xs font-mono-jb tracking-wider">{item.label.toUpperCase()}</span>
                      <p className="text-white text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Quick Action Buttons */}
            <motion.div variants={fadeUp} custom={5} className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="https://wa.me/918010073509"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-turf text-[#050A18] font-bold text-sm rounded tracking-wide hover:shadow-[0_0_25px_rgba(22,219,101,0.3)] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WHATSAPP COACH
              </a>
              <a
                href="tel:+918010073509"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-gold/40 text-gold font-bold text-sm rounded tracking-wide hover:bg-gold/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                CALL NOW
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-white font-bold text-xl mb-6">Inquiry Form</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">STUDENT NAME *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={form.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-turf focus:outline-none transition-colors placeholder:text-white/20"
                    placeholder="Enter student name"
                  />
                </div>
                <div>
                  <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">PARENT NAME *</label>
                  <input
                    type="text"
                    name="parentName"
                    value={form.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-turf focus:outline-none transition-colors placeholder:text-white/20"
                    placeholder="Enter parent name"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-turf focus:outline-none transition-colors placeholder:text-white/20"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">AGE *</label>
                  <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-turf focus:outline-none transition-colors placeholder:text-white/20"
                    placeholder="Student age"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">CRICKET EXPERIENCE</label>
                <select
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-turf focus:outline-none transition-colors"
                >
                  <option value="" className="bg-[#0A1228]">Select experience level</option>
                  <option value="Beginner" className="bg-[#0A1228]">Beginner — New to cricket</option>
                  <option value="Intermediate" className="bg-[#0A1228]">Intermediate — Some experience</option>
                  <option value="Advanced" className="bg-[#0A1228]">Advanced — Competitive player</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">MESSAGE</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-turf focus:outline-none transition-colors resize-none placeholder:text-white/20"
                  placeholder="Any questions or special requirements..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-turf text-[#050A18] font-bold text-sm tracking-wide rounded hover:shadow-[0_0_30px_rgba(22,219,101,0.4)] transition-all duration-300 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {sending ? "SENDING..." : "SUBMIT & CONNECT ON WHATSAPP"}
              </button>
            </form>

            {/* Map */}
            <div className="mt-6 rounded-lg overflow-hidden border border-white/10">
              <iframe
                title="UDCA Cricket Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6!2d77.4961564!3d28.6718353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf346b9e9bfd3%3A0xfeda507756ea256d!2sUDCA+Cricket+Academy+Ghaziabad!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}