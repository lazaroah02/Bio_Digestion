import {PROJECTS_MANAGEMENT_URL} from '../../settings'

export function deleteProjects({projects, token}){
    return fetch(PROJECTS_MANAGEMENT_URL, {
        method: 'DELETE',
        headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({projects_to_delete:projects})
    })
    .then(res => {
        if(res.status == 200){
            return
        }
        else{
            throw new Error('Error al eliminar el/los proyectos')
        }
    })
}