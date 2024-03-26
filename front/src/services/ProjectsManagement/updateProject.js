import { PROJECTS_MANAGEMENT_URL } from "../../settings"
export function updateProject({id, newName, user, token}){
    return fetch(`${PROJECTS_MANAGEMENT_URL}${id}/`, {
        method: 'PUT',
        headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:newName, user:user})
    })
    .then(res => {
        if(res.status == 201){
            return res.json()
            .then(data => {
                return data
            })

        }
        else{
            throw new Error('Error al crear el proyecto')
        }
    })
}