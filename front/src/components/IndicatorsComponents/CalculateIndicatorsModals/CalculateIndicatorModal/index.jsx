import {useState} from 'react'
import {Dialog} from 'primereact/dialog'
import XIcon from '../../../../icons/XIcon'
import './index.css'
import '../commonStyles.css'

function CalculateIndicatorModal({title, validationBeforeShowModal = (fun) => {return fun()}, calculateButtonExtraStyles = "", asideColor = "", indicatorForm = null, asideContent  = null, resetIndicatorResults = () => {}}) {
    const [show, setShow] = useState(false)
    function showModal(){
        setShow(true)
    }
    return ( 
        <>
        <button onClick={() => validationBeforeShowModal(showModal)} className = {"small-green-button " + calculateButtonExtraStyles}>Calcular</button>
        <Dialog
            visible={show}
            onHide={() => {
                resetIndicatorResults()
                setShow(false)
            }}
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
                            <button onClick={() => {
                                setShow(false)
                                resetIndicatorResults()
                                }}><XIcon/></button>
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