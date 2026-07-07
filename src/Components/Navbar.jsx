import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Coaches", to: "/coaches" },
  { label: "Programs", to: "/programs" },
  { label: "Gallery", to: "/gallery" },
  { label: "Achievements", to: "/achievements" },
  { label: "Admissions", to: "/admissions" },
  { label: "Payment", to: "/payment" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050A18]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#16DB65]/10"
          : "bg-[#050A18]/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between gap-4 h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
  <img
    src="/images/UDCA_logo.jpg"
    alt="UDCA Cricket Academy Logo"
    className="h-12 lg:h-16 w-auto object-contain"
  />
</Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`relative text-base font-medium transition-colors duration-300 tracking-normal uppercase pb-1 whitespace-nowrap ${
                    isActive ? "text-turf" : "text-inertia hover:text-turf"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-turf rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+918010073509"
              className="flex items-center gap-1.5 text-base text-inertia hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span className="font-mono-jb">8010073509</span>
            </a>
            <Link
              to="/payment"
              className="px-5 py-2.5 bg-turf text-[#050A18] font-bold text-sm rounded tracking-wide hover:shadow-[0_0_25px_rgba(22,219,101,0.4)] transition-all duration-300 whitespace-nowrap"
            >
              JOIN ACADEMY
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : (
              <div className="flex gap-1.5">
                <div className="w-0.5 h-6 bg-white rounded-full" />
                <div className="w-0.5 h-6 bg-turf rounded-full" />
                <div className="w-0.5 h-6 bg-white rounded-full" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050A18]/98 backdrop-blur-lg border-t border-[#16DB65]/10"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-base font-medium transition-colors tracking-wide uppercase ${
                      isActive ? "text-turf" : "text-inertia hover:text-turf"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/payment"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-6 py-3 bg-turf text-[#050A18] font-bold text-sm rounded tracking-wide mt-4"
              >
                JOIN ACADEMY
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}