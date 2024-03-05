import { Dialog } from "primereact/dialog";
import { useState } from "react";
import UserForm from "../UserForm";
import EyeIcon from "../../../icons/EyeIcon";

function UserDetail({ user }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <button title="detalles"
      onClick={() => setShow(true)}
      >
        <EyeIcon color="rgba(0, 0, 0, 0.7)"/>
      </button>{" "}
      <Dialog
        visible={show}
        onHide={() => setShow(false)}
        position="center"
        draggable={false}
        resizable={false}
        style={{ maxWidth: "93vw", width: "500px" }}
        header="Detalles de Usuario"
      >
        <UserForm setShow={setShow} userFormProps={{creating:false, values:user, disabled:true}}/>
      </Dialog>
    </>
  );
}

export default UserDetail;
