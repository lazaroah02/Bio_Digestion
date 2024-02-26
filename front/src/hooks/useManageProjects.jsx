import {useState, useEffect, useContext} from 'react'
import {getProjects} from '../services/ProjectsManagement/getProjects'
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

    return ({projects, loadingProjects});
}
