import { AgChartsReact } from 'ag-charts-react'
import {useEffect, useState} from 'react'
import {useIsMobileMode} from '../../../hooks/useIsMobileMode'
import {CHART_OPTIONS_INITIAL_DATA} from '../../../data/chartOptionsInitialData'
import './index.css'

function CompareProjectIndicatorsGraphics({projects}) {
    const {mobileMode} = useIsMobileMode({mobileWidth:500})
    const [chartsOptions, setChartsOptions] = useState(CHART_OPTIONS_INITIAL_DATA);

    //update Charts on change products
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

    //show charts in horizontal when is mobile mode and vertical on Desktop
    useEffect(() => {
        let chartsOptionsCopy = {...chartsOptions}
        if(mobileMode){
            chartsOptionsCopy.VAN.series = [{ type: 'bar', direction: 'horizontal', xKey: 'name', yKey: 'indicators.VAN' }]
            chartsOptionsCopy.LEC.series = [{ type: 'bar', direction: 'horizontal', xKey: 'name', yKey: 'indicators.LEC' }]
            chartsOptionsCopy.TRI.series = [{ type: 'bar', direction: 'horizontal', xKey: 'name', yKey: 'indicators.TRI' }]
            chartsOptionsCopy.TIR.series = [{ type: 'bar', direction: 'horizontal', xKey: 'name', yKey: 'indicators.TIR' }]
            chartsOptionsCopy.BPM.series = [{ type: 'bar', direction: 'horizontal', xKey: 'name', yKey: 'indicators.BPM' }]
            chartsOptionsCopy.Z.series = [{ type: 'bar', direction: 'horizontal', xKey: 'name', yKey: 'indicators.Z' }]
        }else{
            chartsOptionsCopy.VAN.series = [{ type: 'bar', xKey: 'name', yKey: 'indicators.VAN' }]
            chartsOptionsCopy.LEC.series = [{ type: 'bar', xKey: 'name', yKey: 'indicators.LEC' }]
            chartsOptionsCopy.TRI.series = [{ type: 'bar', xKey: 'name', yKey: 'indicators.TRI' }]
            chartsOptionsCopy.TIR.series = [{ type: 'bar', xKey: 'name', yKey: 'indicators.TIR' }]
            chartsOptionsCopy.BPM.series = [{ type: 'bar', xKey: 'name', yKey: 'indicators.BPM' }]
            chartsOptionsCopy.Z.series = [{ type: 'bar', xKey: 'name', yKey: 'indicators.Z' }]
        }
        setChartsOptions(chartsOptionsCopy)
    },[mobileMode])

    return ( 
        <section>
            <section className = "graphics-section-title"><h1>Comparación entre los Indicadores de cada Proyecto</h1></section>
            <div className = "graphic-container">
                <AgChartsReact options={chartsOptions.VAN}/>
            </div>
            <div className = "graphics-separator"></div>
            <div className = "graphic-container">
                <AgChartsReact options={chartsOptions.LEC} />
            </div>
            <div className = "graphics-separator"></div>
            <div className = "graphic-container">
                <AgChartsReact options={chartsOptions.TRI} />
            </div>
            <div className = "graphics-separator"></div>
            <div className = "graphic-container">
                <AgChartsReact options={chartsOptions.TIR} />
            </div>
            <div className = "graphics-separator"></div>
            <div className = "graphic-container">
                <AgChartsReact options={chartsOptions.BPM} />
            </div>
            <div className = "graphics-separator"></div>
            <div className = "graphic-container">
                <AgChartsReact options={chartsOptions.Z} />
            </div>
            <div className = "graphics-separator"></div>
            <div className = "graphics-separator"></div>
            <div className = "graphics-separator"></div>
        </section>
    );
}

export default CompareProjectIndicatorsGraphics;