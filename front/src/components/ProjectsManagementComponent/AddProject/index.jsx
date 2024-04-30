import { Dialog } from "primereact/dialog";
import { useState } from "react";
import {useToast} from '../../../hooks/useToast'
import './index.css'

function AddProject({projects, createProject, className}) {
    const [show, setShow] = useState(false)
    const {toast, showErrorMessage, showSuccessMessage} = useToast()
    const [loading, setLoading] = useState(false)

    //create project
    function handleCreateProject(e){
        e.preventDefault()
        setLoading(true)
        let name = e.target["name"].value
        createProject({name:name, callback: (success) => {
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

    //validate that user have not more than 10 projects
    function handleShowCreateProjectModal(){
      if(projects.length >= 10){
        showErrorMessage("Has alcanzado el número máximo de proyecto")
      }else
      setShow(true)
    }
  return (
    <>
      {toast()}
      <button className = {className} onClick={() => handleShowCreateProjectModal()}>Crear Proyecto <span>+</span></button>
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
            <input id = "name" type = "text" placeholder = "Escribe el nombre del proyecto" required = {true}/>
            <div>
              <button type = "button" onClick={() => setShow(false)}>Cancelar</button>
              <button>{loading?'Creando ...':'Crear'}</button>
            </div>
        </form>
      </Dialog>
    </>
  );
}

export default AddProject;
