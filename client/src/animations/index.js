export const baseTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { ...baseTransition, duration: 0.7 },
  },
};

export const slideUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const hoverButton = {
  scale: 1.04,
  y: -1,
  transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
};

export const tapButton = {
  scale: 0.96,
  transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
};

export const hoverCard = {
  y: -4,
  scale: 1.01,
  boxShadow: "0 18px 35px rgba(0, 0, 0, 0.16)",
  transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
};

export const hoverIcon = {
  scale: 1.05,
  rotate: 4,
  transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
};
