import "./index.css";
import "../commonStyles.css";
import { calculateTIR } from "../../../../utils/calculateIndicators";
import CalculateQ from "../CalculateVAN/CalculateQ";
import { useState } from "react";
import IndicatorFormActionButtons from "../IndicatorFormsActionButtons";
import ShowPropertiesInfo from "../ShowPropertiesInfo";

function CalculateTIR({ indicators, setTIRResult }) {
  const [QValue, setQValue] = useState(localStorage.getItem("Q")?localStorage.getItem("Q"):"");
  const [InvValue, setInvValue] = useState(localStorage.getItem("Inv")?localStorage.getItem("Inv"):"");

  function handleCalculate(e) {
    e.preventDefault();
    let Q = parseFloat(QValue);
    let Inv = parseFloat(InvValue);
    let n = parseInt(e.target["n"]?.value);
    //calculate TIR
    let result = calculateTIR({ Q: Q, n: n, Inv: Inv });
    setTIRResult({ indicatorName: "TIR", result: result });
  }

  function handleCleanResult() {
    setTIRResult({ indicatorName: "TIR", result: null });
    setInvValue("")
    setQValue("")
  }

  return (
    <form
      className="calculate-indicator-form calculate-TIR-form"
      onSubmit={(e) => handleCalculate(e)}
    >
      <div>
        <div className="calculate-indicator-field-container">
          <label htmlFor="Q">Q:</label>
          <input
            id="Q"
            value={QValue}
            onChange={(e) => setQValue(e.target.value)}
            className="calculate-indicator-input"
            type="number"
            step="0.01"
            required
          />
          <ShowPropertiesInfo
            title="Q"
            description={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Q, es el flujo de caja en unidades monetarias.</span>
                <span>
                  El valor predefinido establecido, es el valor de Q que se
                  utilizó para calcular el VAN
                </span>
              </div>
            }
          />
        </div>
        <div className="calculate-Q-advice">
          <span>No conoces el valor?</span> <CalculateQ setQValue={setQValue} />
        </div>
      </div>
      <div className="calculate-indicator-field-container">
        <label htmlFor="Inv">Inv:</label>
        <input
          id="Inv"
          className="calculate-indicator-input"
          value={InvValue}
          onChange={(e) => setInvValue(e.target.value)}
          type="number"
          step="0.01"
          required
        />
        <ShowPropertiesInfo
          title="Inv"
          description={
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Inv, es la inversión total.</span>
              <span>
                El valor predefinido establecido, es el valor de Inv que se
                utilizó para calcular el VAN
              </span>
            </div>
          }
        />
      </div>
      <div className="calculate-indicator-field-container">
        <label htmlFor="n">n:</label>
        <input
          id="n"
          className="calculate-indicator-input"
          defaultValue={indicators?.n}
          readOnly
          type="number"
          step="0.01"
          required
        />
        <ShowPropertiesInfo
          title="n"
          description="El valor de n representa al número de años de vida útil del Biorreactor"
        />
      </div>
      <IndicatorFormActionButtons
        handleCleanResult={handleCleanResult}
        key={"TIR"}
      />
    </form>
  );
}

export default CalculateTIR;
