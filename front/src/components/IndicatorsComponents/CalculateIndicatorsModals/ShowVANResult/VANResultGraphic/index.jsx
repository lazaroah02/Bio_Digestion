import {useState, useEffect} from 'react'
import { AgChartsReact } from 'ag-charts-react'

function VANResultGraphic({VANpartialResults = []}) {
    const [chartOptions, setChartOptions] = useState({
        // Data: Data to be displayed in the chart
        data: VANpartialResults.map((value, index) => {return { year: index+1, VAN: parseFloat(value)}}),
        // Series: Defines which chart type and data to use
        series: [{ type: 'line', xKey: 'year', yKey: 'VAN' }],
        title: { text: 'VAN anual durante 30 años' },
      });

    //update Chart on change VANpartialResults
    useEffect(() => {
        if(VANpartialResults != null){
            setChartOptions((prev) => ({...prev, data:VANpartialResults.map((value, index) => {return { year: index+1, VAN: parseFloat(value)}})}))
        }
    },[VANpartialResults])

    return ( 
        <AgChartsReact options={chartOptions} />
     );
}

export default VANResultGraphic;