import {useState, useEffect, useContext} from 'react'
import AuthenticationContext from '../contexts/authenticationContext'
import {getUsers} from '../services/UsersManagement/getUsers'
import {createUser} from '../services/UsersManagement/createUser'
import { deleteUsers } from '../services/UsersManagement/deleteUsers'

export function useManageUsers() {
    const [users, setUsers] = useState([])
    const [loadingUsers, setloadingUsers] = useState(false)
    const {auth} = useContext(AuthenticationContext)

    //get users
    useEffect(() => {
        if(auth.token){
            setloadingUsers(true)
            getUsers({token:auth.token})
            .then(data => {
                setUsers(data)
            })
            .catch(err => console.log(err))
            .finally(() => setloadingUsers(false))
        }
    },[])

    //create user
    function handleCreateUser({name, callback}){
        setloadingUsers(true)
        createUser({name:name, user:auth.infoUser.username, token:auth.token})
        .then(data => {
            let usersCopy = [...users]
            usersCopy.splice(0, 0, data)
            setUsers(usersCopy)
            return callback({status:201, message:"Usuario creado correctamente"})
        })
        .catch(error => {
            return callback(error)
        })
        .finally(() => setloadingUsers(false))
    }

    //delete users
    function handleDeleteUsers({users, callback}){
        if(users.includes(auth.infoUser.id)){
            return callback({status:400, message:"No puedes borrar tu propio usuario"})
        }
        setloadingUsers(true)
        deleteUsers({users:users, token:auth.token})
        .then(() => {
            removeDeletedUsers(users)
            return callback({status:200, message:"Operación exitosa"})
        })
        .catch(error => {
            return callback(error)
        })
        .finally(() => {
            setloadingUsers(false)
        })
    }

    function removeDeletedUsers(usersToDelete){
        setUsers(users.filter(user => !usersToDelete.includes(user.id)))
    }

    return ({users, loadingUsers, handleCreateUser, handleDeleteUsers});
}
