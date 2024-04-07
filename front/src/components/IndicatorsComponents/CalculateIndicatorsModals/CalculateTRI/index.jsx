import './index.css'
import '../commonStyles.css'
import { calculateTRI } from '../../../../utils/calculateIndicators';
import CalculateQ from '../CalculateVAN/CalculateQ'
import {useState} from 'react'
import IndicatorFormActionButtons from '../IndicatorFormsActionButtons';
import ShowPropertiesInfo from '../ShowPropertiesInfo';

function CalculateTRI({setTRIResult}) {
    const [QValue, setQValue] = useState("")

    function handleCalculate(e){
        e.preventDefault();
        let Q = parseFloat(QValue)
        let Inv = parseFloat(e.target["Inv"]?.value)
        let result = calculateTRI({Inv:Inv, Q:Q})
        setTRIResult({indicatorName:"TRI",result:result})
    }

    function handleCleanResult(){
        setTRIResult({indicatorName:"TRI", result:null})
        setQValue("")
    }

    return ( 
        <form className='calculate-indicator-form calculate-TRI-form' onSubmit={(e) => handleCalculate(e)}>
            <div className='calculate-indicator-form calculate-TRI-form-fields-container'>
                <div className = "calculate-indicator-field-container">
                    <label htmlFor='Inv'>Inv:</label>
                    <input id = "Inv" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <ShowPropertiesInfo title = "Inv" description='Inv, corresponde a la inversión total'/>
                </div>
                <div>
                    <div className = "calculate-indicator-field-container">
                        <label htmlFor='Q'>Q:</label>
                        <input id = "Q" value = {QValue} onChange={(e) => setQValue(e.target.value)} className = "calculate-indicator-input" type = "number" step="0.01" required/>
                        <ShowPropertiesInfo title = "Q" description='Q, es el flujo de caja en unidades monetarias por año'/>
                    </div>
                    <div className = "calculate-Q-advice"><span>No conoces el valor?</span> <CalculateQ setQValue={setQValue}/></div>
                </div>
            </div>
            <IndicatorFormActionButtons className = "calculate-TRI-action-buttons" handleCleanResult={handleCleanResult}/>
        </form>
    );
}

export default CalculateTRI;