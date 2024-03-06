import {useParams} from 'react-router-dom'
import './pagesStyles/indicators.css';

function Indicators() {
    const {projectId} = useParams()
    return ( 
        <section className = "indicators-page">Indicators of {projectId}</section>
     );
}

export default Indicators;