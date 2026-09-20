
const TabButton = ({ label, id, active, onClick }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`tab-btn px-5 py-2.5 text-label-mono font-medium rounded-lg transition-all duration-300 cursor-pointer ${
        active
          ? "active"
          : "text-on-surface-variant hover:bg-surface-variant/30"
      }`}
    >
      {label}
    </button>
  );
};

export default TabButton;
