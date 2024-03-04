import ChangePasswordModal from '../ChangePasswordModal';
import EditUser from '../EditUser';

function ActionButtons({user, changePassword, editUser}) {
    return ( 
        <section className = "user-list-action-buttons">
            <EditUser editUser = {editUser} user={user}/>
            <ChangePasswordModal userId={user.id} changePassword={changePassword}/>
        </section>
     );
}

export default ActionButtons;