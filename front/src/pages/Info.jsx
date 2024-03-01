import "./pagesStyles/info.css";
import Img1 from "../assets/info-page-images/img1.png";
import Img2 from "../assets/info-page-images/img2.png";
import Img3 from "../assets/info-page-images/img3.png";
import Img4 from "../assets/info-page-images/img4.png";

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
      <article className="biogas-production-process-section">
        <header>Etapas del proceso de producción del Biogás</header>
        <p>
          Las etapas del proceso de producción de Biogás son:
          <br />
          1. Pretratamiento: Donde se prepara la materia prima.
          <br />
          2. Digestión Anaeróbica: Aquí ocurre la descomposición de la materia
          orgánica por microorganismos.
          <br />
          3. Separación de Fases: Se separa el digestato en una fase líquida y
          una sólida.
          <br />
          4. Tratamiento del Digestato: Se procesa la fase sólida para obtener
          un biofertilizante y se trata la fase líquida.
          <br />
          5. Almacenamiento y Utilización del Biogás: Se almacena el biogás
          producido y se utiliza como fuente de energía.
          <br />
        </p>
        <section>
          <img src={Img2} alt="Biogas" />
          <img src={Img3} alt="Biogas" />
          <img src={Img4} alt="Biogas" />
        </section>
      </article>

      {/*Biogas elements*/}
      <article className="biogas-elements-section">
        <header>Elementos que conforman el Biogás</header>
        <p>
          El biogás está compuesto por varios elementos, y su proporción puede
          variar según la materia orgánica y el proceso de producción.
          <br />
          Los principales componentes del biogás son: <br />
          1. Metano (CH₄): Representa entre un 40% y 70% del biogás. El metano
          es el componente principal y tiene un alto contenido energético.{" "}
          <br />
          2. Dióxido de carbono (CO₂): Tambiénpresente en el biogás. <br />
          3. Hidrógeno (H₂): En pequeñas cantidades.
          <br />
          4. Nitrógeno (N₂): También en pequeñas proporciones. <br />
          5. Oxígeno (O₂): Aunque en cantidades mínimas. <br />
          6. Ácido sulfhídrico (H₂S): En trazas.
          <br />
        </p>
      </article>

      {/*Biogas vantage*/}
      <article className="biogas-vantages">
        <header>Ventajas del uso Biogás</header>
        <p>
          1. Sostenibilidad Ambiental: <br/>
          El biogás se produce a partir de materia
          orgánica, como residuos agrícolas, estiércol, desechos de alimentos y
          lodos de aguas residuales. Al utilizar estos materiales, se reduce la
          cantidad de residuos y se evita la liberación de metano (un gas de
          efecto invernadero) a la atmósfera. Además, el biogás es una fuente de
          energía renovable y ayuda a disminuir la dependencia de los
          combustibles fósiles. <br/>
          2. Beneficios Económicos: <br/>
          La producción de biogás puede generar ingresos para los agricultores y las comunidades
          locales. Puede venderse como combustible o utilizarse para generar
          electricidad y calor. También reduce los costos de eliminación de
          residuos, ya que se aprovechan los desechos orgánicos en lugar de
          desecharlos. <br/>
          3. Reducción de Olores y Contaminantes: <br/>
          Al convertir los residuos orgánicos en biogás, se reduce el olor y la contaminación
          asociados con la descomposición natural. Además, el proceso de
          digestión anaeróbica (que produce biogás) elimina patógenos y reduce
          la carga de contaminantes en los residuos. <br/>
          4. Aplicaciones Versátiles: <br/>
          El biogás se puede utilizar para cocinar, calentar, generar electricidad
          o como combustible para vehículos. Es especialmente útil en áreas
          rurales donde no hay acceso a redes eléctricas o de gas natural. En
          resumen, el biogás es una alternativa sostenible, económica y versátil
          que contribuye a la protección del medio ambiente y al bienestar de
          las comunidades. 🌱🔥
        </p>
      </article>
    </section>
  );
}

export default Info;
