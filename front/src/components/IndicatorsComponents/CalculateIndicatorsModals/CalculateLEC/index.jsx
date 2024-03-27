import {useState} from 'react'
import {Dialog} from 'primereact/dialog'
function CalculateLEC() {
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
            style={{maxWidth: "93vw", width:'500px' }}
            header = "Calcular LEC"
        >
        </Dialog>
        </> 
    );
}

export default CalculateLEC;