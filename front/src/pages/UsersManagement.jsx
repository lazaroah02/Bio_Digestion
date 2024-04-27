import "./pagesStyles/users-management.css";
import { useManageUsers } from "../hooks/useManageUsers";
import UserList from "../components/UsersManagementComponents/UserList";
import { useState } from "react";
import OptionsDropdown from "../components/ProjectsManagementComponent/OptionsDropdown";
import Loader from "../components/Loader";
import TrashIcon from "../icons/TrashIcon";
import DocIcon from "../icons/DocIcon";
import CreateUser from "../components/UsersManagementComponents/CreateUser";
import { useToast } from "../hooks/useToast";
import { useConfirmDialog } from "../hooks/useConfirmDialog";
import { useIsMobileMode } from "../hooks/useIsMobileMode";
import UserGrid from "../components/UsersManagementComponents/UserGrid";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import UsersReport from "../PdfTemplates/UsersReport";
import PdfTemplate from "../PdfTemplates/PdfTemplate";

function UsersManagement() {
  const {
    users,
    loadingUsers,
    handleDeleteUsers,
    handleChangePassword,
    handleCreateUser,
    handleEditUser,
  } = useManageUsers();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [deletingUsers, setDeletingUsers] = useState(false);
  const { toast, showErrorMessage, showSuccessMessage } = useToast();
  const { confirmDialog, showConfirm } = useConfirmDialog();
  const { mobileMode } = useIsMobileMode({ mobileWidth: 900 });

  //delete users
  function deleteUsers() {
    if (selectedUsers.length == 0) {
      return showErrorMessage("Debes seleccionar algun usuario");
    }
    handleDeleteUsers({
      users: selectedUsers.map((user) => user.id),
      callback: (success) => {
        if (success.status != 200) {
          return showErrorMessage(success.message);
        }
        showSuccessMessage(success.message);
        setDeletingUsers(false);
        setSelectedUsers([]);
      },
    });
  }

  //change password
  function changePassword({
    newPassword,
    userId,
    changePasswordModalCallback,
  }) {
    handleChangePassword({
      userId: userId,
      newPassword: newPassword,
      callback: (success) => {
        if (success.status != 200) {
          return showErrorMessage(success.message);
        }
        showSuccessMessage(success.message);
        changePasswordModalCallback();
      },
    });
  }

  //show the select field of each row
  function startUserDeletion() {
    setDeletingUsers(true);
  }

  //header dropdown options
  const headerDropdownOptions = [
    {
      fun: startUserDeletion,
      content: "Eliminar Usuario",
      icon: <TrashIcon color={"rgba(0, 0, 0, 0.9)"} width={"20px"} />,
    },
    {
      fun: () => {},
      content: (
        <PDFDownloadLink
          document={<PdfTemplate><UsersReport /></PdfTemplate>}
          fileName="Usuarios de Bio Digestión.pdf"
          className="generate-pdf-link"
        >
          {({ loading }) =>
            loading ? "Cargando documento..." : "Generar Reporte"
          }
        </PDFDownloadLink>
      ),
      icon: <DocIcon color={"rgba(0, 0, 0, 0.6)"} width={"17px"} />,
    },
  ];

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
        <OptionsDropdown optionsProps={headerDropdownOptions} />
      </header>
      <PDFViewer>
        <PdfTemplate><UsersReport/></PdfTemplate>
      </PDFViewer>
      {!mobileMode ? (
        <UserList
          users={users}
          selectedUsers={selectedUsers}
          setSelectedUsers={setSelectedUsers}
          deletingUsers={deletingUsers}
          changePassword={changePassword}
          editUser={handleEditUser}
        />
      ) : (
        <UserGrid
          users={users}
          setSelectedUsers={setSelectedUsers}
          selectedUsers={selectedUsers}
          deletingUsers={deletingUsers}
          changePassword={changePassword}
          editUser={handleEditUser}
        />
      )}
      {deletingUsers ? (
        <section className="confirm-deletion-buttons-container user-confirm-deletion-buttons">
          <button
            onClick={() => {
              setSelectedUsers([]);
              setDeletingUsers(false);
            }}
          >
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
        <CreateUser createUser={handleCreateUser} />
      )}
    </section>
  );
}

export default UsersManagement;
