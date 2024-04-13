import './index.css'
import '../commonStyles.css'
import { calculateLEC } from '../../../../utils/calculateIndicators';
import IndicatorFormActionButtons from '../IndicatorFormsActionButtons';
import ShowPropertiesInfo from '../ShowPropertiesInfo';
import {useToast} from '../../../../hooks/useToast'

function CalculateLEC({indicators, setLECResult}) {
    const {toast, showErrorMessage} = useToast()

    function handleCalculate(e){
        e.preventDefault();
        let n = e.target["n"].value
        let Inv = e.target["Inv"].value
        let OyM = e.target["O&M"].value
        let E = e.target["E"].value
        if(E == 0){
            return showErrorMessage("E no puede ser cero")
        }
        setLECResult({indicatorName:"LEC", result:calculateLEC({n:n, Inv:Inv, OyM:OyM, E:E})})
    }

    function handleCleanResult(){
        setLECResult({indicatorName:"LEC", result:null})
    }

    return ( 
        <form className='calculate-indicator-form calculate-LEC-form' onSubmit={(e) => handleCalculate(e)}>
            {toast()}
            <div className = "calculate-indicator-field-container">
                <label htmlFor='n' style = {{minWidth:"53px"}}>n:</label>
                <input id = "n" className = "calculate-indicator-input" type = "number" readOnly defaultValue = {indicators?.n}/>
                <ShowPropertiesInfo title = "n" description='Eficiencia del proceso'/>
            </div>
            <section className = "calculate-CA-section">
                <div className = "calculate-indicator-field-container calculate-CA-section-title">
                    <h4 style = {{margin:"0px", marginBottom:"5px"}}>CA</h4>
                    <ShowPropertiesInfo title = "CA" description='CA, costos de inversión'/>
                </div>
                <div className = "calculate-indicator-field-container">
                    <label htmlFor='Inv' style = {{minWidth:"53px"}}>Inv:</label>
                    <input id = "Inv" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <ShowPropertiesInfo title = "Inv" description='Inv, representa la inversión inicial en unidades monetarias'/>
                </div>
                <div className = "calculate-indicator-field-container">
                    <label htmlFor='O&M'>O & M:</label>
                    <input id = "O&M" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <ShowPropertiesInfo title = "O & M" description='O & M, representa cada año en USD'/>
                </div>
            </section>
            <section className = "calculate-EA-section">
                <div className = "calculate-indicator-field-container calculate-EA-section-title">
                    <h4 style = {{margin:"0px", marginBottom:"5px"}}>EA</h4>
                    <ShowPropertiesInfo title = "EA" description='EA, representa la electricidad producida en kWh por año'/>
                </div>
                <div className = "calculate-indicator-field-container">
                    <label htmlFor='E' style = {{minWidth:"53px"}}>E:</label>
                    <input id = "E" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <ShowPropertiesInfo title = "E" description=''/>
                </div>
            </section>
            <IndicatorFormActionButtons handleCleanResult={handleCleanResult} key = {"LEC"}/>
        </form>
    );
}

export default CalculateLEC;