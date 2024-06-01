import "./App.css";
import SplitterLogo from "./components/splitter-logo";
import DataInput from "./components/Input/datainput";
import { ChangeEvent, MouseEvent, useState } from "react";
import { IconDollar } from "./components/icon-dollar";
import { IconPerson } from "./components/icon-person";

const options = [
  { label: "5%", valorTip: 0.05 },
  { label: "10%", valorTip: 0.1 },
  { label: "15%", valorTip: 0.15 },
  { label: "25%", valorTip: 0.25 },
  { label: "50%", valorTip: 0.5 },
];

function App() {
  const [tip, setTip] = useState(0);
  const [billValue, setBillValue] = useState(0);
  const [pplNumber, setPplNumber] = useState(0);
  const finalTip = pplNumber > 0 ? (billValue * tip) / pplNumber : 0;
  const finalValue = pplNumber > 0 ? billValue / pplNumber + finalTip : 0;
  const handleReset = tip === 0 || billValue === 0 || pplNumber === 0;

  const handleSetPpl = (number: number) => {
    if (number > 0) setPplNumber(number);
  };
  const handleClickReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTip(0);
    setBillValue(0);
    setPplNumber(0);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setTip(value / 100);
  };

  return (
    <>
      <SplitterLogo />
      <div className="card">
        <div className="insert_data">
          <DataInput Icon={IconDollar} label="Bill" updateValue={setBillValue} value={billValue} />
          <div className="tip_selector">
            <p className="subject"> Select Tip %</p>
            <div className="tip_value">
              {options.map(({ label, valorTip }) => {
                return (
                  <button className="tip" onClick={() => setTip(valorTip)}>
                    {label}
                  </button>
                );
              })}
              <input
                type="number"
                className="custom_tip"
                placeholder="Custom"
                value={(tip * 100).toFixed(0)}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <DataInput Icon={IconPerson} label="Number of People" updateValue={handleSetPpl} value={pplNumber} />
        </div>
        <div className="result_card">
          <div className="tip_value_result">
            <div className="tip_text">
              <p className="subject_result">Tip Amount</p>
              <p>/ person</p>
            </div>
            <h1>${finalTip.toFixed(2)}</h1>
          </div>
          <div className="total_value_result">
            <div className="tip_text">
              <p className="subject_result">Total</p>
              <p>/ person</p>
            </div>
            <h1>${finalValue.toFixed(2)}</h1>
          </div>

          <button className="reset" type="reset" disabled={handleReset} onClick={(e) => handleClickReset(e)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
