import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {formatDate} from '../../utils/formatDate'

function ProjectsList({projects, setSelectedProjects, selectedProjects, deletingProjects}) {
  return (
    <DataTable
      value={projects}
      selectionMode={"checkbox"}
      selection={selectedProjects}
      onSelectionChange={(e) => setSelectedProjects(e.value)}
      dataKey="id"
      size="small"
    >
      {deletingProjects?<Column selectionMode="multiple" headerStyle={{ width: "3rem" }}></Column>:null}
      <Column
        field="id"
        header="ID"
        body={(project) => {
          return (
            <div className="table-project-field-container">
              <span>{project.id}</span>
            </div>
          );
        }}
      ></Column>
      <Column
        field="name"
        header="Nombre"
        body={(project) => {
          return (
            <div className="table-project-field-container">
              <span>{project.name}</span>
            </div>
          );
        }}
      ></Column>
      <Column
        field="created_at"
        header="Fecha"
        body={(project) => {
          return (
            <div className="table-project-field-container">
              <span>{formatDate(project.created_at)}</span>
            </div>
          );
        }}
      ></Column>
    </DataTable>
  );
}

export default ProjectsList;
