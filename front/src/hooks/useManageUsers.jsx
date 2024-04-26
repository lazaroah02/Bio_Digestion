import {useState, useEffect, useContext} from 'react'
import AuthenticationContext from '../contexts/authenticationContext'
import {getUsers} from '../services/UsersManagement/getUsers'
import {createUser} from '../services/UsersManagement/createUser'
import { deleteUsers } from '../services/UsersManagement/deleteUsers'
import {editUser} from '../services/UsersManagement/editUser'
import {changePassword} from '../services/UsersManagement/changePassword'

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
            .catch(err => {})
            .finally(() => setloadingUsers(false))
        }
    },[])

    //create user
    function handleCreateUser({info, callback}){
        createUser({info:info, token:auth.token})
        .then((data) => {
            let usersCopy = [...users]
            usersCopy.splice(0, 0, data)
            setUsers(usersCopy)
            return callback({status:201, message:"Usuario creado correctamente"})
        })
        .catch(error => {
            return callback({status:400, message:error.message})
        })
    }

    //edit user
    function handleEditUser({info, callback}){
        editUser({info:info, token:auth.token})
        .then((data) => {
            updateInfoUserUpdated(info)
            return callback({status:201, message:"Usuario editado correctamente"})
        })
        .catch(error => {
            return callback({status:400, message:error.message})
        })
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
            return callback({status:400, message:error.message})
        })
        .finally(() => {
            setloadingUsers(false)
        })
    }

    function removeDeletedUsers(usersToDelete){
        setUsers(users.filter(user => !usersToDelete.includes(user.id)))
    }

    function updateInfoUserUpdated(newInfo){
        let usersCopy = [...users]
        for(let i = 0; i < usersCopy.length; i++){
            if(users[i].id === newInfo.id){
                usersCopy.splice(i, 1, newInfo)
                break
            }
        }
        setUsers(usersCopy)
    }

    //change password
    function handleChangePassword({userId, newPassword, callback}){
        changePassword({userId:userId, newPassword:newPassword, token:auth.token})
        .then(() => {
            return callback({status:200, message:"Contraseña cambiada exitosamente"})
        })
        .catch(err => {
            return callback({status:400, message:err.message})
        })
    }

    return ({users, loadingUsers, handleCreateUser, handleDeleteUsers, handleChangePassword, handleEditUser});
}
