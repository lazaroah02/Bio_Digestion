import './index.css'
function ShowResult({result = 50.6}) {
    return (
        <>
            <section className = "show-result-indicator-calculation">
                <div>Resultado:</div>
                <span>{result}</span>
            </section> 
            <button className = "save-result-indicator-calculation">Guardar Nuevo Resultado</button>
        </>
    );
}

export default ShowResult;