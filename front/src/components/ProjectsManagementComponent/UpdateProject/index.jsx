import { Dialog } from "primereact/dialog";
import { useState } from "react";
import {useToast} from '../../../hooks/useToast'
import EditIcon from '../../../icons/EditIcon'
import './index.css'

function UpdateProject({project, updateProject, className = ""}) {
    const [show, setShow] = useState(false)
    const {toast, showErrorMessage, showSuccessMessage} = useToast()
    const [loading, setLoading] = useState(false)

    //update project
    function handleUpdateProject(e){
        e.preventDefault()
        setLoading(true)
        let name = e.target["name"].value
        updateProject({id:project.id, newName:name, callback: (success) => {
            if(success.status == 201){
                showSuccessMessage(success.message)
                setShow(false)
                setLoading(false)
            }
            else{
              showErrorMessage(success.message)
              setLoading(false)
            }
        }})
    }
  return (
    <>
      {toast()}
      <button title = "editar proyecto" className = {className} onClick={() => setShow(true)}><EditIcon/></button>
      <Dialog
        visible={show}
        onHide={() => setShow(false)}
        position="center"
        draggable={false}
        resizable={false}
        style={{maxWidth: "90vw" }}
        header = "Editar Proyecto"
        className="create-project-dialog"
        headerClassName="create-project-dialog-header"
      >
        <form className = "create-project-form" action = "" onSubmit={(e) => handleUpdateProject(e)}>
            <input id = "name" type = "text" placeholder = "Escribe el nombre del proyecto" required = {true} defaultValue={project.name}/>
            <div>
              <button type = "button" onClick={() => setShow(false)}>Cancelar</button>
              <button>{loading?'Enviando ...':'Enviar'}</button>
            </div>
        </form>
      </Dialog>
    </>
  );
}

export default UpdateProject;
