import "./index.css";

export default function DataInput({ Icon, label, updateValue, value }) {
  return (
    <div className="container_wrapper">
      <p className="input_label">{label}</p>
      <div className="input_wrapper">
        <span className="icon">
          <Icon />
        </span>
        <input
          type="text"
          inputMode="numeric"
          placeholder="0"
          onChange={(e) => updateValue(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
}
