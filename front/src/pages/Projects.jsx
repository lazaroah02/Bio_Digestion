import {useManageProjects} from '../hooks/useManageProjects.jsx'
import './pagesStyles/projectsManagementPage.css'

function ProjectsManagement() {
    const {projects, loadingProjects} = useManageProjects()
    return ( 
        <section className = "projects-management-page">
            <article>

            </article>
            <aside>
                <div></div>
                <section></section>
            </aside>
        </section>
     );
}

export default ProjectsManagement;