import "./pagesStyles/info.css";
import Img1 from "../assets/info-page-images/img1.png";

function Info() {
  return (
    <section className="info-page">
      {/*What is Biogas Section*/}  
      <article className="what-is-biogas-section">
        <aside>
          <img src={Img1} alt="Biogas" />
        </aside>
        <section>
          <header>¿Qué es el Biogas?</header>
          <p>
            El biogás es un combustible gaseoso natural que se produce a través
            de un proceso llamado digestión anaeróbica de la materia orgánica.
          </p>
        </section>
      </article>

      {/*Biogas production process*/}
    </section>
  );
}

export default Info;
