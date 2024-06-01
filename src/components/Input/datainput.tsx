import { ComponentType } from "react";
import "./index.css";

interface DataInputProps {
  value: number;
  label: string;
  updateValue: (novoValor: number) => void;
  Icon: ComponentType;
}

export default function DataInput({ Icon, label, updateValue, value }: DataInputProps) {
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
          onChange={(e) => updateValue(Number(e.target.value))}
          value={value}
        />
      </div>
    </div>
  );
}
