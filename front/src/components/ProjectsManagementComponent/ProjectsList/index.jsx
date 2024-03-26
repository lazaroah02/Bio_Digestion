import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {formatDate} from '../../../utils/formatDate'
import LeafIcon from '../../../icons/LeafIcon'
import {useNavigate} from 'react-router-dom'
import UpdateProject from "../UpdateProject";
import './index.css'

function ProjectsList({projects, setSelectedProjects, selectedProjects, deletingProjects, updateProject}) {
  const navigate = useNavigate()
  return (
    <DataTable
      value={projects}
      selectionMode={"checkbox"}
      selection={selectedProjects}
      onSelectionChange={(e) => setSelectedProjects(e.value)}
      dataKey="id"
      size="normal"
      className = "projects-list-datatable"
      stripedRows = {true}
      scrollable 
      scrollHeight={"70vh"}
      onRowClick={({data}) => navigate(`${data.id}`, { state: data })}
    >
      {deletingProjects?<Column selectionMode="multiple"></Column>:null}
      <Column
        field="name"
        header = {deletingProjects?"Seleccionar Todos":null}
        className="project-name-datatable-field"
        body={(project) => {
          return (
              <><LeafIcon width="18"/><span>{project.name}</span></>
          );
        }}
      ></Column>
      <Column
        field="created_at"
        body={(project) => {
          return (
            <div className="table-project-field-container">
              <span>{formatDate(project.created_at)}</span>
            </div>
          );
        }}
      ></Column>
      <Column
        body={(project) => {
          return (
            <UpdateProject project={project} updateProject = {updateProject} className={"edit-project-button"}/>
          );
        }}
      ></Column>
    </DataTable>
  );
}

export default ProjectsList;
