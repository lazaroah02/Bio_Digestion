import './index.css'
import ActionButtons from '../../UserList/ActionButtons'
import CheckIcon from '../../../../icons/CheckIcon'
import XIcon from '../../../../icons/XIcon'
import UserIcon from '../../../../icons/UserIcon'
import {Checkbox} from 'primereact/checkbox'

function UserCard({user, selectedUsers, handleCheckUser, deletingUsers, editUser, changePassword}) {
    return ( 
        <article className = {selectedUsers.some(selectedProduct => user.id === selectedProduct.id)?'user-card selected':'user-card'}>
            <header className = "user-card-header">
                <div className = "user-card-username-container"><UserIcon/>{user.username}</div>
                <ActionButtons user = {user} editUser={editUser} changePassword={changePassword}/>
                </header>
            <section className = "user-card-body">
                <div className = "email">{user.email}</div>
                <div className = "admin-active-status">Admin: {user.isStaff?<CheckIcon color='#007C00'/>:<XIcon color='#007C00'/>} Activo: {user.isActive?<CheckIcon color='#007C00'/>:<XIcon color='#007C00'/>}</div>
            </section>
        </article>
     );
}

export default UserCard;


  //{deletingUsers?<Checkbox
                //    checked={selectedUsers.some(selectedProduct => user.id === selectedProduct.id)}
                //    onChange={(e) => handleCheckUser({checked:e.checked, user:user})}
                //    />:null}