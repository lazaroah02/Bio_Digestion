import ProjectsList from "./ProjectsList.jsx";
import { useManageProjects } from "../../hooks/useManageProjects.jsx";
import AddProject from "./AddProject/index.jsx";
import { useState } from "react";

function ProjectsManagement() {
    const [selectedProjects, setSelectedProjects] = useState([])
    const { projects, loadingProjects, handleCreateProject } = useManageProjects();
    const [deletingProjects, setDeletingProjects] = useState(false)

    return ( 
        <article className = "projects-managment-component">
            <header>
                Proyectos
                <button onClick={() => setDeletingProjects(true)}>A</button>
            </header>
            <ProjectsList
                projects={projects}
                selectedProjects={selectedProjects}
                setSelectedProjects={setSelectedProjects}
                deletingProjects={deletingProjects}
            />
            <AddProject createProject={handleCreateProject}/>
        </article>
     );
}

export default ProjectsManagement;