import "./pagesStyles/projectsManagementPage.css";
import RandomImagesSlider from "../components/RandomImagesSlider/index.jsx";
import { useIsMobileMode } from "../hooks/useIsMobileMode.jsx";
import CuriousData from "../components/CuriousData/index.jsx";
import ProjectsManagementComponent from "../components/ProjectsManagementComponent/index.jsx";

function ProjectsManagement() {
  const { mobileMode } = useIsMobileMode({ mobileWidth: 1300 });
  return (
    <section className="projects-management-page">
      <article className = "projects-container">
        <ProjectsManagementComponent/>
      </article>
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
