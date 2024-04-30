import './pagesStyles/graphics.css'
import {useManageProjects} from '../hooks/useManageProjects'
import Loader from '../components/Loader'
import { AgChartsReact } from 'ag-charts-react'
import {useEffect, useState} from 'react'

function Graphics() {
    const {projects, loadingProjects} = useManageProjects()

    const [chartsOptions, setChartsOptions] = useState({
        VAN:{
            // Data: Data to be displayed in the chart
            data: [],
            // Series: Defines which chart type and data to use
            series: [{ type: 'bar', xKey: 'name', yKey: 'indicators.VAN' }],
            title: { text: 'Valor Actual Neto (VAN)'},
        },
        LEC:{
            // Data: Data to be displayed in the chart
            data: [],
            // Series: Defines which chart type and data to use
            series: [{ type: 'bar', xKey: 'name', yKey: 'indicators.LEC' }],
            title: { text: 'Costo Nivelado de la Electricidad (LEC)' },
        },
        TRI:{
            // Data: Data to be displayed in the chart
            data: [],
            // Series: Defines which chart type and data to use
            series: [{ type: 'bar', xKey: 'name', yKey: 'indicators.TRI' }],
            subtitle: {text: "En años",},
            title: { text: 'Tiempo de Recuperación de la Inversión (TRI)' },
        },
        TIR:{
            // Data: Data to be displayed in the chart
            data: [],
            // Series: Defines which chart type and data to use
            series: [{ type: 'bar', xKey: 'name', yKey: 'indicators.TIR' }],
            subtitle: {text: "En porciento(%)",},
            title: { text: 'Tasa Interna de Retorno (TIR)' },
        },
        BPM:{
            // Data: Data to be displayed in the chart
            data: [],
            // Series: Defines which chart type and data to use
            series: [{ type: 'bar', xKey: 'name', yKey: 'indicators.BPM' }],
            title: { text: 'Potencial de Biometano Generado (BPM)' },
        },
        Z:{
            // Data: Data to be displayed in the chart
            data: [],
            // Series: Defines which chart type and data to use
            series: [{ type: 'bar', xKey: 'name', yKey: 'indicators.Z' }],
            title: { text: 'Z' },
        },
    });

    //update Chart on change VANpartialResults
    useEffect(() => {
        let chartsOptionsCopy = {...chartsOptions}
        chartsOptionsCopy.VAN.data = projects
        chartsOptionsCopy.LEC.data = projects
        chartsOptionsCopy.TRI.data = projects
        chartsOptionsCopy.TIR.data = projects
        chartsOptionsCopy.BPM.data = projects
        chartsOptionsCopy.Z.data = projects
        setChartsOptions(chartsOptionsCopy)
    },[projects])

    return ( 
        <section className = "graphics-page">
            {loadingProjects?
                <section className="graphics-page-loader-container">
                    <div>
                        <Loader />
                    </div>
                </section>
                :null
            }
            <section className = "graphics-page-title"><h1>Comparación entre los Indicadores de cada Proyecto</h1></section>
            <div className = "graphic-container">
                <AgChartsReact options={chartsOptions.VAN}/>
            </div>
            <div className = "graphic-container">
                <AgChartsReact options={chartsOptions.LEC} />
            </div>
            <div className = "graphic-container">
                <AgChartsReact options={chartsOptions.TRI} />
            </div>
            <div className = "graphic-container">
                <AgChartsReact options={chartsOptions.TIR} />
            </div>
            <div className = "graphic-container">
                <AgChartsReact options={chartsOptions.BPM} />
            </div>
            <div className = "graphic-container">
                <AgChartsReact options={chartsOptions.Z} />
            </div>
        </section>
    );
}

export default Graphics;