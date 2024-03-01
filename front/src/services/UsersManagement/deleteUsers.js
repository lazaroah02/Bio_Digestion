import {USERS_MANAGEMENT_URL} from '../../settings'

export function deleteUsers({users, token}){
    return fetch(USERS_MANAGEMENT_URL, {
        method: 'DELETE',
        headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({users_to_delete:users})
    })
    .then(res => {
        if(res.status == 200){
            return
        }
        else{
            throw new Error('Error al eliminar el/los usuarios')
        }
    })
}