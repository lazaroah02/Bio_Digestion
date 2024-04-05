import {useLocation} from 'react-router-dom'
import GoBackButton from '../components/GoBackButton';
import IndicatorsGrid from '../components/IndicatorsComponents/IndicatorsGrid';
import {useManageIndicators} from '../hooks/useManageIndicators'
import {useState} from 'react'
import './pagesStyles/indicators.css';

function Indicators() {
    const location = useLocation();
    const project = location.state;
    const {indicators, loadingIndicators, updateIndicatorValue} = useManageIndicators({projectId:project.id});
    const [indicatorResults, setIndicatorResults] = useState({
        VAN:null,
        TIR:null,
        TRI:null,
        LEC:null,
        BPM:null
    })

    function setIndicatorResult({indicatorName, result}){
        setIndicatorResults((prev) => ({...prev, [indicatorName]:result}))
    }

    return ( 
        <article className = "indicators-page">
            <div className = "indicators-page-main">
                <header className = "header">
                    <GoBackButton/>
                    <h4>{project.name}</h4>
                </header>
                <div className = "advise">Selecciona para calcular</div>
                <section className = "indicators-grid-container">
                    <IndicatorsGrid indicators = {indicators} updateIndicatorValue={updateIndicatorValue} indicatorResults={indicatorResults} setIndicatorResult = {setIndicatorResult}/>
                </section>
            </div>
            <aside className = "indicators-page-graphics-section">
                
            </aside>
        </article>
     );
}

export default Indicators;