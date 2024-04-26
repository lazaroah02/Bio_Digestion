import './index.css'
import { useState, useRef } from 'react';
import { useToast } from '../../../../hooks/useToast';
function IndicatorCard({indicatorName, indicatorValue, asideColor, title, children, updateIndicatorValue}) {
    const [editting, setEdditing] = useState(false)
    const inputRef = useRef(null)
    const {toast, showSuccessMessage} = useToast()
    function handleSave(){
        setEdditing(false)
        updateIndicatorValue({indicatorName:indicatorName, newValue:inputRef.current?.value})
        showSuccessMessage("Operación Exitosa")
    }
    return ( 
        <article className="indicator-card">
            {toast()}
            <aside style={{ backgroundColor: asideColor }}></aside>
            <section>
                <header>{title}</header>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className = "input-and-buttons-container">
                        <input ref = {inputRef} type="number" defaultValue={indicatorValue} step="0.01" readOnly = {!editting} required/>
                        <div >
                            <button className = "edit-indicator-value-button" onClick = {() => setEdditing(!editting)} type = "reset">{editting?'Cancelar':'Editar'}</button>
                            {editting?<button className = "save-indicator-value-button" type="button" onClick={() => handleSave()}>Guardar</button>:null}
                        </div>
                    </div>
                    <footer>No conoces el valor? {children}</footer>
                </form>
            </section>
        </article>
     );
}

export default IndicatorCard;