import {Dialog} from 'primereact/dialog'
import { useState } from 'react';
import './index.css'

function CalculateQ() {
    const [show, setShow] = useState(false)
    return ( 
        <>
        <button type = "button" className = "calculate-Q-button" onClick={() => setShow(true)}>Calcular</button>
        <Dialog
            visible={show}
            onHide={() => setShow(false)}
            position="center"
            draggable={false}
            resizable={false}
            style={{maxWidth: "93vw"}}
        >

        </Dialog>
        </>
     );
}

export default CalculateQ;