import CalculateIndicatorModal from "../CalculateIndicatorsModals/CalculateIndicatorModal";
import CalculateVAN from "../CalculateIndicatorsModals/CalculateVAN";
import CalculateTRI from "../CalculateIndicatorsModals/CalculateTRI";
import CalculateTIR from "../CalculateIndicatorsModals/CalculateTIR";
import CalculateLEC from "../CalculateIndicatorsModals/CalculateLEC";
import CalculateBPM from "../CalculateIndicatorsModals/CalculateBPM";
import ShowResult from "../CalculateIndicatorsModals/ShowResult";
import ShowVANResult from "../CalculateIndicatorsModals/ShowVANResult";
import IndicatorCard from "./IndicatorCard";
import { useState } from "react";
import "./index.css";

function IndicatorsGrid({
  indicators,
  indicatorResults,
  updateIndicatorValue,
  setIndicatorResult,
  resetIndicatorResults,
  showErrorMessage,
  showSuccessMessage,
  projectId
}) {
  /*
  State description:
  VAN indicator values to save in the local storage.
  This values are saved in local storage when the user finish the VAN indicator calculation and save the result.
  This values will be used in the TIR calculation.
  */
  const [VANpropertiesToSaveInLocalStorage, setVANPropertiesToSaveInLocalStorage] = useState({
    Q: "",
    Inv: ""
  })
  return (
    <section className="indicators-grid">
      <IndicatorCard
        title="Valor Actual Neto (VAN)"
        indicatorName={"VAN"}
        updateIndicatorValue={updateIndicatorValue}
        indicatorValue={indicators?.VAN}
        asideColor={"#02C502"}
        showSuccessMessage={showSuccessMessage}
      >
        <CalculateIndicatorModal
          title={"Calcular VAN"}
          resetIndicatorResults={resetIndicatorResults}
          asideColor="green"
          indicatorForm={
            <CalculateVAN
              indicators={indicators}
              setVanResult={setIndicatorResult}
              setVANPropertiesToSaveInLocalStorage = {setVANPropertiesToSaveInLocalStorage}
            />
          }
          asideContent={
            <ShowVANResult
              projectId = {projectId}
              result={indicatorResults?.VAN}
              VANpartialResults={indicatorResults?.VANpartialResults}
              updateIndicatorValue={updateIndicatorValue}
              showErrorMessage={showErrorMessage}
              showSuccessMessage={showSuccessMessage}
              VANpropertiesToSaveInLocalStorage = {VANpropertiesToSaveInLocalStorage}
            />
          }
        />
      </IndicatorCard>
      <IndicatorCard
        title="Tasa Interna de Retorno (TIR) (en %)"
        indicatorName={"TIR"}
        updateIndicatorValue={updateIndicatorValue}
        indicatorValue={indicators?.TIR}
        asideColor={"#06F"}
        showSuccessMessage={showSuccessMessage}
      >
        <CalculateIndicatorModal
          title={"Calcular TIR"}
          resetIndicatorResults={resetIndicatorResults}
          asideColor="#06F"
          indicatorForm={<CalculateTIR projectId = {projectId} indicators={indicators} setTIRResult={setIndicatorResult}/>}
          asideContent={
            <ShowResult
              result={indicatorResults?.TIR}
              indicatorName={"TIR"}
              updateIndicatorValue={updateIndicatorValue}
              showErrorMessage={showErrorMessage}
              showSuccessMessage={showSuccessMessage}
              unit="%"
            />
          }
        />
      </IndicatorCard>
      <IndicatorCard
        title="Tiempo de Recuperación de Inversión (TRI) (en años)"
        indicatorName={"TRI"}
        updateIndicatorValue={updateIndicatorValue}
        indicatorValue={indicators?.TRI}
        asideColor={"#0FF"}
        showSuccessMessage={showSuccessMessage}
      >
        <CalculateIndicatorModal
          title={"Calcular TRI"}
          resetIndicatorResults={resetIndicatorResults}
          asideColor="#0FF"
          indicatorForm={
            <CalculateTRI
              setTRIResult={setIndicatorResult}
              showErrorMessage={showErrorMessage}
            />
          }
          asideContent={
            <ShowResult
              result={indicatorResults?.TRI}
              indicatorName={"TRI"}
              updateIndicatorValue={updateIndicatorValue}
              showErrorMessage={showErrorMessage}
              showSuccessMessage={showSuccessMessage}
              unit="años"
            />
          }
        />
      </IndicatorCard>
      <IndicatorCard
        title="Costo Nivelado de la Electricidad (LEC)"
        indicatorName={"LEC"}
        updateIndicatorValue={updateIndicatorValue}
        indicatorValue={indicators?.LEC}
        asideColor={"#AD00FF"}
        showSuccessMessage={showSuccessMessage}
      >
        <CalculateIndicatorModal
          title={"Calcular LEC"}
          resetIndicatorResults={resetIndicatorResults}
          asideColor="#AD00FF"
          indicatorForm={
            <CalculateLEC
              indicators={indicators}
              setLECResult={setIndicatorResult}
            />
          }
          asideContent={
            <ShowResult
              result={indicatorResults?.LEC}
              indicatorName={"LEC"}
              updateIndicatorValue={updateIndicatorValue}
              showErrorMessage={showErrorMessage}
              showSuccessMessage={showSuccessMessage}
            />
          }
        />
      </IndicatorCard>
      <IndicatorCard
        title="Potencial de Biometano Generado (BPM)"
        indicatorName={"BPM"}
        updateIndicatorValue={updateIndicatorValue}
        indicatorValue={indicators?.BPM}
        asideColor={"#FFC700"}
        showSuccessMessage={showSuccessMessage}
      >
        <CalculateIndicatorModal
          title={"Calcular BPM"}
          resetIndicatorResults={resetIndicatorResults}
          asideColor="#FFC700"
          indicatorForm={<CalculateBPM setBPMResult={setIndicatorResult} />}
          asideContent={
            <ShowResult
              result={indicatorResults?.BPM}
              indicatorName={"BPM"}
              updateIndicatorValue={updateIndicatorValue}
              showErrorMessage={showErrorMessage}
              showSuccessMessage={showSuccessMessage}
            />
          }
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
