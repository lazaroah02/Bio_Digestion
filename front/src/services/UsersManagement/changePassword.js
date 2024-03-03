import { USERS_MANAGEMENT_URL } from "../../settings"

export function changePassword({userId, newPassword, token}) {
    return fetch(`${USERS_MANAGEMENT_URL}${userId}/change_password/`, {
        method: 'PUT',
        headers:{
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({new_password: newPassword})
    })
    .then(res => {
        if(res.status == 200){
            return
        }
        else{
            return res.json()
            .then(data => {
                throw new Error(data.password)
            })
        }
    })
}

