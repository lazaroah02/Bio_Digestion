import './index.css'
import { useState } from 'react';
function IndicatorCard({indicatorName, indicatorValue, asideColor, title, children, updateIndicatorValue}) {
    const [editting, setEdditing] = useState(false)
    function handleSave(e){
        e.preventDefault()
        setEdditing(false)
        updateIndicatorValue({indicatorName:indicatorName, newValue:e.target["indicatorValue"].value})
    }
    return ( 
        <article className="indicator-card">
            <aside style={{ backgroundColor: asideColor }}></aside>
            <section>
                <header>{title}</header>
                <form id = {`indicator-card-${indicatorName}-form`} onSubmit={(e) => handleSave(e)}>
                    <div className = "input-and-buttons-container">
                        <input id = "indicatorValue" type="number" defaultValue={indicatorValue} step="0.01" readOnly = {!editting} required/>
                        <div >
                            <button className = "edit-indicator-value-button" onClick = {() => setEdditing(!editting)} type = "reset">{editting?'Cancelar':'Editar'}</button>
                            {editting?<button className = "save-indicator-value-button" type="submit">Guardar</button>:null}
                        </div>
                    </div>
                    <footer>No conoces el valor? {children}</footer>
                </form>
            </section>
        </article>
     );
}

export default IndicatorCard;