import './index.css'
function IndicatorFormActionButtons({handleCleanResult, className = ""}) {
    return ( 
        <div className = {`calculate-indicator-buttons-container ${className}`}>
            <button className = "calculate-indicator-reset-button" type = "reset" onClick={() => handleCleanResult()}>Borrar</button>
            <button className = "calculate-indicator-button" type = "submit">Calcular</button>
        </div>
     );
}

export default IndicatorFormActionButtons;