import "./pagesStyles/design.css";
import "./pagesStyles/commonStyles.css";
import DesignSection from "../components/BiodigestorsDesign/DesignSection";
import CalculateTotalVolume from "../components/BiodigestorsDesign/DesignCalculations/CalculateTotalVolume";
import { useToast } from "../hooks/useToast";
import ShowResult from "../components/BiodigestorsDesign/DesignCalculations/ShowResult";
import { useIsMobileMode } from "../hooks/useIsMobileMode";
import ShowPropertiesInfo from "../components/IndicatorsComponents/CalculateIndicatorsModals/ShowPropertiesInfo";
import { calculateHidraulicRetentionTime } from "../utils/designCalculations";
import { useState, useEffect } from "react";

function TreatmentBiodigestorsDesign() {
  const { toast, showErrorMessage } = useToast();
  const { mobileMode } = useIsMobileMode({ mobileWidth: 700 });
  const [calculationResults, setCalculationResults] = useState({
    VT: null,
    TRH: null,
  });
  const [entranceData, setEntranceData] = useState({
    Qinf: null,
    DQOv: null,
    COV: null,
  });

  function saveCalculationResult({ calculationName, result }) {
    setCalculationResults((prev) => ({ ...prev, [calculationName]: result }));
  }

  function saveEntranceData({ name, value }) {
    setEntranceData((prev) => ({ ...prev, [name]: value }));
  }

  //calculate automatically VRH on Qinf or VT change
  useEffect(() => {
    if (
      calculationResults.VT != null &&
      entranceData.Qinf != null &&
      calculationResults.VT != "" &&
      entranceData.Qinf != ""
    ) {
      setCalculationResults((prev) => ({
        ...prev,
        TRH: calculateHidraulicRetentionTime({
          Qinf: entranceData.Qinf,
          VT: calculationResults.VT,
        }),
      }));
    } else {
      setCalculationResults((prev) => ({ ...prev, TRH: null }));
    }
  }, [calculationResults.VT, entranceData.Qinf]);

  //check if VT result is updated when entrance data change
  useEffect(() => {
    setCalculationResults((prev) => ({ ...prev, VT: null }));
  }, [entranceData.Qinf, entranceData.DQOv, entranceData.COV]);

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
            result={calculationResults.VT}
            unit="m^3"
            mobileMode={mobileMode}
          />
        }
        titleDescription={
          <ShowPropertiesInfo
            title="Volumen Total(VT)"
            description="VT, es el Volumen Total del reactor en (m^3)."
          />
        }
        mobileMode={mobileMode}
      >
        <CalculateTotalVolume
          entranceData={entranceData}
          saveEntranceData={saveEntranceData}
          calculationName={"VT"}
          showErrorMessage={showErrorMessage}
          saveCalculationResult={saveCalculationResult}
        />
      </DesignSection>

      <div className="design-section-separator"></div>

      {/*Calculate Hidraulic Retention Time*/}
      <DesignSection
        title="Tiempo de Retención Hidráulico(TRH) en dias(d)"
        showAdvice={false}
        asideContent={
          <ShowResult
            result={calculationResults.TRH}
            unit="m^3"
            mobileMode={mobileMode}
          />
        }
        mobileMode={mobileMode}
      >
        <div className="TRH-explanation">
          Se calcula automaticamente en base al Volumen Total(VT) y el volumen
          de mezcla (Qinf) de la sección anterior
        </div>
      </DesignSection>
    </section>
  );
}

export default TreatmentBiodigestorsDesign;
