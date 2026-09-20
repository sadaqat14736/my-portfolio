import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./index.css";
import Home from "./Pages/Home";
import CustomCursor from "./Components/Ui/CustomCursor";

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") return true;
    return !window.sessionStorage.getItem("portfolio-loader-shown");
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handlePointerMove = (e) => {
      const card = e.target.closest(".glow-hover");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    document.body.style.overflow = "hidden";

    const progressInterval = window.setInterval(() => {
      setProgress((value) => (value >= 92 ? value : value + 2));
    }, 45);

    const finishTimer = window.setTimeout(() => {
      setProgress(100);
      window.setTimeout(() => {
        window.sessionStorage.setItem("portfolio-loader-shown", "true");
        setIsLoading(false);
      }, 260);
    }, 1100);

    return () => {
      window.clearInterval(progressInterval);
      window.clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <div className="antialiased dark">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040814] bg-[radial-gradient(circle_at_top,_rgba(110,96,255,0.18),_transparent_65%)] pointer-events-auto"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 1.01 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-white/5 shadow-[0_0_35px_rgba(110,96,255,0.24)]">
                <div className="absolute inset-0 rounded-full bg-primary/15 blur-xl" />
                <span className="relative text-3xl font-semibold tracking-[0.3em] text-primary">
                  SA
                </span>
              </div>

              <p className="mt-5 text-[11px] uppercase tracking-[0.45em] text-on-surface-variant">
                Sadaqat Ali
              </p>

              <div className="mt-6 h-0.5 w-44 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-primary"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      <Home />
    </div>
  );
}

export default App;

