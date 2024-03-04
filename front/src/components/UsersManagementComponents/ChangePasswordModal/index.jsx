import { useState } from "react";
import { Dialog } from "primereact/dialog";
import LockIcon from '../../../icons/LockIcon'
import { useToast } from "../../../hooks/useToast";
import {validatePassword} from '../../../utils/validatePassword'
import './index.css'


function ChangePasswordModal({userId, changePassword}) {
    const [show, setShow] = useState(false)
    const {toast, showErrorMessage} = useToast()
    const [loading, setLoading] = useState(false)

    function handleChangePassword(e){
        e.preventDefault()
        setLoading(true)
        let pass1 = e.target['pass1'].value
        let pass2 = e.target['pass2'].value
        let validation = validatePassword(pass2)
        if(pass1 != pass2){
            setLoading(false)
            return showErrorMessage(`Las contraseñas deben ser iguales`)
        }
        if(validation !== 'ok'){
            setLoading(false)
            return showErrorMessage(validation)
        }
        changePassword({newPassword: e.target['pass2'].value, userId:userId, changePasswordModalCallback:() => {
            setShow(false)
            setLoading(false)
        }})
    }

    return ( 
        <>
            <button title = "cambiar contraseña" type = " button" onClick={() => setShow(true)}><LockIcon color = "rgba(0, 0, 0, 0.7)" /></button>
            {toast()}
            <Dialog
                visible={show}
                onHide={() => setShow(false)}
                position="center"
                draggable={false}
                resizable={false}
                style={{maxWidth: "90vw" }}
                header = "Cambiar Contraseña"
                className="create-project-dialog"
                headerClassName="create-project-dialog-header"
            >
                <form className = "create-project-form" action = "" onSubmit={(e) => handleChangePassword(e)}>
                    <input id = "pass1" type = "password" placeholder = "Escribe la nueva contraseña" required = {true}/>
                    <input id = "pass2" type = "password" placeholder = "Confirmar contraseña" required = {true}/>
                    <div>
                    <button type = "button" onClick={() => setShow(false)}>Cancelar</button>
                    <button>{loading?'Enviando ...':'Enviar'}</button>
                    </div>
                </form>
            </Dialog>
        </>
     )
}

export default ChangePasswordModal