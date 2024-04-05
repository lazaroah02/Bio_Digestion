import './index.css'
function ShowResult({result = null, updateIndicatorValue, indicatorName}) {
    return (
        <>
            <section className = "show-result-indicator-calculation">
                <div>Resultado:</div>
                <span>{result?.toFixed(2)}</span>
            </section> 
            <button className = "save-result-indicator-calculation"
            onClick={() => {
                result !== null?updateIndicatorValue({indicatorName:indicatorName, newValue:result}):null
            }}>Guardar Nuevo Resultado</button>
        </>
    );
}

export default ShowResult;