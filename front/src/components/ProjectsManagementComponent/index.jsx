import ProjectsList from "./ProjectsList.jsx";
import { useManageProjects } from "../../hooks/useManageProjects.jsx";
import AddProject from "./AddProject/index.jsx";
import { useState } from "react";
import { useToast } from "../../hooks/useToast.jsx";
import { useConfirmDialog } from "../../hooks/useConfirmDialog.jsx";
import "./index.css";

function ProjectsManagement() {
  const [selectedProjects, setSelectedProjects] = useState([]);
  const {
    projects,
    loadingProjects,
    handleCreateProject,
    handleDeleteProjects,
  } = useManageProjects();
  const [deletingProjects, setDeletingProjects] = useState(false);
  const { toast, showToast } = useToast();
  const { confirmDialog, showConfirm } = useConfirmDialog();

  function deleteProjects() {
    if (selectedProjects.length == 0) {
      showToast({
        severity: "error",
        summary: "Error",
        detail: "Debes seleccionar algun proyecto",
      });
    } else {
      handleDeleteProjects({
        projects: selectedProjects.map((project) => {
          return project.id;
        }),
        callback: (success) => {
          if (success.status == 200) {
            showToast({
              severity: "success",
              summary: "Éxito",
              detail: success.message,
            });
          } else {
            showToast({
              severity: "error",
              summary: "Error",
              detail: success.message,
            });
          }
        },
      });
    }
  }

  return (
    <article className="projects-managment-component">
      {projects.length > 0 ? (
        <>
          {toast()}
          {confirmDialog(deleteProjects)}
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
          <button onClick={() => showConfirm(true)}>Delete Projects</button>
        </>
      ) : <div className = "no-projects-message">No hay projectos aún</div>}
      <AddProject
            createProject={handleCreateProject}
            className={
              projects.length == 0
                ? "add-project-button position-center"
                : "add-project-button position-normal"
            }
          />
    </article>
  );
}

export default ProjectsManagement;