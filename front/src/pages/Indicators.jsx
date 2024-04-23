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
        VANpartialResults:[],
        TIR:null,
        TRI:null,
        LEC:null,
        BPM:null
    })

    function setIndicatorResult({indicatorName, result}){
        setIndicatorResults((prev) => ({...prev, [indicatorName]:result}))
    }

    function resetIndicatorResults(){
        setIndicatorResults(
            {
                VAN:null,
                VANpartialResults:[],
                TIR:null,
                TRI:null,
                LEC:null,
                BPM:null
            }
        )
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
                    <IndicatorsGrid resetIndicatorResults = {resetIndicatorResults} indicators = {indicators} updateIndicatorValue={updateIndicatorValue} indicatorResults={indicatorResults} setIndicatorResult = {setIndicatorResult}/>
                </section>
            </div>
            <aside className = "indicators-page-aside-section">
                <div className = "show-Z-value-container"></div>
                <div className = "show-Z-graphic-container"></div>
            </aside>
        </article>
     );
}

export default Indicators;