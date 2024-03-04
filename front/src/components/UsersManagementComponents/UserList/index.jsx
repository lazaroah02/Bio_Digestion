import UserIcon from '../../../icons/UserIcon'
import {DataTable} from 'primereact/datatable'
import { Column } from 'primereact/column';
import {formatDateWithTime} from '../../../utils/formatDate'
import CheckIcon from '../../../icons/CheckIcon'
import XIcon from '../../../icons/XIcon'
import ActionButtons from './ActionButtons'
import './index.css'

function UsersList({ users, selectedUsers, setSelectedUsers, deletingUsers, changePassword, editUser }) {
  return (
    <DataTable
      value={users}
      selectionMode={"checkbox"}
      selection={selectedUsers}
      onSelectionChange={(e) => setSelectedUsers(e.value)}
      dataKey="id"
      size="normal"
      className="users-list-datatable"
      stripedRows={true}
      scrollable scrollHeight={"73vh"}
    >
      {deletingUsers ? <Column selectionMode="multiple"></Column> : null}

      <Column
        field="username"
        header="Nombre de usuario"
        className="username-datatable-field"
        body={(user) => {
          return (
            <>
              <UserIcon width="18" />
              <span>{user.username}</span>
            </>
          );
        }}
      ></Column>
      <Column
        field="email"
        header="Email"
      ></Column>
      <Column
        field="is_staff"
        header="Admin"
        body = {(user) => {
          return (user.is_staff == true?<CheckIcon color = "rgba(0, 0, 0, 0.7)"/>:<XIcon color = "rgba(0, 0, 0, 0.7)"/>)
        }}
      ></Column>
      <Column
        field="is_active"
        header="Activo"
        body = {(user) => {
          return (user.is_active == true?<CheckIcon color = "rgba(0, 0, 0, 0.7)"/>:<XIcon color = "rgba(0, 0, 0, 0.7)"/>)
        }}
      ></Column>
      <Column
        field="last_login"
        header = "Último inicio de Sesión"
        body={(user) => {
          return (
              formatDateWithTime(user.last_login)
          );
        }}
      ></Column>
      <Column
        field="date_joined"
        header = "Fecha de creación"
        body={(user) => {
          return (
              formatDateWithTime(user.date_joined)
          );
        }}
      ></Column>
      <Column
        field=""
        header = "Acciones"
        body={(user) => {
          return (
              <ActionButtons user={user} changePassword={changePassword} editUser={editUser}/>
          );
        }}
      ></Column>
    </DataTable>
  );
}

export default UsersList;
