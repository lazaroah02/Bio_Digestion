import './index.css'
import {Dialog} from 'primereact/dialog'
import { useState } from 'react';
import UserForm from '../UserForm';

function CreateUser({createUser}) {
    const [show, setShow] = useState(false)
    return ( 
        <>
            <button className = "create-user-button" onClick={() => setShow(true)}>Create</button>
            <Dialog
                visible={show}
                onHide={() => setShow(false)}
                position="center"
                draggable={false}
                resizable={false}
                style={{maxWidth: "93vw", width:'500px' }}
                header = "Crear Nuevo Usuario"
            >
                <UserForm setShow={setShow} createUser={createUser}/>
            </Dialog>
        </>
     );
}

export default CreateUser;