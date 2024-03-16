import './index.css'

function IndicatorsGrid({indicators}) {
    return ( 
        <section className = "indicators-grid">
            <div className = "indicator-card">{indicators?.VAN.toFixed(2)}</div>
            <div className = "indicator-card">{indicators?.TRI.toFixed(2)}</div>
            <div className = "indicator-card">{indicators?.TIR.toFixed(2)}</div>
            <div className = "indicator-card">{indicators?.LEC.toFixed(2)}</div>
            <div className = "indicator-card">{indicators?.BPM.toFixed(2)}</div>
            <div className = "indicator-card">{indicators?.n}</div>
        </section>
     );
}

export default IndicatorsGrid;