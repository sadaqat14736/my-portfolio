import { motion } from "framer-motion";
import { hoverButton, tapButton } from "../../animations";

const Button = ({ children, onClick, type = "button", variant = "primary", className = "", href, ...props }) => {
  const baseStyle = "px-8 py-3 font-headline-md rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/20",
    ghost: "glass-morphism text-on-surface hover:bg-surface-variant/30",
    icon: "p-3 border border-outline-variant/30 rounded-xl hover:bg-surface-variant/30 transition-colors"
  };

  const selectedClass = `${baseStyle} ${variants[variant] || ""} ${className}`;

  if (href) {
    return (
      <motion.a href={href} className={selectedClass} whileHover={hoverButton} whileTap={tapButton} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={selectedClass} whileHover={hoverButton} whileTap={tapButton} {...props}>
      {children}
    </motion.button>
  );
};

export default Button;
