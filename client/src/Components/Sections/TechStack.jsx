import React from "react";
import { motion } from "framer-motion";
import { techStackCategories } from "../../Constants/data";
import { fadeIn, slideUp, staggerContainer } from "../../animations";

const TechStack = () => {
  return (
    <motion.section
      className="mb-24"
      id="stack"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <motion.div className="text-center mb-12" variants={fadeIn}>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Core Technologies
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {techStackCategories.map((cat) => (
          <motion.div
            key={cat.category}
            className={`glass-card p-6 rounded-xl border-t-2 ${cat.color}`}
            variants={slideUp}
            whileHover={{ y: -6, scale: 1.01, boxShadow: "0 18px 35px rgba(0,0,0,0.16)" }}
          >
            <h4
              className={`font-label-md text-label-md ${cat.textColor} mb-6 flex items-center gap-2`}
            >
              <span className="material-symbols-outlined">{cat.icon}</span>
              {cat.category}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {cat.items.map((item) => (
                <motion.div
                  key={item.label}
                  className="p-4 bg-surface-container-low rounded-lg flex flex-col items-center gap-2 border border-white/5 glow-hover transition-all group"
                  variants={slideUp}
                  whileHover={{ y: -3, scale: 1.02, rotate: 0.5 }}
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                    {item.icon}
                  </span>
                  <span className="font-label-sm text-label-sm">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TechStack;

