import { motion } from "framer-motion";
import { hoverIcon } from "../../animations";

const SocialLink = ({ label, url }) => {
  return (
    <motion.a className="group flex flex-col items-center gap-1" href={url} target="_blank" rel="noopener noreferrer" whileHover={hoverIcon}>
      <span className="text-[10px] font-label-mono text-on-surface-variant group-hover:text-primary transition-colors">
        {label}
      </span>
      <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-300"></div>
    </motion.a>
  );
};

export default SocialLink;
