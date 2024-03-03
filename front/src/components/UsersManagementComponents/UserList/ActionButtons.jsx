import EditIcon from '../../../icons/EditIcon'
import ChangePasswordModal from '../ChangePasswordModal';

function ActionButtons({user, changePassword}) {
    return ( 
        <section className = "user-list-action-buttons">
            <button><EditIcon color = "rgba(0, 0, 0, 0.7)"/></button>
            <ChangePasswordModal userId={user.id} changePassword={changePassword}/>
        </section>
     );
}

export default ActionButtons;