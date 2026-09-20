
const StatCard = ({ val, label }) => {
  return (
    <div className="p-6 bg-surface-container-high/40 rounded-2xl border border-outline-variant/10">
      <div className="text-primary font-headline-md text-3xl">{val}</div>
      <div className="text-caption font-label-mono text-on-surface-variant uppercase mt-1">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
