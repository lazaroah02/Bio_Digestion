import './index.css'
function ShowResult({result = null, unit = "", mobileMode}) {
    return (
        <>
            {!mobileMode?
            <>
                <section className = "show-result-design-calculation">
                    <div>Resultado:</div>
                    <span>{result !== null && result != "NaN"?result + ' ' + unit:null}</span>
                </section> 
            </>
                :
                <div className = "show-result-design-calculation-on-mobile">
                    <span>Resultado: {result !== null && result != "NaN"? result + " " + unit :null}</span>
                </div>
            }
        </>
    );
}

export default ShowResult;