import './index.css'
import {useToast} from '../../../../hooks/useToast'
function ShowResult({result = null, updateIndicatorValue, indicatorName, showErrorMessage, showSuccessMessage}) {
    function handleSaveResult(){
        if(result !== null && result !== "NaN"){
            updateIndicatorValue({indicatorName:indicatorName, newValue:result});
            showSuccessMessage("Valor actualizado")
        }else{
            showErrorMessage("No has efectuado ningún cálculo")
        }
    }
    return (
        <>
            <section className = "show-result-indicator-calculation">
                <div>Resultado:</div>
                <span>{result !== null && result != "NaN"?result:null}</span>
            </section> 
            <button className = "save-result-indicator-calculation"
            onClick={() => handleSaveResult()}>Guardar Nuevo Resultado</button>
        </>
    );
}

export default ShowResult;