import "./pagesStyles/users-management.css";
import { useManageUsers } from "../hooks/useManageUsers";
import UserList from "../components/UsersManagementComponents/UserList";
import { useState } from "react";
import OptionsDropdown from "../components/ProjectsManagementComponent/OptionsDropdown";
import Loader from "../components/Loader";
import TrashIcon from "../icons/TrashIcon";
import CreateUser from "../components/UsersManagementComponents/CreateUser";
import { useToast } from "../hooks/useToast";
import { useConfirmDialog } from "../hooks/useConfirmDialog";

function UsersManagement() {
  const { users, loadingUsers } = useManageUsers();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [deletingUsers, setDeletingUsers] = useState(false);
  const {toast, showToast} = useToast()
  const {confirmDialog, showConfirm} = useConfirmDialog()

  function deleteUsers(){
    
  }

  return (
    <section className="user-management-page">
        {toast()}
        {confirmDialog(deleteUsers)}
      {loadingUsers ? (
        <section className="projects-managment-loader-container">
          <div>
            <Loader />
          </div>
        </section>
      ) : null}
      <header className="projects-list-header">
        <span>Usuarios</span>
        <OptionsDropdown
          setDeletingProjects={setDeletingUsers}
          content={"Eliminar Usuario"}
        />
      </header>
      <UserList
        users={users}
        selectedUsers={selectedUsers}
        setSelectedUsers={setSelectedUsers}
        deletingUsers={deletingUsers}
      />
      {deletingUsers ? (
        <section className="confirm-deletion-buttons-container">
          <button onClick={() => setDeletingUsers(false)}>
            <span>Cancelar</span>
          </button>
          <button onClick={() => showConfirm(true)}>
            {selectedUsers.length == 0 ? (
              <span>Selecciona para eliminar</span>
            ) : (
              <span>Eliminar</span>
            )}{" "}
            <TrashIcon width="20px" color={"#EC0000"} />
          </button>
        </section>
      ) : (
        <CreateUser            
        />
      )}
    </section>
  );
}

export default UsersManagement;
