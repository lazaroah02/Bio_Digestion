import "./index.css";
import LogoFullGreen from "../../assets/logos/full-logo-green.svg";
import AuthenticationContext from "../../contexts/authenticationContext";
import { useContext } from "react";
import StackIcon from "../../icons/StackIcon";
import DocIcon from "../../icons/DocIcon";
import UserIcon from "../../icons/UserIcon";
import GraphicIcon from "../../icons/GraphicIcon";
import EditIcon from "../../icons/EditIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { useConfirmDialog } from "../../hooks/useConfirmDialog";

function SideBar({closeSideBar = () => {}}) {
  const { auth, handleLogout } = useContext(AuthenticationContext);
  const {confirmDialog, showConfirm} = useConfirmDialog()
  const { pathname } = useLocation();
  const navigate = useNavigate()

  function checkActivePath(path) {
    return pathname.includes(path);
  }

  function logout(){
    handleLogout(() => navigate("/bye"))
  }

  function handleNavigate(pathname){
    closeSideBar()
    navigate(pathname)
  }

  return (
    <article className="sidebar">
      {confirmDialog(logout)}
      <header>
        <img alt="logo Bio Digestion" src={LogoFullGreen} />
        <div>Hola, {auth.infoUser?.username}</div>
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
            onClick={() => handleNavigate("/dashboard/projects")}
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
            onClick={() => handleNavigate("/dashboard/graphics")}
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
                !checkActivePath("design") ? "sidebar-hidden-element" : null
              }
            ></aside>
            <span
            onClick={() => handleNavigate("/dashboard/design")}
              className={
                checkActivePath("graphics") ? "sidebar-active-path" : null
              }
            >
              <EditIcon
                key={3}
                width="20px"
                height="20px"
                color={!checkActivePath("design") ? "#565454" : "#02C502"}
              />
              Diseño
            </span>
          </li>
          <li>
            <aside
              className={
                !checkActivePath("info") ? "sidebar-hidden-element" : null
              }
            ></aside>
            <span
            onClick={() => handleNavigate("/dashboard/info")}
              className={checkActivePath("info") ? "sidebar-active-path" : null}
            >
              <DocIcon
                key={4}
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
            onClick={() => handleNavigate("/dashboard/users")}
              className={
                checkActivePath("users") ? "sidebar-active-path" : null
              }
            >
              <UserIcon
                key={5}
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
          <button type = "button" onClick={() => showConfirm(true)}>Cerrar Sesión</button>
      </footer>
    </article>
  );
}

export default SideBar;
