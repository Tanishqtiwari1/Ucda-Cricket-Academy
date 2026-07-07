import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/d79f71201_WhatsAppImage2026-06-30at2046414.jpg", cat: "Events", alt: "UDCA team celebrating with trophy at SRG Cricket Ground" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/48973f826_WhatsAppImage2026-06-30at2046415.jpg", cat: "Training Sessions", alt: "Batsman playing a powerful shot under floodlights" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/daef847ba_WhatsAppImage2026-06-30at2355201.jpg", cat: "Events", alt: "Three coaches with trophy at DPS HRIT Cup tournament" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/07853e91d_WhatsAppImage2026-06-30at2355202.jpg", cat: "Events", alt: "Team and coaches with trophies at DPS HRIT Cup 2024" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/425a37013_WhatsAppImage2026-06-30at235520.jpg", cat: "Students", alt: "Young cricketers team photo at Trident Sports Club" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/e0bd56026_WhatsAppImage2026-06-30at2355221.jpg", cat: "Coach", alt: "Coach in discussion at the cricket ground" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/1798c9466_WhatsAppImage2026-06-30at2355241.jpg", cat: "Coach", alt: "Coach Shubham Sharma UD on the field" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/dded8a49c_WhatsAppImage2026-06-30at20464118.jpg", cat: "Coach", alt: "Coach Shubham holding trophy on cricket ground" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/96aa3c263_WhatsAppImage2026-06-30at2355211.jpg", cat: "Training Sessions", alt: "Player training session on the ground" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/9c9b7e3dd_WhatsAppImage2026-06-30at2355212.jpg", cat: "Training Sessions", alt: "Wicket keeper practicing with gloves" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/c50e025e2_WhatsAppImage2026-06-30at235522.jpg", cat: "Training Sessions", alt: "Batting practice session at the nets" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/b3cfa0d6d_WhatsAppImage2026-06-30at2355232.jpg", cat: "Training Sessions", alt: "Bowling practice during evening session" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/90499f160_WhatsAppImage2026-06-30at235524.jpg", cat: "Training Sessions", alt: "Fielding drills during training" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/28ba8d491_WhatsAppImage2026-06-30at235521.jpg", cat: "Events", alt: "Award ceremony after a tournament match" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/5ba161e88_WhatsAppImage2026-06-30at2355222.jpg", cat: "Events", alt: "Player of the Match award ceremony" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/b39596847_WhatsAppImage2026-06-30at2355231.jpg", cat: "Events", alt: "Team receiving trophy after tournament win" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/05a8f5d8b_WhatsAppImage2026-06-30at235523.jpg", cat: "Events", alt: "Coach lifting winning trophy at tournament" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/47e6880f6_WhatsAppImage2026-06-30at2355242.jpg", cat: "Events", alt: "Team group photo with tournament trophies" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/6baee3434_WhatsAppImage2026-06-30at2355251.jpg", cat: "Events", alt: "Best Coach award presentation" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/bf7e26ac0_WhatsAppImage2026-06-30at2355252.jpg", cat: "Students", alt: "Students team photo with medals" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/12add003d_WhatsAppImage2026-06-30at2356051.jpg", cat: "Facilities", alt: "Automatic bowling machine at the academy ground" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/1a22cd042_WhatsAppImage2026-06-30at2356052.jpg", cat: "Facilities", alt: "Coach setting up the bowling machine for practice" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/ab3852334_students1.png", cat: "Students", alt: "UDCA students team photo at DPS HRIT Cup 2024 with trophies" },
  { src: "https://media.base44.com/images/public/6a43e07b6516b719b7a0450e/f188094d2_training1.png", cat: "Training Sessions", alt: "UDCA student practicing fielding dive during golden-hour training session" },
];

const categories = ["All", "Training Sessions", "Coach", "Students", "Events", "Facilities"];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.cat === activeCategory);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const navigate = (dir) => {
    if (lightbox === null) return;
    const newIndex = (lightbox + dir + filtered.length) % filtered.length;
    setLightbox(newIndex);
  };

  return (
    <section className="pt-8 pb-24 lg:pb-32 bg-midnight-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5B35A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.span variants={fadeUp} custom={0} className="font-mono-jb text-gold text-sm tracking-[0.3em] uppercase">
            Gallery
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            INSIDE THE <span className="text-turf">ACADEMY</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="w-20 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono-jb tracking-wider rounded transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-turf text-[#050A18]"
                  : "bg-white/5 text-inertia hover:text-white border border-white/10"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src + img.cat}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer rounded-lg overflow-hidden aspect-square relative"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#050A18]/0 group-hover:bg-[#050A18]/40 transition-all duration-300 flex items-end">
                  <span className="text-white text-xs font-mono-jb tracking-wider p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.cat.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 lg:left-8 text-white/70 hover:text-white z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 lg:right-8 text-white/70 hover:text-white z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}