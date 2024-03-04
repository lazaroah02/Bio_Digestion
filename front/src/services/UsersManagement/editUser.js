import { USERS_MANAGEMENT_URL } from "../../settings"
export function editUser({info, token}){
    return fetch(`${USERS_MANAGEMENT_URL}${info.id}/`, {
        method: 'PUT',
        headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    .then(res => {
        if(res.status == 200){
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
                if(err.email){
                    throw new Error('Ingresa un email válido')
                }
                throw new Error('Error al editar el usuario')
            })
        }
    })
}