import {useState} from 'react'
import {ConfirmDialog} from 'primereact/confirmdialog'

export function useConfirmDialog() {

    const [show, showConfirm] = useState(false)

    function confirmDialog(confirmFunction){
        return <ConfirmDialog 
            visible={show} 
            onHide={() => showConfirm(false)} 
            acceptClassName='p-button-danger'
            acceptLabel='Aceptar'
            rejectLabel='Cancelar'
            message="Deseas continuar con la operación?" 
            header="Confirmación" 
            icon="pi pi-exclamation-triangle" 
            accept={() => confirmFunction()} 
            draggable = {false}
            resizable = {false}
            style={{maxWidth:"90%"}}
        />
    }


    return ( {confirmDialog, showConfirm} );
}

