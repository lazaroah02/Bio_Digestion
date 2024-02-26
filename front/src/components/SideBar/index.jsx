import "./index.css";
import LogoFullGreen from "../../assets/logos/full-logo-green.svg";
import AuthenticationContext from "../../contexts/authenticationContext";
import { useContext } from "react";
import StackIcon from "../../icons/StackIcon";
import GraphicIcon from "../../icons/GraphicIcon";
import DocIcon from "../../icons/DocIcon";
import UserIcon from "../../icons/UserIcon";
import { useLocation, useNavigate } from "react-router-dom";

function SideBar() {
  const { auth, handleLogout } = useContext(AuthenticationContext);
  const { pathname } = useLocation();
  const navigate = useNavigate()

  function checkActivePath(path) {
    return pathname.includes(path);
  }

  return (
    <article className="sidebar">
      <header>
        <img alt="logo Bio Digestion" src={LogoFullGreen} />
        <div>Hola, {auth.username} admin</div>
      </header>
      <section>
        <ul>
          <li>
            <aside
              className={
                !checkActivePath("projects") ? "sidebar-hidden-element" : null
              }
            ></aside>
            <span
            onClick={() => navigate("/dashboard/projects")}
              className={
                checkActivePath("projects") ? "sidebar-active-path" : null
              }
            >
              <StackIcon
                key={1}
                width="20px"
                height="20px"
                color={!checkActivePath("projects") ? "#565454" : "#02C502"}
              />
              Proyectos
            </span>
          </li>
          <li>
            <aside
              className={
                !checkActivePath("graphics") ? "sidebar-hidden-element" : null
              }
            ></aside>
            <span
            onClick={() => navigate("/dashboard/graphics")}
              className={
                checkActivePath("graphics") ? "sidebar-active-path" : null
              }
            >
              <GraphicIcon
                key={2}
                width="20px"
                height="20px"
                color={!checkActivePath("graphics") ? "#565454" : "#02C502"}
              />
              Gráficos
            </span>
          </li>
          <li>
            <aside
              className={
                !checkActivePath("info") ? "sidebar-hidden-element" : null
              }
            ></aside>
            <span
            onClick={() => navigate("/dashboard/info")}
              className={checkActivePath("info") ? "sidebar-active-path" : null}
            >
              <DocIcon
                key={2}
                width="20px"
                height="20px"
                color={!checkActivePath("info") ? "#565454" : "#02C502"}
              />
              Información
            </span>
          </li>
          <li>
            <aside
              className={
                !checkActivePath("users") ? "sidebar-hidden-element" : null
              }
            ></aside>
            <span
            onClick={() => navigate("/dashboard/users")}
              className={
                checkActivePath("users") ? "sidebar-active-path" : null
              }
            >
              <UserIcon
                key={2}
                width="23px"
                height="23px"
                color={!checkActivePath("users") ? "#565454" : "#02C502"}
              />
              Usuarios
            </span>
          </li>
        </ul>
      </section>
      <footer>
          <button type = "button" onClick={() => handleLogout(() => navigate("/bye"))}>Cerrar Sesión</button>
      </footer>
    </article>
  );
}

export default SideBar;
