import './index.css'
import { useState } from 'react';
function IndicatorCard({asideColor, title, indicatorValue, children}) {
    const [editting, setEdditing] = useState(false)
    function handleSave(e){
        e.preventDefault()
        setEdditing(false)
    }
    return ( 
        <article className="indicator-card">
            <aside style={{ backgroundColor: asideColor }}></aside>
            <section>
                <header>{title}</header>
                <form onSubmit={(e) => handleSave(e)}>
                    <div className = "input-and-buttons-container">
                        <input type="number" defaultValue={indicatorValue?.toFixed(2)} step="0.01" readOnly = {!editting}/>
                        <div >
                            <button className = "edit-indicator-value-button" onClick = {() => setEdditing(!editting)} type = "button">{editting?'Cancelar':'Editar'}</button>
                            {editting?<button className = "save-indicator-value-button" type="submit" onClick={() =>{setEdditing(false)}}>Guardar</button>:null}
                        </div>
                    </div>
                    <footer>No conoces el valor? {children}</footer>
                </form>
            </section>
        </article>
     );
}

export default IndicatorCard;