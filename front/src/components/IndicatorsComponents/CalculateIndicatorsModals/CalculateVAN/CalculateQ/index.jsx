import { Dialog } from "primereact/dialog";
import { useState } from "react";
import InfoIcon from '../../../../../icons/InfoIcon';
import IndicatorFormActionButtons from "../../IndicatorFormsActionButtons";
import { calculateQ } from "../../../../../utils/calculateIndicators";
import "./index.css";
import '../../commonStyles.css'

function CalculateQ({setQValue}) {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(null);

  function handleCalculate(e) {
    e.preventDefault();
    let IA = e.target["IA"]?.value
    let GA = e.target["GA"]?.value
    setResult(calculateQ({IA: IA, GA: GA}))
  }

  function handleSaveValue(){
    setShow(false)
    setQValue(result)
  }

  return (
    <>
      <button
        type="button"
        className="calculate-Q-button"
        onClick={() => setShow(true)}
      >
        Calcular
      </button>
      <Dialog
        visible={show}
        onHide={() => setShow(false)}
        position="center"
        draggable={false}
        resizable={false}
        style={{ maxWidth: "93vw" }}
        header="Calculate Q"
        headerClassName="calculate-Q-header"
      >
        <form className = "calculate-Q-form" onSubmit={(e) => handleCalculate(e)}>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='IA'>IA:</label>
                <input id = "IA" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <InfoIcon className = "info-icon"/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='GA'>GA:</label>
                <input id = "GA" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <InfoIcon className = "info-icon"/>
            </div>
            {result?<div className = "show-Q-result"><span>Resultado: {result}</span><button className = "small-green-button" onClick = {() => handleSaveValue()}>Usar</button></div>:null}
            <IndicatorFormActionButtons handleCleanResult={() => {}} key={"asd"}/>
        </form>
      </Dialog>
    </>
  );
}

export default CalculateQ;
