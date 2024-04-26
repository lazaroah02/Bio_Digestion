import '../commonStyles.css'
import './index.css'
import ShowPropertiesInfo from '../ShowPropertiesInfo'
import IndicatorFormActionButtons from '../IndicatorFormsActionButtons'
import { calculateZ } from '../../../../utils/calculateIndicators'

function CalculateZ({indicators, setZresult, showErrorMessage}) {
    function handleCalculate(e){
        e.preventDefault()
        let VAN_d = parseFloat(e.target["VAN_d"].value)
        let TRI_d = parseFloat(e.target["TRI_d"].value)
        let TIR_d = parseFloat(e.target["TIR_d"].value)
        let LEC_d = parseFloat(e.target["LEC_d"].value)
        let BPM_d = parseFloat(e.target["BPM_d"].value)
        let n_d = parseFloat(e.target["n_d"].value)

        //verify any value is cero, cause divide by cero is not supported
        if([VAN_d, TIR_d, TIR_d, LEC_d, BPM_d, n_d].some(value => value === 0)){
            return showErrorMessage("Ningún valor puede ser cero")
        }

        let result = calculateZ({
            VAN:parseFloat(indicators?.VAN), 
            TRI:parseFloat(indicators?.TRI), 
            TIR:parseFloat(indicators?.TIR), 
            LEC:parseFloat(indicators?.LEC), 
            BPM:parseFloat(indicators?.BPM), 
            n:parseFloat(indicators?.n), 
            VAN_d:VAN_d, 
            TRI_d:TRI_d,  
            TIR_d:TIR_d, 
            LEC_d:LEC_d,  
            BPM_d:BPM_d,  
            n_d:n_d
        })
        setZresult({indicatorName:"Z", result:result})
    }
    function handleCleanResult(){
        setZresult({indicatorName:"Z", result:null})
    }
    return ( 
        <form className='calculate-indicator-form calculate-Z-form' onSubmit={(e) => handleCalculate(e)}>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='VAN_d'>VAN_d:</label>
                <input id = "VAN_d" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "VAN_d" description='VAN_d, es el valor deseado para el VAN'/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='TIR_d'>TIR_d:</label>
                <input id = "TIR_d" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "TIR_d" description='TIR_d, es el valor deseado para el TIR'/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='TRI_d'>TRI_d:</label>
                <input id = "TRI_d" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "TRI_d" description='TRI_d, es el valor deseado para el TRI'/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='LEC_d'>LEC_d:</label>
                <input id = "LEC_d" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "LEC_d" description='LEC_d, es el valor deseado para el TRI'/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='BPM_d'>BPM_d:</label>
                <input id = "BPM_d" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "BPM_d" description='BPM_d, es el valor deseado para el BPM'/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='n_d'>n_d:</label>
                <input id = "n_d" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "n_d" description='n_d, es el valor deseado para el n'/>
            </div>
            <IndicatorFormActionButtons handleCleanResult={handleCleanResult} key = {"Z"}/>
        </form>
     );
}

export default CalculateZ;