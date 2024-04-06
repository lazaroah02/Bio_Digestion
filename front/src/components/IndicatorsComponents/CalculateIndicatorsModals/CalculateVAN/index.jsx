import './index.css'
import '../commonStyles.css'
import InfoIcon from '../../../../icons/InfoIcon';
import { calculateVAN } from '../../../../utils/calculateIndicators';

function CalculateVAN({indicators, setVanResult}) {

    function handleCalculate(e){
        e.preventDefault();
        let Q = parseFloat(e.target["Q"].value)
        let r = parseFloat(e.target["r"].value)
        let Inv = parseFloat(e.target["Inv"].value)
        let n = parseInt(e.target["n"].value)
        let partialResults = []
        //calculate VAN n times
        for(let j = 1; j <= n; j++) {
            partialResults.push(parseFloat(calculateVAN({Q: Q, r: r, Inv: Inv, j:j})))
        }
        //add all VAN values
        let result = partialResults.reduce((acumulator, value) => acumulator + value, 0).toFixed(2)
        setVanResult({indicatorName:"VAN",result:result})
        setVanResult({indicatorName:"VANpartialResults",result:partialResults})
    }

    function handleCleanResult(){
        setVanResult({indicatorName:"VAN", result:null})
        setVanResult({indicatorName:"VANpartialResults", result:[]})
    }

    return ( 
        <section>
            <form className='calculate-VAN-form' onSubmit={(e) => handleCalculate(e)}>
                <div className = "calculate-VAN-field-container">
                    <label htmlFor='Q'>Q:</label>
                    <input id = "Q" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <InfoIcon className = "info-icon"/>
                </div>
                <div className = "calculate-VAN-field-container">
                    <label htmlFor='r'>r:</label>
                    <input id = "r" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <InfoIcon className = "info-icon"/>
                </div>
                <div className = "calculate-VAN-field-container">
                    <label htmlFor='Inv'>Inv:</label>
                    <input id = "Inv" className = "calculate-indicator-input" type = "number" step="0.01" required/>
                    <InfoIcon className = "info-icon"/>
                </div>
                <div className = "calculate-VAN-field-container">
                    <label htmlFor='n'>n:</label>
                    <input id = "n" className = "calculate-indicator-input" defaultValue={indicators?.n} readOnly type = "number" step="0.01" required/>
                    <InfoIcon className = "info-icon"/>
                </div>
                <div className = "calculate-VAN-buttons-container">
                    <button className = "calculate-VAN-reset-button" type = "reset" onClick={() => handleCleanResult()}>Borrar</button>
                    <button className = "calculate-VAN-button" type = "submit">Calcular</button>
                </div>
            </form>
        </section> 
    );
}

export default CalculateVAN;