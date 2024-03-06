import {useLocation} from 'react-router-dom'
import GoBackButton from '../components/GoBackButton';
import IndicatorsGrid from '../components/IndicatorsComponents/IndicatorsGrid';
import './pagesStyles/indicators.css';

function Indicators() {
    const location = useLocation();
    const project = location.state;

    return ( 
        <article className = "indicators-page">
            <header className = "header">
                <GoBackButton/>
                <h4>{project.name}</h4>
            </header>
            <div className = "advise">Selecciona para calcular</div>
            <section className = "indicators-grid-container">
                <IndicatorsGrid/>
            </section>
        </article>
     );
}

export default Indicators;