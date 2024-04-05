import './index.css'
import '../commonStyles.css'
import InfoIcon from '../../../../icons/InfoIcon';

function CalculateVAN({indicators}) {

    function handleCalculate(e){
        e.preventDefault();
        console.log("aa")
    }

    return ( 
        <section>
            <form className='calculate-VAN-form' onSubmit={(e) => handleCalculate(e)}>
                <div className = "calculate-VAN-field-container">
                    <label>Q:</label>
                    <input className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <InfoIcon className = "info-icon"/>
                </div>
                <div className = "calculate-VAN-field-container">
                    <label>r:</label>
                    <input className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <InfoIcon className = "info-icon"/>
                </div>
                <div className = "calculate-VAN-field-container">
                    <label>Inv:</label>
                    <input className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <InfoIcon className = "info-icon"/>
                </div>
                <div className = "calculate-VAN-field-container">
                    <label>n:</label>
                    <input className = "calculate-indicator-input" defaultValue={indicators?.n} readOnly type = "number" step="0.01" required/>
                    <InfoIcon className = "info-icon"/>
                </div>
                <div className = "calculate-VAN-buttons-container">
                    <button className = "calculate-VAN-reset-button" type = "reset">Borrar</button>
                    <button className = "calculate-VAN-button" type = "submit">Calcular</button>
                </div>
            </form>
        </section> 
    );
}

export default CalculateVAN;