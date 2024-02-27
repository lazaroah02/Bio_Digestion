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
      <article></article>
      <aside>
        <div>{!mobileMode ? <RandomImagesSlider /> : null}</div>
        <section>
        {!mobileMode ? <CuriousData /> : null}
        </section>
      </aside>
    </section>
  );
}

export default ProjectsManagement;
