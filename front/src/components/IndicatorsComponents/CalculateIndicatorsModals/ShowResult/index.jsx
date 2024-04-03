import './index.css'
function ShowResult({result = null}) {
    return (
        <>
            <section className = "show-result-indicator-calculation">
                <div>Resultado:</div>
                <span>{result?.toFixed(2)}</span>
            </section> 
            <button className = "save-result-indicator-calculation">Guardar Nuevo Resultado</button>
        </>
    );
}

export default ShowResult;