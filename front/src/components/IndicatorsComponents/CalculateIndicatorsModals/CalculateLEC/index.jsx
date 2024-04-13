import './index.css'
import '../commonStyles.css'
import { calculateLEC } from '../../../../utils/calculateIndicators';
import {useState} from 'react'
import IndicatorFormActionButtons from '../IndicatorFormsActionButtons';
import ShowPropertiesInfo from '../ShowPropertiesInfo';
import CalculateQ from '../CalculateVAN/CalculateQ'

function CalculateLEC() {
    const [CAValue, setCAValue] = useState("")
    const [EAValue, setEAValue] = useState("")
    const [result, setResult] = useState(null)

    function handleCalculate(e){
        e.preventDefault();
    }

    function handleCleanResult(){
        
    }

    return ( 
        <form className='calculate-indicator-form calculate-LEC-form' onSubmit={(e) => handleCalculate(e)}>
            <div>
                <div className = "calculate-indicator-field-container">
                    <label htmlFor='CA'>CA:</label>
                    <input id = "CA" value = {CAValue} onChange={(e) => setCAValue(e.target.value)} className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <ShowPropertiesInfo title = "CA" description='CA, son los costos de inversión'/>
                </div>
                <div className = "calculate-Q-advice"><span>No conoces el valor?</span> <CalculateQ setQValue={setCAValue}/></div>
            </div>
            <div>
                <div className = "calculate-indicator-field-container">
                    <label htmlFor='EA'>EA:</label>
                    <input id = "EA" value = {EAValue} onChange={(e) => setEAValue(e.target.value)} className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <ShowPropertiesInfo title = "EA" description='EA, representa la electricidad producida en kWh por añor'/>
                </div>
                <div className = "calculate-Q-advice"><span>No conoces el valor?</span> <CalculateQ setQValue={setCAValue}/></div>
            </div>
            <div className = "form-fields-separator"></div>
            <IndicatorFormActionButtons handleCleanResult={handleCleanResult}/>
        </form>
    );
}

export default CalculateLEC;