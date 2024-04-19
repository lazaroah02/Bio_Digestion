import CalculateIndicatorModal from "../CalculateIndicatorsModals/CalculateIndicatorModal";
import CalculateVAN from "../CalculateIndicatorsModals/CalculateVAN";
import CalculateTRI from "../CalculateIndicatorsModals/CalculateTRI";
import CalculateTIR from "../CalculateIndicatorsModals/CalculateTIR";
import CalculateLEC from "../CalculateIndicatorsModals/CalculateLEC";
import CalculateBPM from "../CalculateIndicatorsModals/CalculateBPM";
import ShowResult from '../CalculateIndicatorsModals/ShowResult'
import ShowVANResult from "../CalculateIndicatorsModals/ShowVANResult";
import IndicatorCard from "./IndicatorCard";
import "./index.css";

function IndicatorsGrid({ indicators, indicatorResults, updateIndicatorValue, setIndicatorResult }) {

  return (
    <section className="indicators-grid">
      <IndicatorCard title="Valor Actual Neto (VAN)" indicatorName = {"VAN"} updateIndicatorValue={updateIndicatorValue} indicatorValue={indicators?.VAN} asideColor={"#02C502"}>
        <CalculateIndicatorModal
          title={"Calcular VAN"}
          asideColor="green"
          indicatorForm={<CalculateVAN indicators = {indicators} setVanResult={setIndicatorResult}/>}
          asideContent={<ShowVANResult result={indicatorResults?.VAN} VANpartialResults = {indicatorResults?.VANpartialResults} updateIndicatorValue={updateIndicatorValue}/>}
        />
      </IndicatorCard>
      <IndicatorCard title = "Tasa Interna de Retorno (TIR)" indicatorName = {"TIR"} updateIndicatorValue={updateIndicatorValue} indicatorValue={indicators?.TIR} asideColor={"#06F"}>
        <CalculateIndicatorModal
          title={"Calcular TIR"}
          asideColor="#06F"
          indicatorForm={<CalculateTIR />}
          asideContent={<ShowResult result={indicatorResults?.TIR} indicatorName={"TIR"} updateIndicatorValue={updateIndicatorValue}/>}
        />
      </IndicatorCard>
      <IndicatorCard title = "Tiempo de Recuperación de Inversión (TRI)" indicatorName = {"TRI"} updateIndicatorValue={updateIndicatorValue} indicatorValue={indicators?.TRI} asideColor={"#0FF"}>
        <CalculateIndicatorModal
          title={"Calcular TRI"}
          asideColor="#0FF"
          indicatorForm={<CalculateTRI setTRIResult={setIndicatorResult}/>}
          asideContent={<ShowResult result={indicatorResults?.TRI} indicatorName={"TRI"} updateIndicatorValue={updateIndicatorValue}/>}
        />
      </IndicatorCard>
      <IndicatorCard title = "Costo Nivelado de la Electricidad (LEC)" indicatorName = {"LEC"} updateIndicatorValue={updateIndicatorValue} indicatorValue={indicators?.LEC} asideColor={"#AD00FF"}>
        <CalculateIndicatorModal
          title={"Calcular LEC"}
          asideColor="#AD00FF"
          indicatorForm={<CalculateLEC indicators={indicators} setLECResult={setIndicatorResult}/>}
          asideContent={<ShowResult result={indicatorResults?.LEC} indicatorName={"LEC"} updateIndicatorValue={updateIndicatorValue}/>}
        />
      </IndicatorCard>
      <IndicatorCard title = "Potencial de Biometano Generado (BPM)" indicatorName = {"BPM"} updateIndicatorValue={updateIndicatorValue} indicatorValue={indicators?.BPM} asideColor={"#FFC700"}>
        <CalculateIndicatorModal
          title={"Calcular BPM"}
          asideColor="#FFC700"
          indicatorForm={<CalculateBPM setBPMResult={setIndicatorResult}/>}
          asideContent={<ShowResult result={indicatorResults?.BPM} indicatorName={"BPM"} updateIndicatorValue={updateIndicatorValue}/>}
        />
      </IndicatorCard>
      
      <article className="indicator-card n-indicator-card">
        <aside style={{ backgroundColor: "#DC0101" }}></aside>
        <section>
          <header>Eficiencia del proceso (n)</header>
          <span>{indicators?.n}</span>
        </section>
      </article>
    </section>
  );
}

export default IndicatorsGrid;
