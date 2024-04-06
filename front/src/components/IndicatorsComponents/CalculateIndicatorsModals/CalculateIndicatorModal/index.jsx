import {useState} from 'react'
import {Dialog} from 'primereact/dialog'
import XIcon from '../../../../icons/XIcon'
import './index.css'
import '../commonStyles.css'

function CalculateIndicatorModal({title, asideColor = "", indicatorForm = null, asideContent  = null}) {
    const [show, setShow] = useState(false)
    return ( 
        <>
        <button onClick={() => setShow(true)} className = "small-green-button">Calcular</button>
        <Dialog
            visible={show}
            onHide={() => setShow(false)}
            position="center"
            draggable={false}
            resizable={false}
            showHeader = {false}
            style={{maxWidth: "93vw", width:'900px'}}
            contentStyle={{borderRadius:'5px', padding:0}}
        >
            <section className = "calculate-indicator-modal">
                <article>
                    <header>
                        <div>
                            <h1>{title}</h1>
                            <button onClick={() => setShow(false)}><XIcon/></button>
                        </div>
                        <span>Ingrese los siguientes datos</span>
                    </header>
                    <section>
                        {indicatorForm}
                    </section>
                </article>
                <aside style = {{background:asideColor}}>{asideContent}</aside>
            </section>
        </Dialog>
        </> 
    );
}

export default CalculateIndicatorModal;