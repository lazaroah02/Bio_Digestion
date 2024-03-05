import './index.css'
import UserCard from './UserCard';
import {userInfo} from '../../../utils/normalizeUserFormInfo'

function UsersGrid({users}) {
    return ( 
        <section className = "users-grid">
            {users.map((user) => 
                <UserCard key = {user.id} user = {userInfo(user)}/>
            )}
        </section>
     );
}

export default UsersGrid;