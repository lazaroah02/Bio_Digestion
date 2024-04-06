import { Dialog } from "primereact/dialog";
import { useState } from "react";
import IndicatorFormActionButtons from "../../IndicatorFormsActionButtons";
import { calculateQ } from "../../../../../utils/calculateIndicators";
import CalculateIA from "../CalculateIA";
import ShowPropertiesInfo from "../../ShowPropertiesInfo";
import "./index.css";
import "../../commonStyles.css";

function CalculateQ({ setQValue }) {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(null);
  const [IAValue, setIAValue] = useState("");

  function handleCalculate(e) {
    e.preventDefault();
    let IA = e.target["IA"]?.value;
    let GA = e.target["GA"]?.value;
    setResult(calculateQ({ IA: IA, GA: GA }));
  }

  function handleSaveValue() {
    setShow(false);
    setQValue(result);
    setResult(null);
    setIAValue("");
  }

  return (
    <>
      <button
        type="button"
        className="small-green-button"
        onClick={() => setShow(true)}
      >
        Calcular
      </button>
      <Dialog
        visible={show}
        onHide={() => {
          setShow(false);
          setResult(null);
          setIAValue("");
        }}
        position="center"
        draggable={false}
        resizable={false}
        style={{ maxWidth: "93vw" }}
        header="Calculate Q"
        headerClassName="calculate-indicator-header"
      >
        <form className="calculate-Q-form" onSubmit={(e) => handleCalculate(e)}>
          <div>
            <div className="calculate-indicator-field-container">
              <label htmlFor="IA">IA:</label>
              <input
                id="IA"
                className="calculate-indicator-input"
                value={IAValue}
                onChange={(e) => setIAValue(e.target.value)}
                type="number"
                step="0.01"
                required
              />
              <ShowPropertiesInfo title = "IA" description="IA, representa los ingresos anuales (en unidades monetarias por año)"/>
            </div>
            <div className="calculate-IA-advice">
              <span>No conoces el valor?</span>{" "}
              <CalculateIA setIAValue={setIAValue} />
            </div>
          </div>
          <div className="calculate-indicator-field-container">
            <label htmlFor="GA">GA:</label>
            <input
              id="GA"
              className="calculate-indicator-input"
              type="number"
              step="0.01"
              required
            />
            <ShowPropertiesInfo title = "GA" description="GA, representa los gastos anuales (en unidades monetarias por año), producto de labores de operación y mantenimiento del sistema."/>
          </div>
          {result !== null && result !== "NaN" ? (
            <div className="show-Q-result">
              <span>Resultado: {result}</span>
              <button
                className="small-green-button"
                onClick={() => handleSaveValue()}
              >
                Usar
              </button>
            </div>
          ) : null}
          <IndicatorFormActionButtons
            handleCleanResult={() => {}}
            key={"asd"}
          />
        </form>
      </Dialog>
    </>
  );
}

export default CalculateQ;
