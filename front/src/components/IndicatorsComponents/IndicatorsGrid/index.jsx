import "./index.css";
import CalculateIndicatorModal from "../CalculateIndicatorsModals/CalculateIndicatorModal";
import CalculateVAN from "../CalculateIndicatorsModals/CalculateVAN";
import CalculateTRI from "../CalculateIndicatorsModals/CalculateTRI";
import CalculateTIR from "../CalculateIndicatorsModals/CalculateTIR";
import CalculateLEC from "../CalculateIndicatorsModals/CalculateLEC";
import CalculateBPM from "../CalculateIndicatorsModals/CalculateBPM";
import ShowResult from '../CalculateIndicatorsModals/ShowResult'
import IndicatorCard from "./IndicatorCard";

function IndicatorsGrid({ indicators }) {
  return (
    <section className="indicators-grid">
      <IndicatorCard title="Valor Actual Neto (VAN)" indicatorValue={indicators?.VAN} asideColor={"#02C502"}>
        <CalculateIndicatorModal
          title={"Calcular VAN"}
          asideColor="green"
          indicatorForm={<CalculateVAN />}
        />
      </IndicatorCard>
      <IndicatorCard title = "Tasa Interna de Retorno (TIR)" indicatorValue={indicators?.TIR} asideColor={"#06F"}>
        <CalculateIndicatorModal
          title={"Calcular TIR"}
          asideColor="#06F"
          indicatorForm={<CalculateTIR />}
          asideContent={<ShowResult result = {50.7}/>}
        />
      </IndicatorCard>
      <IndicatorCard title = "Tiempo de Recuperación de Inversión (TRI)" indicatorValue={indicators?.TRI} asideColor={"#0FF"}>
        <CalculateIndicatorModal
          title={"Calcular TRI"}
          asideColor="#0FF"
          indicatorForm={<CalculateTRI />}
          asideContent={<ShowResult result = {50.7}/>}
        />
      </IndicatorCard>
      <IndicatorCard title = "Costo Nivelado de la Electricidad (LEC)" indicatorValue={indicators?.LEC} asideColor={"#AD00FF"}>
        <CalculateIndicatorModal
          title={"Calcular LEC"}
          asideColor="#AD00FF"
          indicatorForm={<CalculateLEC />}
          asideContent={<ShowResult result = {50.7}/>}
        />
      </IndicatorCard>
      <IndicatorCard title = "Potencial de Biometano Generado (BPM)" indicatorValue={indicators?.BPM} asideColor={"#FFC700"}>
        <CalculateIndicatorModal
          title={"Calcular BPM"}
          asideColor="#FFC700"
          indicatorForm={<CalculateBPM />}
          asideContent={<ShowResult result = {50.7}/>}
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
