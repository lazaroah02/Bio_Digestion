import "./pagesStyles/login.css";
import FullLogo from "../assets/logos/full-logo.svg";
import Logo from "../assets/logos/logo.svg";
import { useContext } from "react";
import AuthenticationContext from "../contexts/authenticationContext";
import Loader from '../components/Loader'
import {useToast} from "../hooks/useToast";

function LoginPage() {
  const { handleLogin, loading } = useContext(AuthenticationContext);
  const {toast, showToast} = useToast()

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin({
      username: e.target["username"].value,
      pass: e.target["password"].value,
      callback: (success) => {
        if(success == "ok") {
            history.back()
        }
        else{
          showToast({
            severity:"error",
            summary:"Error",
            detail: success.toString(),
          })
        }
      }
    });
  }

  return (
    <section className="login-page">
      {toast()}
      <article>
        <header>
          <div>
            <h1>
              Bienvenid@ a <strong>Bio Digestion</strong>
            </h1>
            <img src={Logo} alt="Logo" />
          </div>
          <p>
            Sistema para la gestión del proceso de producción de biogás a partir
            de la mezcla vinaza cachaza
          </p>
        </header>
        <form action="" onSubmit={(e) => {!loading?handleSubmit(e):null}}>
          <label htmlFor="username">Nombre de usuario</label>
          <input id="username" type="text" name="username" placeholder="Ingresa tu nombre de usuario"/>
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" name="password" placeholder="Ingresa tu contraseña"/>
          <button>{loading?<><span>Iniciando Sesión</span><div className = "login-page-loader-container"><Loader/></div></>:'Entrar'}</button>
        </form>
      </article>
      <aside>
        <img alt = "Logo Bio Digestion" src = {FullLogo}/>
      </aside>
    </section>
  );
}

export default LoginPage;
