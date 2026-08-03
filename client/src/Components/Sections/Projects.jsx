import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../Constants/data";
import { fadeIn, slideUp, staggerContainer, hoverButton, tapButton } from "../../animations";

const Projects = () => {
  return (
    <motion.section
      className="mb-24"
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <motion.div className="flex items-center justify-between mb-8" variants={fadeIn}>
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Featured Projects
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Selected works from my 2025-2026 repertoire.
          </p>
        </div>
        <div className="hidden md:block w-32 h-px bg-outline-variant"></div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="glass-card rounded-xl overflow-hidden flex flex-col"
            variants={slideUp}
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
          >
            <div className="aspect-video relative overflow-hidden group">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={project.title}
                src={project.img}
              />
              <div className="absolute inset-0 bg-surface/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <motion.a
                  href={project.hostedUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.title} live demo`}
                  className="p-2 bg-primary rounded-full text-on-primary"
                  whileHover={hoverButton}
                  whileTap={tapButton}
                >
                  <span className="material-symbols-outlined">link</span>
                </motion.a>
                <motion.a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} repository`}
                  className="p-2 bg-surface-container-highest rounded-full text-on-surface border border-white/10"
                  whileHover={hoverButton}
                  whileTap={tapButton}
                >
                  <span className="material-symbols-outlined">code</span>
                </motion.a>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-surface-variant rounded text-[10px] font-bold text-on-surface-variant uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;

