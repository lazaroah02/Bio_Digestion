import "./pagesStyles/design.css";
import "./pagesStyles/commonStyles.css";
import DesignSection from "../components/BiodigestorsDesign/DesignSection";
import CalculateTotalVolume from "../components/BiodigestorsDesign/DesignCalculations/CalculateTotalVolume";
import { useToast } from "../hooks/useToast";
import ShowResult from "../components/BiodigestorsDesign/DesignCalculations/ShowResult";
import { useIsMobileMode } from "../hooks/useIsMobileMode";
import ShowPropertiesInfo from "../components/IndicatorsComponents/CalculateIndicatorsModals/ShowPropertiesInfo";
import {
  calculateHidraulicRetentionTime,
  getNumberOfReactorsNeeded,
  calculateVolumeOfEachReactor,
} from "../utils/designCalculations";
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
        advice={"Ingrese los siguientes datos"}
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
        asideContent={
          <ShowResult
            result={calculationResults.TRH}
            unit="días"
            mobileMode={mobileMode}
          />
        }
        titleDescription={
          <ShowPropertiesInfo
            title="Tiempo de Retención Hidráulico(TRH)"
            description="TRH, indica la cantidad de tiempo en días que permanece el material dentro del digestor"
          />
        }
        mobileMode={mobileMode}
      >
        <div className="design-calculation-explanation">
          Se calcula automaticamente en base al Volumen Total(VT) y el volumen
          de mezcla (Qinf) de la sección anterior
        </div>
      </DesignSection>

      {/*Volume of each reactor*/}
      {entranceData.Qinf > 500 && calculationResults.VT != null ? (
        <>
          <div className="design-section-separator"></div>
          <DesignSection
            className = "design-section-border-green"
            title="Volumen de cada Reactor(VR) en (m^3)"
            advice={"Optimización"}
            adviceClassName="text-success"
            asideContent={
              <ShowResult
                result={
                  calculateVolumeOfEachReactor({
                    VT: calculationResults.VT,
                    n: getNumberOfReactorsNeeded({ Qinf: entranceData.Qinf }),
                  })
              }
                unit="m^3"
                mobileMode={mobileMode}
              />
            }
            mobileMode={mobileMode}
          >
            <div className="design-calculation-explanation VR-explanation">
              <p>
                Para lograr una puesta en marcha y un mantenimiento más fácil,
                el caudal del influente(Qinf) no puede exceder de 500 m^3/d.
              </p>
              <p>
                Debido a que el caudal actual es de
                <strong className="text-danger">
                  {" "}
                  {entranceData.Qinf} m^3/d
                </strong>
                , se propone dividir el proceso en{" "}
                <strong className="text-danger">
                  {getNumberOfReactorsNeeded({ Qinf: entranceData.Qinf })}
                </strong>{" "}
                unidades de reactores.
              </p>
              <p>Por tanto el Volumen resultante de cada reactor es:</p>
            </div>
          </DesignSection>
        </>
      ) : null}
    </section>
  );
}

export default TreatmentBiodigestorsDesign;
