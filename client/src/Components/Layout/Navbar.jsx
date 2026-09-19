import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalDetails, navLinks } from "../../Constants/data";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mt-3 md:mt-4 mx-auto w-[92%] md:max-w-fit transition-all duration-300">
      <div className="flex items-center justify-between py-2.5 md:py-3 px-4 md:px-6 rounded-full bg-surface/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-inner-glow">
        <div className="flex items-center gap-4 md:gap-10">
          <span className="font-display-lg text-[15px] md:text-headline-md tracking-tighter text-on-surface whitespace-nowrap">
            {personalDetails.brand}
          </span>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-all duration-300 scale-95 active:scale-90 whitespace-nowrap"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3 ml-0 md:ml-10">
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary animate-pulse"></div>
            <span className="font-label-sm text-[11px] md:text-label-md text-secondary whitespace-nowrap">
              {personalDetails.availability}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center p-1.5 rounded-full text-on-surface hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mt-2 p-3 rounded-2xl bg-surface/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-1.5"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl font-body-md text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-sm opacity-60">
                  chevron_right
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

