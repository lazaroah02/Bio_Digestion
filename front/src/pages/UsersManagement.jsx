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
import {useIsMobileMode} from '../hooks/useIsMobileMode'
import UserGrid from '../components/UsersManagementComponents/UserGrid'

function UsersManagement() {
  const { users, loadingUsers, handleDeleteUsers, handleChangePassword, handleCreateUser, handleEditUser } = useManageUsers();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [deletingUsers, setDeletingUsers] = useState(false);
  const {toast, showErrorMessage, showSuccessMessage} = useToast()
  const {confirmDialog, showConfirm} = useConfirmDialog()
  const {mobileMode} = useIsMobileMode({mobileWidth: 900})

  //delete users
  function deleteUsers(){
    if (selectedUsers.length == 0) {
      return showErrorMessage("Debes seleccionar algun usuario")
    }
    handleDeleteUsers({users: selectedUsers.map(user => user.id), callback: (success) => {
        if (success.status != 200) {
          return showErrorMessage(success.message)
        } 
        showSuccessMessage(success.message)
        setDeletingUsers(false) 
    }})
  }
  

  //change password
  function changePassword({newPassword, userId, changePasswordModalCallback}){
    handleChangePassword({userId: userId, newPassword: newPassword, callback:(success) => {
      if(success.status != 200) {
        return showErrorMessage(success.message)
      }
      showSuccessMessage(success.message)
      changePasswordModalCallback()
    }})
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
      {!mobileMode?
        <UserList
          users={users}
          selectedUsers={selectedUsers}
          setSelectedUsers={setSelectedUsers}
          deletingUsers={deletingUsers}
          changePassword={changePassword}
          editUser = {handleEditUser}
        />
        :
        <UserGrid users = {users}/>
      }
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
          createUser = {handleCreateUser}         
        />
      )}
    </section>
  );
}

export default UsersManagement;
