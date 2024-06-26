import ProjectsList from "./ProjectsList";
import { useManageProjects } from "../../hooks/useManageProjects.jsx";
import AddProject from "./AddProject/index.jsx";
import { useState } from "react";
import { useToast } from "../../hooks/useToast.jsx";
import { useConfirmDialog } from "../../hooks/useConfirmDialog.jsx";
import Loader from '../Loader'
import TrashIcon from "../../icons/TrashIcon.jsx";
import DocIcon from "../../icons/DocIcon.jsx";
import "./index.css";
import OptionsDropdown from "./OptionsDropdown/index.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ProjectsReport from "../../PdfTemplates/ProjectsReport";

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
    handleUpdateProject
  } = useManageProjects();

  //delete projects
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
            setSelectedProjects([])
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

  //show the select field of each row
  function startProjectDeletion(){
    setDeletingProjects(true)
  }

  //header dropdown options
  const headerDropdownOptions = [
    {
      fun:startProjectDeletion,
      content: "Eliminar Proyecto",
      icon: <TrashIcon color = {'rgba(0, 0, 0, 0.9)'} width = {'20px'}/>
    },
    {
      fun:() => {},
      content: (
        <PDFDownloadLink
          document={<ProjectsReport projects={projects}/>}
          fileName="Proyectos de Bio Digestión.pdf"
          className="generate-pdf-link"
        >
          {({ loading }) =>
            loading ? "Cargando documento..." : "Generar Reporte"
          }
        </PDFDownloadLink>
      ),
      icon: <DocIcon color = {'rgba(0, 0, 0, 0.6)'} width = {'17px'}/>
    },
  ]

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
            <OptionsDropdown optionsProps={headerDropdownOptions}/>
          </header>
          <ProjectsList
            projects={projects}
            selectedProjects={selectedProjects}
            setSelectedProjects={setSelectedProjects}
            deletingProjects={deletingProjects}
            updateProject={handleUpdateProject}
          />
        </>
      ) : <div className = "no-projects-message">No hay projectos aún</div>}
      {deletingProjects?
            <section className = "confirm-deletion-buttons-container">
              <button onClick={() => {
                setDeletingProjects(false)
                setSelectedProjects([])
                }}><span>Cancelar</span></button>
              <button onClick={() => showConfirm(true)}>{selectedProjects.length == 0?
              <span>Selecciona para eliminar</span>
              :<span>Eliminar</span>
            } <TrashIcon width="20px" color = {"#EC0000"}/></button>
            </section>
          :
          <AddProject
                createProject={handleCreateProject}
                projects={projects}
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
