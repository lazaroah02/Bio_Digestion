import { useManageProjects } from "../hooks/useManageProjects.jsx";
import "./pagesStyles/projectsManagementPage.css";
import RandomImagesSlider from "../components/RandomImagesSlider/index.jsx";
import { useIsMobileMode } from "../hooks/useIsMobileMode.jsx";
import CuriousData from "../components/CuriousData/index.jsx";

function ProjectsManagement() {
  const { projects, loadingProjects } = useManageProjects();
  const { mobileMode } = useIsMobileMode({ mobileWidth: 1300 });
  return (
    <section className="projects-management-page">
      <article className = "projects-container"></article>
      <aside className = "random-images-curious-data-container">
        <div className = "random-images">{!mobileMode ? <RandomImagesSlider /> : null}</div>
        <section className = "curious-data-container">
        {!mobileMode ? <CuriousData /> : null}
        </section>
      </aside>
    </section>
  );
}

export default ProjectsManagement;
