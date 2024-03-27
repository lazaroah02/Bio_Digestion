import {useState} from 'react'
import {Dialog} from 'primereact/dialog'
import XIcon from '../../../../icons/XIcon'
import './index.css'

function CalculateIndicatorModal({title, asideColor = "", indicatorForm = () => null, asideContent  = () => null}) {
    const [show, setShow] = useState(false)
    return ( 
        <>
        <button onClick={() => setShow(true)}>Calcular</button>
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
                        <h1 style={{color:asideColor}}>{title}</h1>
                        <button onClick={() => setShow(false)}><XIcon/></button>
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