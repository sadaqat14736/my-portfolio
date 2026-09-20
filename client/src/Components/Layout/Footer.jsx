import { motion } from "framer-motion";
import { personalDetails } from "../../Constants/data";
import { fadeIn } from "../../animations";

const Footer = () => {
  return (
    <motion.footer
      className="border-t border-white/5 py-8 sm:py-10 lg:py-12 bg-surface-container-lowest"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:items-center sm:text-left">
        <div className="flex flex-col gap-2">
          <span className="font-headline-md text-primary text-sm sm:text-base">
            {personalDetails.brand}
          </span>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            © 2026 Crafted with precision.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="https://github.com/sadaqat14736"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="https://www.linkedin.com/in/sadaqat-ali-2824a4374/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
