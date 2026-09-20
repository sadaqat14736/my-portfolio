import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hoverButton, tapButton } from "../../animations";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          whileHover={hoverButton}
          whileTap={tapButton}
          aria-label="Scroll to top of page"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-surface-container-high/90 border border-white/15 text-on-surface shadow-2xl backdrop-blur-md hover:border-primary/40 hover:text-primary transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl block">
            arrow_upward
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
