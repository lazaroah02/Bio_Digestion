import EditIcon from '../../../icons/EditIcon'
import LockIcon from '../../../icons/LockIcon'

function ActionButtons() {
    return ( 
        <section className = "user-list-action-buttons">
            <EditIcon color = "rgba(0, 0, 0, 0.7)"/>
            <LockIcon color = "rgba(0, 0, 0, 0.7)"/>
        </section>
     );
}

export default ActionButtons;