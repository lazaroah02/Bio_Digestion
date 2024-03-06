import './index.css'
import ActionButtons from '../../UserList/ActionButtons'
import CheckIcon from '../../../../icons/CheckIcon'
import XIcon from '../../../../icons/XIcon'
import {formatDateWithTime } from '../../../../utils/formatDate'
import {Checkbox} from 'primereact/checkbox'

function UserCard({user, selectedUsers, handleCheckUser, deletingUsers}) {
    return ( 
        <article className = "user-card">
            <header className = "user-card-header">
                <span>{user.username}</span>
                {deletingUsers?<Checkbox
                    checked={selectedUsers.some(selectedProduct => user.id === selectedProduct.id)}
                    onChange={(e) => handleCheckUser({checked:e.checked, user:user})}
                    />:null}
                </header>
            <section className = "user-card-body">
                <div>{user.email}</div>
                <div>Admin: {user.isStaff?<CheckIcon/>:<XIcon/>} Activo: {user.isActive?<CheckIcon/>:<XIcon/>}</div>
                <div>Último inicio de sesión:<br/>{formatDateWithTime(user.lastLogin)}</div>
                <div>Fecha de creación: <br/>{formatDateWithTime(user.dateJoined)}</div>
            </section>
            <footer className = "user-card-footer"><ActionButtons user = {user}/></footer>
        </article>
     );
}

export default UserCard;