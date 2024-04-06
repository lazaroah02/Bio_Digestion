import './index.css'
import '../commonStyles.css'
import InfoIcon from '../../../../icons/InfoIcon';
import { calculateVAN } from '../../../../utils/calculateIndicators';
import CalculateQ from './CalculateQ'
import {useState} from 'react'
import IndicatorFormActionButtons from '../IndicatorFormsActionButtons';

function CalculateVAN({indicators, setVanResult}) {
    const [QValue, setQValue] = useState("")

    function handleCalculate(e){
        e.preventDefault();
        let Q = parseFloat(QValue)
        let r = parseFloat(e.target["r"]?.value)
        let Inv = parseFloat(e.target["Inv"]?.value)
        let n = parseInt(e.target["n"]?.value)
        let partialResults = []
        //calculate VAN n times
        for(let j = 1; j <= n; j++) {
            partialResults.push(parseFloat(calculateVAN({Q: Q, r: r, Inv: Inv, j:j})))
        }
        //add all VAN values
        let result = partialResults.reduce((acumulator, value) => acumulator + value, 0).toFixed(2)
        setVanResult({indicatorName:"VAN",result:result})
        setVanResult({indicatorName:"VANpartialResults",result:partialResults})
    }

    function handleCleanResult(){
        setVanResult({indicatorName:"VAN", result:null})
        setVanResult({indicatorName:"VANpartialResults", result:[]})
    }

    return ( 
        <section>
            <form className='calculate-VAN-form' onSubmit={(e) => handleCalculate(e)}>
                <div>
                    <div className = "calculate-indicator-field-container">
                        <label htmlFor='Q'>Q:</label>
                        <input id = "Q" value = {QValue} onChange={(e) => setQValue(e.target.value)} className = "calculate-indicator-input" type = "number" step="0.01" required/>
                        <InfoIcon className = "info-icon"/>
                    </div>
                    <div className = "calculate-Q-advice"><span>No conoces el valor?</span> <CalculateQ setQValue={setQValue}/></div>
                </div>
                <div className = "calculate-indicator-field-container">
                    <label htmlFor='r'>r:</label>
                    <input id = "r" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <InfoIcon className = "info-icon"/>
                </div>
                <div className = "calculate-indicator-field-container">
                    <label htmlFor='Inv'>Inv:</label>
                    <input id = "Inv" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <InfoIcon className = "info-icon"/>
                </div>
                <div className = "calculate-indicator-field-container">
                    <label htmlFor='n'>n:</label>
                    <input id = "n" className = "calculate-indicator-input" defaultValue={indicators?.n} readOnly type = "number" step="0.01" required/>
                    <InfoIcon className = "info-icon"/>
                </div>
                <IndicatorFormActionButtons handleCleanResult={handleCleanResult}/>
            </form>
        </section> 
    );
}

export default CalculateVAN;