import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalDetails, navLinks } from "../../Constants/data";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(`#${sectionIds[i]}`);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mt-3 md:mt-4 mx-auto w-[92%] md:max-w-fit transition-all duration-300">
      <div className="flex items-center justify-between py-2.5 md:py-3 px-4 md:px-6 rounded-full bg-surface/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-inner-glow">
        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="#"
            className="font-display-lg text-[15px] md:text-headline-md tracking-tighter text-on-surface hover:text-primary transition-colors whitespace-nowrap"
          >
            {personalDetails.brand}
          </a>
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  className={`px-3 py-1.5 rounded-full font-body-md text-sm transition-all duration-300 whitespace-nowrap relative ${
                    isActive
                      ? "text-primary font-semibold bg-primary/10"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                  }`}
                  href={link.href}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavDot"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3 ml-0 md:ml-8">
          <div className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary animate-pulse"></div>
            <span className="font-label-sm text-[11px] md:text-label-md text-secondary whitespace-nowrap font-medium">
              {personalDetails.availability}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center p-1.5 rounded-full text-on-surface hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
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
            className="md:hidden mt-2 p-3 rounded-2xl bg-surface/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-1.5"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl font-body-md transition-all flex items-center justify-between ${
                    isActive
                      ? "text-primary font-semibold bg-primary/10"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-sm opacity-60">
                    chevron_right
                  </span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

