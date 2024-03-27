import "./index.css";
import CalculateIndicatorModal from "../CalculateIndicatorsModals/CalculateIndicatorModal";
import CalculateVAN from "../CalculateIndicatorsModals/CalculateVAN";
import CalculateTRI from "../CalculateIndicatorsModals/CalculateTRI";
import CalculateTIR from "../CalculateIndicatorsModals/CalculateTIR";
import CalculateLEC from "../CalculateIndicatorsModals/CalculateLEC";
import CalculateBPM from "../CalculateIndicatorsModals/CalculateBPM";

function IndicatorsGrid({ indicators }) {
  return (
    <section className="indicators-grid">
      <article className="indicator-card">
        <aside style={{ backgroundColor: "#02C502" }}></aside>
        <section>
          <header>Valor Actual Neto (VAN)</header>
          {indicators?.VAN.toFixed(2)}
          <CalculateIndicatorModal
            title={"Calcular VAN"}
            asideColor="green"
            indicatorForm={<CalculateVAN />}
          />
        </section>
      </article>
      <article className="indicator-card">
        <aside style={{ backgroundColor: "#06F" }}></aside>
        <section>
          <header>Tasa Interna de Retorno (TIR)</header>
          {indicators?.TRI.toFixed(2)}
          <CalculateIndicatorModal
            title={"Calcular TIR"}
            asideColor="#06F"
            indicatorForm={<CalculateTIR />}
          />
        </section>
      </article>
      <article className="indicator-card">
        <aside style={{ backgroundColor: "#0FF" }}></aside>
        <section>
          <header>Tiempo de Recuperación de Inversión (TRI)</header>
          {indicators?.TIR.toFixed(2)}
          <CalculateIndicatorModal
            title={"Calcular TRI"}
            asideColor="#0FF"
            indicatorForm={<CalculateTRI />}
          />
        </section>
      </article>
      <article className="indicator-card">
        <aside style={{ backgroundColor: "#AD00FF" }}></aside>
        <section>
          <header>Costo Nivelado de la Electricidad (LEC)</header>
          {indicators?.LEC.toFixed(2)}
          <CalculateIndicatorModal
            title={"Calcular LEC"}
            asideColor="#AD00FF"
            indicatorForm={<CalculateLEC />}
          />
        </section>
      </article>
      <article className="indicator-card">
        <aside style={{ backgroundColor: "#FFC700" }}></aside>
        <section>
          <header>Potencial de Biometano Generado (BPM)</header>
          {indicators?.BPM.toFixed(2)}
          <CalculateIndicatorModal
            title={"Calcular BPM"}
            asideColor="#FFC700"
            indicatorForm={<CalculateBPM />}
          />
        </section>
      </article>
      <article className="indicator-card">
        <aside style={{ backgroundColor: "#DC0101" }}></aside>
        <section>
          <header>Eficiencia del proceso (n)</header>
          {indicators?.n}
        </section>
      </article>
    </section>
  );
}

export default IndicatorsGrid;
