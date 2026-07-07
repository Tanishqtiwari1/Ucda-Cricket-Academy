import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/ud_cricket_academy?igsh=M2d3OXJhNzEwdXMx&utm_source=qr";
const FACEBOOK_URL = "https://www.facebook.com/";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Coaches", to: "/coaches" },
  { label: "Programs", to: "/programs" },
  { label: "Gallery", to: "/gallery" },
  { label: "Achievements", to: "/achievements" },
  { label: "Admissions", to: "/admissions" },
  { label: "Payment", to: "/payment" },
  { label: "Contact", to: "/contact" },
  { label: "FAQs", to: "/faq" },
];

const programs = [
  "Batting Coaching",
  "Bowling Coaching",
  "Fielding Drills",
  "Wicket Keeping",
  "Fitness & Conditioning",
  "Summer Camps",
];

export default function FooterSection() {
  return (
    <footer className="bg-[#030712] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-black text-white tracking-wider">UDCA</span>
              <span className="block text-xs font-mono-jb text-gold tracking-[0.2em]">CRICKET ACADEMY</span>
            </div>
            <p className="text-inertia text-sm leading-relaxed mb-4">
              Dream • Struggle • Success
            </p>
            <p className="text-inertia text-sm leading-relaxed mb-6">
              Professional cricket coaching under ICC Level 1 Certified Coach Shubham Sharma UD.
            </p>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-inertia hover:text-turf hover:bg-turf/10 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-inertia hover:text-turf hover:bg-turf/10 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-inertia text-sm hover:text-turf transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-inertia text-sm hover:text-turf transition-colors duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-inertia text-sm hover:text-turf transition-colors duration-300">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">Programs</h4>
            <ul className="space-y-2.5">
              {programs.map((prog) => (
                <li key={prog}>
                  <Link to="/programs" className="text-inertia text-sm hover:text-turf transition-colors duration-300">
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+918010073509" className="flex items-center gap-2 text-inertia text-sm hover:text-turf transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 8010073509
              </a>
              <a href="mailto:Shubhamvats.8011@gmail.com" className="flex items-center gap-2 text-inertia text-sm hover:text-turf transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                Shubhamvats.8011@gmail.com
              </a>
              <div className="flex items-start gap-2 text-inertia text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Sun City, Near Hi Tech World School, Ghaziabad
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-inertia text-xs">
            © {new Date().getFullYear()} UDCA Cricket Academy Ghaziabad. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-inertia text-xs hover:text-turf transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-inertia text-xs hover:text-turf transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}