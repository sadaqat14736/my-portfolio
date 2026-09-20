import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring for the outer ring
  const springConfig = { damping: 26, stiffness: 320, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handlePointerOver = (e) => {
      const interactiveEl = e.target.closest(
        "a, button, input, textarea, select, [role='button'], .cursor-pointer, .glass-card"
      );
      setIsHovered(Boolean(interactiveEl));
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handlePointerOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handlePointerOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isEnabled, isVisible, mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Outer trailing fluid halo */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-primary/40 backdrop-blur-[1px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          backgroundColor: isHovered
            ? "rgba(192, 193, 255, 0.12)"
            : "rgba(192, 193, 255, 0.04)",
          borderColor: isHovered
            ? "rgba(192, 193, 255, 0.7)"
            : "rgba(192, 193, 255, 0.3)",
          scale: isClicked ? 0.85 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          width: { duration: 0.22, ease: "easeOut" },
          height: { duration: 0.22, ease: "easeOut" },
          backgroundColor: { duration: 0.2 },
          borderColor: { duration: 0.2 },
          scale: { duration: 0.15 },
          opacity: { duration: 0.2 },
        }}
      />

      {/* Center pinpoint glowing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary shadow-[0_0_8px_rgba(192,193,255,0.8)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 4 : 6,
          height: isHovered ? 4 : 6,
          scale: isClicked ? 1.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { duration: 0.1 },
          opacity: { duration: 0.15 },
        }}
      />
    </>
  );
};

export default CustomCursor;
