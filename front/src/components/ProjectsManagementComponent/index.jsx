import ProjectsList from "./ProjectsList.jsx";
import { useManageProjects } from "../../hooks/useManageProjects.jsx";
import AddProject from "./AddProject/index.jsx";
import { useState } from "react";
import { useToast } from "../../hooks/useToast.jsx";
import { useConfirmDialog } from "../../hooks/useConfirmDialog.jsx";
import Loader from '../Loader'
import TrashIcon from "../../icons/TrashIcon.jsx";
import "./index.css";
import OptionsDropdown from "./OptionsDropdown/index.jsx";

function ProjectsManagement() {
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [deletingProjects, setDeletingProjects] = useState(false);
  const { toast, showToast } = useToast();
  const { confirmDialog, showConfirm } = useConfirmDialog();

  const {
    projects,
    loadingProjects,
    handleCreateProject,
    handleDeleteProjects,
  } = useManageProjects();

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
            setDeletingProjects(false)
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
      {loadingProjects?
        <section className = "projects-managment-loader-container">
          <div>
            <Loader/>
          </div>
        </section>
      :null}
      {projects.length > 0 ? (
        <>
          {toast()}
          {confirmDialog(deleteProjects)}
          <header className = "projects-list-header">
            <span>
              Proyectos
            </span>
            <OptionsDropdown setDeletingProjects={setDeletingProjects}/>
          </header>
          <ProjectsList
            projects={projects}
            selectedProjects={selectedProjects}
            setSelectedProjects={setSelectedProjects}
            deletingProjects={deletingProjects}
          />
        </>
      ) : <div className = "no-projects-message">No hay projectos aún</div>}
      {deletingProjects?
            <section className = "confirm-deletion-buttons-container">
              <button onClick={() => setDeletingProjects(false)}><span>Cancelar</span></button>
              <button onClick={() => showConfirm(true)}>{selectedProjects.length == 0?
              <span>Selecciona para eliminar</span>
              :<span>Eliminar</span>
            } <TrashIcon width="20px" color = {"#EC0000"}/></button>
            </section>
          :
          <AddProject
                createProject={handleCreateProject}
                className={
                  projects.length == 0
                    ? "add-project-button position-center"
                    : "add-project-button position-normal"
                }
              />
          }
    </article>
  );
}

export default ProjectsManagement;
