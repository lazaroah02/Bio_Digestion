import './index.css'
import {useToast} from '../../../../hooks/useToast'
import { useState, useEffect } from 'react'
import { AgChartsReact } from 'ag-charts-react'

function ShowVANResult({result = null, VANpartialResults = [], updateIndicatorValue}) {
    const {toast, showSuccessMessage, showErrorMessage} = useToast()
    const [chartOptions, setChartOptions] = useState({
        // Data: Data to be displayed in the chart
        data: [],
        // Series: Defines which chart type and data to use
        series: [{ type: 'line', xKey: 'year', yKey: 'VAN' }],
        title: { text: 'VAN anual durante n años' },
      });

    //update Chart on change VANpartialResults
    useEffect(() => {
        setChartOptions((prev) => ({...prev, data:VANpartialResults.map((value, index) => {return { year: index+1, VAN: value}})}))
    },[VANpartialResults])  

    function handleSaveResult(){
        if(result !== null && result != "NaN"){
            updateIndicatorValue({indicatorName:"VAN", newValue:result});
            showSuccessMessage("Valor actualizado")
        }else{
            showErrorMessage("No has efectuado ningún cálculo")
        }
    }

    return ( 
        <section className = "show-VAN-result">
            {toast()}
            <AgChartsReact options={chartOptions} />
            <section className = "show-result-VAN-calculation">
                <div>Resultado:</div>
                <span>{result !== null && result != "NaN"?result:null}</span>
            </section> 
            <button className = "save-result-VAN-calculation" onClick={() => handleSaveResult()}>Guardar Nuevo Resultado</button>
        </section>
     );
}

export default ShowVANResult;