import { Dialog } from "primereact/dialog";
import { useState } from "react";
import UserForm from "../UserForm";
import EditIcon from "../../../icons/EditIcon";

function EditUser({ editUser, user }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <button title="editar"
      onClick={() => setShow(true)}
      >
        <EditIcon color="rgba(0, 0, 0, 0.7)" />
      </button>{" "}
      <Dialog
        visible={show}
        onHide={() => setShow(false)}
        position="center"
        draggable={false}
        resizable={false}
        style={{ maxWidth: "93vw", width: "500px" }}
        header="Editar Usuario"
      >
        <UserForm setShow={setShow} editUser={editUser} userFormProps={{creating:false, values:user}}/>
      </Dialog>
    </>
  );
}

export default EditUser;
