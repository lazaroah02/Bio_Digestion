import './index.css'
function ShowResult({result = null, updateIndicatorValue, indicatorName, showErrorMessage, showSuccessMessage, unit = "", mobileMode}) {
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
            {!mobileMode?
            <>
                <section className = "show-result-design-calculation">
                    <div>Resultado:</div>
                    <span>{result !== null && result != "NaN"?result + ' ' + unit:null}</span>
                </section> 
                <button className = "save-result-design-calculation"
                onClick={() => handleSaveResult()}>Usar Resultado</button>
            </>
                :
                result !== null && result != "NaN"?
                    <div className = "show-result-design-calculation-on-mobile">
                        <span>Resultado: {result}</span>
                        <button className = "small-green-button" onClick = {() => handleSaveValue()}>Usar</button>
                    </div>:null
            }
        </>
    );
}

export default ShowResult;