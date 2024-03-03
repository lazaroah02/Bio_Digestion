import { USERS_MANAGEMENT_URL } from "../../settings"
export function createUser({info, token}){
    return fetch(USERS_MANAGEMENT_URL, {
        method: 'POST',
        headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    .then(res => {
        if(res.status == 201){
            return res.json()
            .then(data => {
                return data
            })
        }
        else{
            return res.json()
            .then(err => {
                if(err.username){
                    throw new Error('Existe un usuario con el mismo nombre de usuario')
                }
                throw new Error('Error al crear el usuario')
            })
        }
    })
}