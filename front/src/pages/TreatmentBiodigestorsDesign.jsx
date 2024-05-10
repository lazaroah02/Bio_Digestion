import "./pagesStyles/design.css";
import "./pagesStyles/commonStyles.css";
import DesignSection from "../components/BiodigestorsDesign/DesignSection";
import CalculateTotalVolume from "../components/BiodigestorsDesign/DesignCalculations/CalculateTotalVolume";
import { useToast } from "../hooks/useToast";
import ShowResult from "../components/BiodigestorsDesign/DesignCalculations/ShowResult";
import { useIsMobileMode } from "../hooks/useIsMobileMode";
import ShowPropertiesInfo from "../components/IndicatorsComponents/CalculateIndicatorsModals/ShowPropertiesInfo";
import { useState } from "react";

function TreatmentBiodigestorsDesign() {
  const { toast, showErrorMessage, showSuccessMessage } = useToast();
  const { mobileMode } = useIsMobileMode({ mobileWidth: 700 });
  const [calculationResults, setCalculationResults] = useState({
    totalVolume: null,
  });
  const [entranceData, setEntranceData] = useState({
    Qinf: null,
  });

  function saveCalculationResult({ calculationName, result }) {
    setCalculationResults((prev) => ({ ...prev, [calculationName]: result }));
  }

  function saveEntranceData({name, value}){
    setEntranceData((prev) => ({...prev, [name]:value}))
  }

  return (
    <section className="biodigestor-design-page">
      {toast()}
      <div className="top-page-white-bar"></div>
      <h1 className="biodigestor-design-title">
        Diseño de Biodigestores de Tratamiento
      </h1>

      {/*Calculate Total Volume*/}
      <DesignSection
        title="Volumen Total (VT) en (m^3)"
        asideContent={
          <ShowResult
            result={calculationResults.totalVolume}
            unit="m^3"
            mobileMode={mobileMode}
          />
        }
        titleDescription={
            <ShowPropertiesInfo title = "Volumen Total(VT)" description='VT, es el Volumen Total del reactor en (m^3).'/>
        }
        mobileMode={mobileMode}
      >
        <CalculateTotalVolume
          entranceData = {entranceData}
          saveEntranceData = {saveEntranceData}  
          calculationName={"totalVolume"}
          showErrorMessage={showErrorMessage}
          saveCalculationResult={saveCalculationResult}
        />
      </DesignSection>

      <div className="design-section-separator"></div>

      {/*Calculate Hidraulic Retention Time*/}
      <DesignSection
        title="Tiempo de Retención Hidráulico(TRH) en dias(d)"
        showAdvice = {false}
        asideContent={
          <ShowResult
            result={50}
            unit="m^3"
            mobileMode={mobileMode}
          />
        }
        mobileMode={mobileMode}
      >
        <div className = "TRH-explanation">Se calcula automaticamente en base al Volumen Total(VT) y el volumen de mezcla (Qinf) ingresados en la sección anterior</div>
      </DesignSection>
    </section>
  );
}

export default TreatmentBiodigestorsDesign;
