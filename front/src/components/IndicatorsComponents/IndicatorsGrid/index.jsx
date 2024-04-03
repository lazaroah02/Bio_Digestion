import CalculateIndicatorModal from "../CalculateIndicatorsModals/CalculateIndicatorModal";
import CalculateVAN from "../CalculateIndicatorsModals/CalculateVAN";
import CalculateTRI from "../CalculateIndicatorsModals/CalculateTRI";
import CalculateTIR from "../CalculateIndicatorsModals/CalculateTIR";
import CalculateLEC from "../CalculateIndicatorsModals/CalculateLEC";
import CalculateBPM from "../CalculateIndicatorsModals/CalculateBPM";
import ShowResult from '../CalculateIndicatorsModals/ShowResult'
import IndicatorCard from "./IndicatorCard";
import "./index.css";

function IndicatorsGrid({ indicators, updateIndicatorValue }) {

  return (
    <section className="indicators-grid">
      <IndicatorCard title="Valor Actual Neto (VAN)" indicatorName = {"VAN"} updateIndicatorValue={updateIndicatorValue} indicatorValue={indicators?.VAN} asideColor={"#02C502"}>
        <CalculateIndicatorModal
          title={"Calcular VAN"}
          asideColor="green"
          indicatorForm={<CalculateVAN />}
        />
      </IndicatorCard>
      <IndicatorCard title = "Tasa Interna de Retorno (TIR)" indicatorName = {"TIR"} updateIndicatorValue={updateIndicatorValue} indicatorValue={indicators?.TIR} asideColor={"#06F"}>
        <CalculateIndicatorModal
          title={"Calcular TIR"}
          asideColor="#06F"
          indicatorForm={<CalculateTIR />}
          asideContent={<ShowResult />}
        />
      </IndicatorCard>
      <IndicatorCard title = "Tiempo de Recuperación de Inversión (TRI)" indicatorName = {"TRI"} updateIndicatorValue={updateIndicatorValue} indicatorValue={indicators?.TRI} asideColor={"#0FF"}>
        <CalculateIndicatorModal
          title={"Calcular TRI"}
          asideColor="#0FF"
          indicatorForm={<CalculateTRI />}
          asideContent={<ShowResult />}
        />
      </IndicatorCard>
      <IndicatorCard title = "Costo Nivelado de la Electricidad (LEC)" indicatorName = {"LEC"} updateIndicatorValue={updateIndicatorValue} indicatorValue={indicators?.LEC} asideColor={"#AD00FF"}>
        <CalculateIndicatorModal
          title={"Calcular LEC"}
          asideColor="#AD00FF"
          indicatorForm={<CalculateLEC />}
          asideContent={<ShowResult />}
        />
      </IndicatorCard>
      <IndicatorCard title = "Potencial de Biometano Generado (BPM)" indicatorName = {"BPM"} updateIndicatorValue={updateIndicatorValue} indicatorValue={indicators?.BPM} asideColor={"#FFC700"}>
        <CalculateIndicatorModal
          title={"Calcular BPM"}
          asideColor="#FFC700"
          indicatorForm={<CalculateBPM />}
          asideContent={<ShowResult />}
        />
      </IndicatorCard>
      
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
