import './index.css'

function ShowVANResult({result = null, updateIndicatorValue}) {
    return ( 
        <section className = "show-VAN-result">
            <section className = "show-result-VAN-calculation">
                <div>Resultado:</div>
                <span>{result}</span>
            </section> 
            <button className = "save-result-VAN-calculation" onClick={() => {
                result !== null?updateIndicatorValue({indicatorName:"VAN", newValue:result}):null
            }}>Guardar Nuevo Resultado</button>
        </section>
     );
}

export default ShowVANResult;