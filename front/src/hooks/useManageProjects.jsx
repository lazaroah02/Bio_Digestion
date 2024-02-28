import {useState, useEffect, useContext} from 'react'
import {getProjects} from '../services/ProjectsManagement/getProjects'
import {createProject} from '../services/ProjectsManagement/createProject'
import AuthenticationContext from '../contexts/authenticationContext'

export function useManageProjects() {
    const [projects, setProjects] = useState([])
    const [loadingProjects, setloadingProjects] = useState(false)
    const {auth} = useContext(AuthenticationContext)

    //get projects
    useEffect(() => {
        if(auth.token){
            setloadingProjects(true)
            getProjects({token:auth.token})
            .then(data => {
                setProjects(data)
            })
            .catch(err => console.log(err))
            .finally(() => setloadingProjects(false))
        }
    },[])

    //create project
    function handleCreateProject({name, callback}){
        setloadingProjects(true)
        createProject({name:name, user:auth.infoUser.username, token:auth.token})
        .then(data => {
            let projectsCopy = [...projects]
            projectsCopy.splice(0, 0, data)
            setProjects(projectsCopy)
            return callback({status:201, message:"Proyecto creado correctamente"})
        })
        .catch(error => {
            return callback(error)
        })
        .finally(() => setloadingProjects(false))
    }

    return ({projects, loadingProjects, handleCreateProject});
}
