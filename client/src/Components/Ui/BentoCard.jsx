
const BentoCard = ({ children, className = "", as: Component = "div", ...props }) => {
  return (
    <Component
      className={`bento-tile rounded-3xl ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default BentoCard;