import './index.css'
import UserCard from './UserCard';
import {userInfo} from '../../../utils/normalizeUserFormInfo'

function UsersGrid({users, selectedUsers, setSelectedUsers, deletingUsers}) {
    function handleCheckUser({ checked, user }) {
        // Si el checkbox está marcado, agregar el usuario al array de seleccionados
        if (checked) {
          setSelectedUsers((prev) => [...prev, user]);
        } else {
          // Si el checkbox no está marcado, quitar el usuario del array de seleccionados
          setSelectedUsers((prev) =>
            prev.filter((item) => item.id !== user.id)
          );
        }
      }
    return ( 
        <section className = "users-grid-container">
            <section className = "users-grid">
                {users.map((user) => 
                    <UserCard key = {user.id} user = {userInfo(user)} selectedUsers = {selectedUsers} handleCheckUser={handleCheckUser} deletingUsers = {deletingUsers}/>
                )}
                <article className = "user-card transparent"></article>
                <article className = "user-card transparent"></article>
            </section>
        </section>
     );
}

export default UsersGrid;