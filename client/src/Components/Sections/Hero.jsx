import React from "react";
import { motion } from "framer-motion";
import { personalDetails } from "../../Constants/data";
import resume from "../../assets/images/resume.pdf";
import {
  fadeInScale,
  staggerContainer,
  staggerItem,
  hoverButton,
  tapButton,
} from "../../animations";

const Hero = () => {
  return (
    <motion.section
      className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-20"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      <motion.div
        className="lg:col-span-12 glass-card p-5 sm:p-8 rounded-xl flex flex-col md:flex-row-reverse gap-8 md:gap-10 items-center"
        variants={fadeInScale}
      >
        {/* Profile Image */}
        <motion.div
          className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-primary/20 shadow-xl"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1, y: [0, -3, 0] }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
        >
          <img
            className="w-full h-full object-cover"
            alt={personalDetails.name}
            src={personalDetails.profileImage}
          />
        </motion.div>

        {/* Personal Details */}
        <motion.div
          className="flex flex-col justify-center text-center md:text-left flex-1"
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full w-fit mx-auto md:mx-0 mb-4 border border-primary/20"
            variants={staggerItem}
          >
            <span className="material-symbols-outlined text-sm">
              code
            </span>

            <span className="font-label-sm text-label-sm">
              {personalDetails.role}
            </span>
          </motion.div>

          <motion.h1
            className="font-display-lg text-headline-lg text-on-surface mb-2 tracking-tighter uppercase"
            variants={staggerItem}
          >
            {personalDetails.name}
          </motion.h1>

          <motion.p
            className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl"
            variants={staggerItem}
          >
            {personalDetails.bio}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            variants={staggerContainer}
          >
            <motion.a
              href={resume}
              download="Sadaqat-Ali-Resume.pdf"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-primary text-on-primary font-semibold hover:shadow-primary/40 transition-all duration-300"
              variants={staggerItem}
              whileHover={hoverButton}
              whileTap={tapButton}
            >
              <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">
                download
              </span>

              Download CV
            </motion.a>

            <motion.a
              className="px-8 py-3 border border-outline-variant text-on-surface font-label-md text-label-md rounded-lg hover:bg-white/5 transition-all active:scale-95 flex items-center gap-2"
              href="#projects"
              variants={staggerItem}
              whileHover={hoverButton}
              whileTap={tapButton}
            >
              <span className="material-symbols-outlined">
                rocket_launch
              </span>

              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;