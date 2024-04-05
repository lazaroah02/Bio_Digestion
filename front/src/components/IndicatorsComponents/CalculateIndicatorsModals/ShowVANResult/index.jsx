import './index.css'

function ShowVANResult({result = null}) {
    return ( 
        <section className = "show-VAN-result">
            <section className = "show-result-VAN-calculation">
                <div>Resultado:</div>
                <span>{result?.toFixed(2)}</span>
            </section> 
            <button className = "save-result-VAN-calculation">Guardar Nuevo Resultado</button>
        </section>
     );
}

export default ShowVANResult;