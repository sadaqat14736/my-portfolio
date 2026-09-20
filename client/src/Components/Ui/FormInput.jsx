
const FormInput = ({ label, type = "text", placeholder, isTextArea = false, rows = 6, value, onChange, ...props }) => {
  const commonClasses = "w-full bg-surface-container-lowest/50 border border-outline-variant/30 rounded-xl px-5 py-3.5 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all glass-morphism";

  return (
    <div className="space-y-2">
      <label className="text-[10px] font-label-mono text-primary uppercase tracking-widest ml-1">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          className={`${commonClasses} resize-none`}
          value={value}
          onChange={onChange}
          {...props}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={commonClasses}
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
    </div>
  );
};

export default FormInput;
