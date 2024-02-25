import {LOGIN_URL} from '../../settings.js'

export function login({username, pass}){
    return fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: pass})
    })
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        if(data.key){
            return data.key
        }
        else{
            if(data.password){
                throw new Error('Ingresa una contraseña válida')
            }
            if(data.non_field_errors){
                throw new Error('Credenciales Incorrectas')
            }
        }
    })
    
}