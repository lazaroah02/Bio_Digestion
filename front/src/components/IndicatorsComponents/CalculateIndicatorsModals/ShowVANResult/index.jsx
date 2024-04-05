import './index.css'
import {useToast} from '../../../../hooks/useToast'

function ShowVANResult({result = null, updateIndicatorValue}) {
    const {toast, showSuccessMessage, showErrorMessage} = useToast()

    function handleSaveResult(){
        if(result !== null){
            updateIndicatorValue({indicatorName:"VAN", newValue:result});
            showSuccessMessage("Valor actualizado")
        }else{
            showErrorMessage("No has efectuado ningún cálculo")
        }
    }

    return ( 
        <section className = "show-VAN-result">
            {toast()}
            <section className = "show-result-VAN-calculation">
                <div>Resultado:</div>
                <span>{result}</span>
            </section> 
            <button className = "save-result-VAN-calculation" onClick={() => handleSaveResult()}>Guardar Nuevo Resultado</button>
        </section>
     );
}

export default ShowVANResult;