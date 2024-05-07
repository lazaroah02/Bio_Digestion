import './index.css'
import VANResultGraphic from './VANResultGraphic';

function ShowVANResult({result = null, VANpartialResults = [], updateIndicatorValue, showErrorMessage, showSuccessMessage, VANpropertiesToSaveInLocalStorage}) {  
    function handleSaveResult(){
        if(result !== null && result != "NaN"){
            updateIndicatorValue({indicatorName:"VAN", newValue:result});
            showSuccessMessage("Valor actualizado")
            localStorage.setItem("Q", VANpropertiesToSaveInLocalStorage.Q)
            localStorage.setItem("Inv", VANpropertiesToSaveInLocalStorage.Inv)
            localStorage.setItem("VANpartialResults", VANpartialResults)
        }else{
            showErrorMessage("No has efectuado ningún cálculo")
        }
    }

    return ( 
        <section className = "show-VAN-result">
            <VANResultGraphic VANpartialResults={VANpartialResults}/>
            <section className = "show-result-VAN-calculation">
                <div>Resultado:</div>
                <span>{result !== null && result != "NaN"?result:null}</span>
            </section> 
            <button className = "save-result-VAN-calculation" onClick={() => handleSaveResult()}>Guardar Nuevo Resultado</button>
        </section>
     );
}

export default ShowVANResult;