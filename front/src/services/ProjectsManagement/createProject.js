import { PROJECTS_MANAGEMENT_URL } from "../../settings"
export function createProject({name, user, token}){
    return fetch(PROJECTS_MANAGEMENT_URL, {
        method: 'POST',
        headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:name, user:user})
    })
    .then(res => {
        if(res.status == 201){
            return res.json()
            .then(data => {
                return data
            })

        }
        else{
            console.log(res)
            throw new Error('Error al crear el proyecto')
        }
    })
}