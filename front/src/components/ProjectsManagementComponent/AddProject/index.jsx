import { Dialog } from "primereact/dialog";
import { useState } from "react";
import {useToast} from '../../../hooks/useToast'
import './index.css'

function AddProject({createProject, className}) {
    const [show, setShow] = useState(false)
    const {toast, showToast} = useToast()

    function handleCreateProject(e){
        e.preventDefault()
        let name = e.target["name"].value
        createProject({name:name, callback: (success) => {
            if(success.status == 201){
                showToast({
                    severity: "success",
                    summary: "Éxito",
                    detail: success.message,
                })
                setShow(false)
            }
            else{
                showToast({
                    severity: "error",
                    summary: "Error",
                    detail: success.message,
                })
            }
        }})
    }
  return (
    <>
      {toast()}
      <button className = {className} onClick={() => setShow(true)}>Crear Proyecto <span>+</span></button>
      <Dialog
        visible={show}
        onHide={() => setShow(false)}
        position="center"
        draggable={false}
        resizable={false}
        style={{maxWidth: "90vw" }}
        header = "Crear Nuevo Proyecto"
        className="create-project-dialog"
        headerClassName="create-project-dialog-header"
      >
        <form className = "create-project-form" action = "" onSubmit={(e) => handleCreateProject(e)}>
            <input id = "name" type = "text" placeholder = "Escribe el nombre del proyecto"/>
            <div>
              <button type = "button" onClick={() => setShow(false)}>Cancelar</button>
              <button>Crear</button>
            </div>
        </form>
      </Dialog>
    </>
  );
}

export default AddProject;
