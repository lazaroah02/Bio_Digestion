import ShowPropertiesInfo from "../../../IndicatorsComponents/CalculateIndicatorsModals/ShowPropertiesInfo";
import '../commonStyles.css'
import './index.css';
import {calculateVasc} from '../../../../utils/designCalculations'
import IndicatorsFormActionButtons from '../../../IndicatorsComponents/CalculateIndicatorsModals/IndicatorFormsActionButtons'
import {calculateVascValidations} from '../../../../utils/validateDesignCalculations'

function CalculateAscendSpeed({calculationName, showErrorMessage, saveCalculationResult, entranceData, saveEntranceData, TRH, TRHCalculationId}) {
    function handleCalculate(e){
        e.preventDefault()
        let Hr = parseFloat(entranceData.Hr)
        calculateVascValidations({Hr:Hr, TRH:TRH, TRHCalculationId:TRHCalculationId})
        .then(() => {
            let result = calculateVasc({Hr: Hr, TRH: TRH})
            saveCalculationResult({calculationName:calculationName, result:result})
        })
        .catch((error) => {
            showErrorMessage(error)
        })
    }

    return ( 
        <form className = "calculate-Vasc-form design-calculation-form" onSubmit={(e) => handleCalculate(e)}>
            <div className = "design-calculation-field-container">
                <label htmlFor='Hr'>Hr:</label>
                <input id = "Hr" className = "design-calculation-input" value = {entranceData.Hr?entranceData.Hr:""} onChange = {(e) => saveEntranceData({name:"Hr", value:e.target.value})} type = "number" step="0.01" required/>
                <ShowPropertiesInfo title = "Hr" description='Hr, es la altura líquida del reactor en (m).'/>
            </div>
            <IndicatorsFormActionButtons handleCleanResult={() => {
                saveEntranceData({name:"Hr", value:null})
            }}/>
        </form>
     );
}

export default CalculateAscendSpeed;