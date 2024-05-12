import ShowPropertiesInfo from "../../../IndicatorsComponents/CalculateIndicatorsModals/ShowPropertiesInfo";
import '../commonStyles.css'
import './index.css';
import {calculateTotalVolume} from '../../../../utils/designCalculations'
import IndicatorsFormActionButtons from '../../../IndicatorsComponents/CalculateIndicatorsModals/IndicatorFormsActionButtons'
import {calculateTotalVolumeValidations} from '../../../../utils/validateDesignCalculations'

function CalculateTotalVolume({calculationName, showErrorMessage, saveCalculationResult, entranceData, saveEntranceData}) {
    function handleCalculate(e){
        e.preventDefault()
        let Qinf = parseFloat(entranceData.Qinf)
        let DQOv = parseFloat(entranceData.DQOv)
        let COV = parseFloat(entranceData.COV)
        calculateTotalVolumeValidations({Qinf:Qinf, DQOv:DQOv, COV:COV})
        .then(() => {
            let result = calculateTotalVolume({Qinf: Qinf, DQOv: DQOv, COV: COV})
            saveCalculationResult({calculationName:calculationName, result:result})
        })
        .catch((error) => {
            showErrorMessage(error)
        })
    }

    return ( 
        <form className = "calculate-total-volume-form design-calculation-form" onSubmit={(e) => handleCalculate(e)}>
            <div className = "design-calculation-field-container">
                <label htmlFor='Qinf'>Qinf:</label>
                <input id = "Qinf" className = "design-calculation-input" value = {entranceData.Qinf?entranceData.Qinf:""} onChange = {(e) => saveEntranceData({name:"Qinf", value:e.target.value})} type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "Qinf" description='Qinf, es el caudal del influente, es decir, el volumen de mescla (m^3⁄d).'/>
            </div>
            <div className = "design-calculation-field-container">
                <label htmlFor='DQOv'>DQOv:</label>
                <input id = "DQOv" className = "design-calculation-input" value = {entranceData.DQOv?entranceData.DQOv:""} onChange = {(e) => saveEntranceData({name:"DQOv", value:e.target.value})} type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "DQOv" description='DQOv, es el DQO de la mezcla, ((kg DQO)⁄m^3 ).'/>
            </div>
            <div className = "design-calculation-field-container">
                <label htmlFor='COV'>COV:</label>
                <input id = "COV" className = "design-calculation-input" value = {entranceData.COV?entranceData.COV:""} onChange = {(e) => saveEntranceData({name:"COV", value:e.target.value})} type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "COV" description='COV, es la carga orgánica volumétrica de la mezcla, ((kg DQO)⁄(m^3*d)).'/>
            </div>
            <IndicatorsFormActionButtons handleCleanResult={() => {
                saveEntranceData({name:"Qinf", value:null})
                saveEntranceData({name:"DQOv", value:null})
                saveEntranceData({name:"COV", value:null})
            }}/>
        </form>
     );
}

export default CalculateTotalVolume;