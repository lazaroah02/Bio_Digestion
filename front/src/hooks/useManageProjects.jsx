import {useState, useEffect, useContext} from 'react'
import {getProjects} from '../services/ProjectsManagement/getProjects'
import {createProject} from '../services/ProjectsManagement/createProject'
import {updateProject} from '../services/ProjectsManagement/updateProject'
import AuthenticationContext from '../contexts/authenticationContext'
import { deleteProjects } from '../services/ProjectsManagement/deleteProjects'

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
            .catch(err => {})
            .finally(() => setloadingProjects(false))
        }
    },[])

    //create project
    function handleCreateProject({name, callback}){
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
    }

    //update project
    function handleUpdateProject({id, newName, callback}){
        updateProject({id:id, newName:newName, user:auth.infoUser.username, token:auth.token})
        .then(data => {
            let projectsCopy = [...projects]
            let project = projectsCopy.find(project => project.id == id)
            project.name = newName
            setProjects(projectsCopy)
            return callback({status:201, message:"Proyecto editado correctamente"})
        })
        .catch(error => {
            return callback(error)
        })
    }

    //delete projects
    function handleDeleteProjects({projects, callback}){
        setloadingProjects(true)
        deleteProjects({projects:projects, token:auth.token})
        .then(() => {
            removeDeletedProjects(projects)
            return callback({status:200, message:"Operación exitosa"})
        })
        .catch(error => {
            return callback(error)
        })
        .finally(() => {
            setloadingProjects(false)
        })
    }

    function removeDeletedProjects(projectsToDelete){
        setProjects(projects.filter(project => !projectsToDelete.includes(project.id)))
    }

    return ({projects, loadingProjects, handleCreateProject, handleDeleteProjects, handleUpdateProject});
}
