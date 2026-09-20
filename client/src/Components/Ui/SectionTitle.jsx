
const SectionTitle = ({ children, className = "" }) => {
  return (
    <h3 className={`font-headline-lg text-headline-lg text-on-surface ${className}`}>
      {children}
    </h3>
  );
};

export default SectionTitle;
