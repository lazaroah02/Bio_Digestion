import './index.css'
import {useState} from 'react'
import {createUserObjectToAPI} from '../../../utils/normalizeUserFormInfo'
import {useToast} from '../../../hooks/useToast'
import {validatePassword} from '../../../utils/validatePassword'

function UserForm({setShow, createUser}) {
    const [loading, setLoading] = useState(false)
    const {toast, showErrorMessage, showSuccessMessage} = useToast()

    function handleCreateUser(e){
        e.preventDefault();
        setLoading(true)
        let passValidation = validatePassword(e.target["password"].value)
        if(passValidation !== 'ok'){
            return showErrorMessage(passValidation)
        }
        let formInfo = createUserObjectToAPI({
            username: e.target["username"].value,
            email: e.target["email"].value,
            firstName: e.target["firstName"].value,
            lastName: e.target["lastName"].value,
            password: e.target["password"].value,
            isStaff: e.target["isStaff"].checked,
            isActive: e.target["isActive"].checked,
        })
        createUser({info: formInfo, callback:(success) => {
            if(success.status != 201) {
                setLoading(false)
                return showErrorMessage(success.message)
            }
            showSuccessMessage(success.message)
            setLoading(false)
            setShow(false)
        }})
    }

    return ( 
        <>
            {toast()} 
            <form className = 'user-form' action = '' onSubmit = {(e) => handleCreateUser(e)}> 
                {/*username*/}
                <div>
                    <label htmlFor="username">Nombre de Usuario <strong>*</strong></label>
                    <input id = "username" type="text" required = {true}/>
                </div>
                {/*email*/}
                <div>
                    <label htmlFor="email">Correo</label>
                    <input id = "email" type="text" />
                </div>
                {/*first_name*/}
                <div>
                    <label htmlFor="firstName">Nombre</label>
                    <input id = "firstName" type="text" />
                </div>
                {/*last_name*/}
                <div>
                    <label htmlFor="lastName">Apellidos</label>
                    <input id = "lastName" type="text"/>
                </div>
                {/*password*/}
                <div>
                    <label htmlFor="password">Contraseña <strong>*</strong></label>
                    <input id = "password" type="password" required = {true}/>
                </div>
                {/*is_staff*/}
                <span>
                    <input id = "isStaff" type="checkbox" />
                    <label htmlFor="isStaff">Es Admin</label>
                </span>
                {/*is_active*/}
                <span>
                    <input id = "isActive" type="checkbox"/>
                    <label htmlFor="isActive">Activo</label>
                </span>
                <section className = "user-form-buttons-container">
                    <button type = 'button' onClick = {() => setShow(false)}>Cancelar</button>
                    <button>{loading?'Enviando ...':'Enviar'}</button>
                </section>
            </form>
        </>
     );
}

export default UserForm;