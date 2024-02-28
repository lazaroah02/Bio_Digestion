import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import {useToast} from '../../../hooks/useToast'

function AddProject({createProject}) {
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
      <button onClick={() => setShow(true)}>Agregar Proyecto</button>
      <Dialog
        visible={show}
        onHide={() => setShow(false)}
        position="center"
        draggable={false}
        resizable={false}
        style={{ width: "90vw", maxWidth: "850px" }}
        header = "Agregar Proyecto"
        contentClassName=""
      >
        <form action = "" onSubmit={(e) => handleCreateProject(e)}>
            <label htmlFor = "name">Nombre</label>
            <InputText id = "name" type = "text"/>
            <button>Agregar</button>
        </form>
      </Dialog>
    </>
  );
}

export default AddProject;
