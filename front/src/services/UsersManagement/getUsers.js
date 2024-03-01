import {USERS_MANAGEMENT_URL}  from '../../settings'

export function getUsers({token}){
    return fetch(USERS_MANAGEMENT_URL, {
        method: 'GET',
        headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    .then(data => {return data})
    .catch(err => {throw new Error("Error al obtener los usuarios")})
}