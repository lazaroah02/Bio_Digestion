import {Dialog} from 'primereact/dialog'
import { useState } from 'react';
import { calculateIA } from '../../../../../utils/calculateIndicators';
import IndicatorFormActionButtons from '../../IndicatorFormsActionButtons';
import ShowPropertiesInfo from '../../ShowPropertiesInfo';
import './index.css'
import '../../commonStyles.css'

function CalculateIA({setIAValue}) {
    const [show, setShow] = useState(false)
    const [result, setResult] = useState(null)

    function handleCalculate(e) {
        e.preventDefault();
        let CP = e.target["CP"]?.value
        let Fc = e.target["Fc"]?.value
        let Ve = e.target["Ve"]?.value
        let PE = e.target["PE"]?.value
        setResult(calculateIA({CP:CP, Fc:Fc, Ve:Ve, PE:PE}))
      }
    
      function handleSaveValue(){
        setShow(false)
        setIAValue(result)
        setResult(null)
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
            setResult(null)
        }}
        position="center"
        draggable={false}
        resizable={false}
        style={{ maxWidth: "93vw" }}
        header="Calculate IA"
        headerClassName="calculate-indicator-header"
      >
        <form className = "calculate-indicator-form calculate-IA-form" onSubmit={(e) => handleCalculate(e)}>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='CP'>CP:</label>
                <input id = "CP" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "CP" description='CP, representa poder calórico del vapor. (kWh/ m3).'/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='Fc'>Fc:</label>
                <input id = "Fc" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "Fc"/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='Ve'>Ve:</label>
                <input id = "Ve" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "Ve"/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='PE'>PE:</label>
                <input id = "PE" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "PE" description='PE, representa el precio de la energía producida (CUP)'/>
            </div>
            {result?<div className = "show-Q-result"><span>Resultado: {result}</span><button className = "small-green-button" onClick = {() => handleSaveValue()}>Usar</button></div>:null}
            <IndicatorFormActionButtons handleCleanResult={() => {}} key={"IA"}/>
        </form>
      </Dialog>
    </>
     );
}

export default CalculateIA;