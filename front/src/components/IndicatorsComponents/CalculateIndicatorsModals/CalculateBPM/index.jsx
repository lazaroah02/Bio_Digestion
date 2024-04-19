import './index.css'
import '../commonStyles.css'
import ShowPropertiesInfo from '../ShowPropertiesInfo'
import IndicatorFormActionButtons from '../IndicatorFormsActionButtons'
import {calculateBPM} from '../../../../utils/calculateIndicators'

function CalculateBMP({setBPMResult}) {
    function handleCalculate(e){
        e.preventDefault();
        let Qs = parseFloat(e.target["Qs"]?.value)
        let DQOi = parseFloat(e.target["DQOi"]?.value)
        let f_DQO = parseFloat(e.target["f_DQO"]?.value)
        let Efp = parseFloat(e.target["Efp"]?.value)
        let T = parseFloat(e.target["T"]?.value)
        let VH2S = parseFloat(e.target["VH2S"]?.value)

        let result = calculateBPM({Qs:Qs, DQOi:DQOi, f_DQO:f_DQO, Efp:Efp, T:T, VH2S:VH2S})
        setBPMResult({indicatorName:"BPM", result:result})
    }

    function handleCleanResult(){
        setBPMResult({indicatorName:"BPM", result:null})
    }
    return ( 
        <form className='calculate-indicator-form calculate-BPM-form' onSubmit={(e) => handleCalculate(e)}>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='Qs'>Qs:</label>
                <input id = "Qs" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "Qs" description='Qs, cantidad de sustrato disponible'/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='DQOi'>DQOi:</label>
                <input id = "DQOi" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "DQOi" description='DQOi, Demanda Química de Oxígeno inicial del sustrato'/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='f_DQO'>f_DQO:</label>
                <input id = "f_DQO" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "f_DQO" description='f_DQO, porcentaje de la DQO que no se convierte en biogás'/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='Efp'>Efp:</label>
                <input id = "Efp" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "Efp" description='Efp, Factor de eficiencia del proceso'/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='T'>T:</label>
                <input id = "T" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "T" description='T, Temperatura del proceso en grados celcius'/>
            </div>
            <div className = "calculate-indicator-field-container">
                <label htmlFor='VH2S'>VH2S:</label>
                <input id = "VH2S" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "VH2S" description='VH2S, Volumen del sulfuro de hidrógeno en el biogas que debe ser removido para obtener biometano puro.'/>
            </div>
            <IndicatorFormActionButtons handleCleanResult={handleCleanResult} key = {"BPM"}/>
        </form>
    );
}

export default CalculateBMP;