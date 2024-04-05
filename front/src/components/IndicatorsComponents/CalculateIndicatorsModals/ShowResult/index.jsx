import './index.css'
import {useToast} from '../../../../hooks/useToast'
function ShowResult({result = null, updateIndicatorValue, indicatorName}) {
    const {toast, showSuccessMessage, showErrorMessage} = useToast()
    function handleSaveResult(){
        if(result !== null){
            updateIndicatorValue({indicatorName:indicatorName, newValue:result});
            showSuccessMessage("Valor actualizado")
        }else{
            showErrorMessage("No has efectuado ningún cálculo")
        }
    }
    return (
        <>
            {toast()}
            <section className = "show-result-indicator-calculation">
                <div>Resultado:</div>
                <span>{result?.toFixed(2)}</span>
            </section> 
            <button className = "save-result-indicator-calculation"
            onClick={() => handleSaveResult()}>Guardar Nuevo Resultado</button>
        </>
    );
}

export default ShowResult;