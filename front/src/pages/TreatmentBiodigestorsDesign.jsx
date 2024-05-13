import "./pagesStyles/design.css";
import "./pagesStyles/commonStyles.css";
import DesignSection from "../components/BiodigestorsDesign/DesignSection";
import CalculateTotalVolume from "../components/BiodigestorsDesign/DesignCalculations/CalculateTotalVolume";
import CalculateArea from "../components/BiodigestorsDesign/DesignCalculations/CalculateArea";
import CalculateAscendSpeed from "../components/BiodigestorsDesign/DesignCalculations/CalculateAscendSpeed";
import { useToast } from "../hooks/useToast";
import ShowResult from "../components/BiodigestorsDesign/DesignCalculations/ShowResult";
import { useIsMobileMode } from "../hooks/useIsMobileMode";
import ShowPropertiesInfo from "../components/IndicatorsComponents/CalculateIndicatorsModals/ShowPropertiesInfo";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DesignReport from "../PdfTemplates/DesignReport";
import { useLazyLoad } from "../hooks/useLazyLoad";
import {
  calculateHidraulicRetentionTime,
  getNumberOfReactorsNeeded,
  calculateVolumeOfEachReactor,
  calculateReactorSide
} from "../utils/designCalculations";
import { useState, useEffect } from "react";

function TreatmentBiodigestorsDesign() {
  const { toast, showErrorMessage } = useToast();
  const { mobileMode } = useIsMobileMode({ mobileWidth: 700 });
  const {showLazyElement} = useLazyLoad({rootId: "design-page", lazyReferenceId: "design-lazy-button"})
  const [calculationResults, setCalculationResults] = useState({
    VT: null,
    TRH: null,
    VR:null,
    AR: null,
    LR:null,
    Vasc:null
  });
  const [entranceData, setEntranceData] = useState({
    Qinf: null,
    DQOv: null,
    COV: null,
    Hr: null
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

  //calculate automatically Volume of each reactor(VR) on VT change
  useEffect(() => {
    if (
      calculationResults.VT != null &&
      calculationResults.VT != "" &&
      entranceData.Qinf > 500 
    ) {
      setCalculationResults((prev) => ({
        ...prev,
        VR: calculateVolumeOfEachReactor({
          VT: calculationResults.VT,
          n: getNumberOfReactorsNeeded({ Qinf: entranceData.Qinf }),
        }),
      }));
    } else {
      setCalculationResults((prev) => ({ ...prev, VR: null }));
    }
  }, [calculationResults.VT]);

  //calculate automatically reactor side on Area(AR) change
  useEffect(() => {
    if (
      calculationResults.AR != null &&
      calculationResults.AR != ""
    ) {
      setCalculationResults((prev) => ({
        ...prev,
        LR: calculateReactorSide({
          AR: calculationResults.AR,
        }),
      }));
    } else {
      setCalculationResults((prev) => ({ ...prev, LR: null }));
    }
  }, [calculationResults.AR]);

  //check if Total Volume(VT) result is updated when entrance data change
  useEffect(() => {
    setCalculationResults((prev) => ({ ...prev, VT: null }));
  }, [entranceData.Qinf, entranceData.DQOv, entranceData.COV]);

  //check if the area(AR) result is updated when Volume or Hr changes
  useEffect(() => {
    setCalculationResults((prev) => ({ ...prev, AR: null }));
  }, [entranceData.Hr, calculationResults.VT]);

  //check if the Ascend Speed(Vasc) result is updated when Hr or TRH changes
  useEffect(() => {
    setCalculationResults((prev) => ({ ...prev, Vasc: null }));
  }, [entranceData.Hr, calculationResults.TRH]);

  return (
    <section id = "design-page" className="biodigestor-design-page">
      {toast()}
      <div className="top-page-white-bar"></div>
      <h1 className="biodigestor-design-title">
        Diseño de Biodigestores de Tratamiento
      </h1>

      {/*Calculate Total Volume*/}
      <DesignSection
        title="Volumen Total (VT) en (m^3)"
        advice={"Ingrese los siguientes datos"}
        id = {"volume-calculation"}
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
        title="Tiempo de Retención Hidráulico(TRH) en horas(h)"
        id={"TRH-calculation"}
        asideContent={
          <ShowResult
            result={calculationResults.TRH}
            unit="horas"
            mobileMode={mobileMode}
          />
        }
        titleDescription={
          <ShowPropertiesInfo
            title="Tiempo de Retención Hidráulico(TRH)"
            description="TRH, indica la cantidad de tiempo en horas que permanece el material dentro del digestor"
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
                result={calculationResults.VR}
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

      <div className="design-section-separator"></div>

      {/*Calculate Area*/}
      <DesignSection
        title="Área de reactor(AR) en (m^2)"
        advice={"Ingrese los siguientes datos"}
        asideContent={
          <ShowResult
            result={calculationResults.AR}
            unit="m^2"
            mobileMode={mobileMode}
          />
        }
        titleDescription={
          <ShowPropertiesInfo
            title="AR"
            description={"AR, es el área de reactor en (m^2)."}
          />
        }
        mobileMode={mobileMode}
      >
        <div className="design-calculation-explanation">
          Nota: Usando el valor de <strong className = "text-success">{entranceData.Qinf > 500?"VR":"VT"}</strong> para el cálculo
        </div>
        <CalculateArea
          entranceData={entranceData}
          saveEntranceData={saveEntranceData}
          calculationName={"AR"}
          showErrorMessage={showErrorMessage}
          saveCalculationResult={saveCalculationResult}
          volume={entranceData.Qinf > 500? calculationResults.VR:calculationResults.VT}
          volumeCalculationId={"volume-calculation"}
        />
      </DesignSection>

      <div className="design-section-separator"></div>

      {/*Calculate Reactor Side*/}
      <DesignSection
        title="Longitud de cada lado de reactor(LR) en (m)"
        asideContent={
          <ShowResult
            result={calculationResults.LR}
            unit="m"
            mobileMode={mobileMode}
          />
        }
        titleDescription={
          <ShowPropertiesInfo
            title="Longitud de cada lado de reactor(LR)"
            description="LR, es la longitud de cada lado del reactor en (m)."
          />
        }
        mobileMode={mobileMode}
      >
        <div className="design-calculation-explanation">
          Se calcula automaticamente en base al Área de Reactor(AR). 
          Se escoge una forma de reactor cuadrada par una mayor facilidad en los cálculos.
        </div>
      </DesignSection>

      <div className="design-section-separator"></div>

      {/*Calculate Ascend Speed*/}
      <DesignSection
        title="Velocidad ascensional(Vasc) en (m/h)"
        advice={"Ingrese los siguientes datos"}
        asideContent={
          <ShowResult
            result={calculationResults.Vasc}
            unit="m/h"
            mobileMode={mobileMode}
          />
        }
        titleDescription={
          <ShowPropertiesInfo
            title="Velocidad ascensional(Vasc)"
            description={"Vasc, es la velocidad ascensional del influente, (m/h)."}
          />
        }
        mobileMode={mobileMode}
      >
        <div className="design-calculation-explanation">
          Nota: Usando el valor de <strong className = "text-success">TRH</strong> para el cálculo
        </div>
        <CalculateAscendSpeed
          entranceData={entranceData}
          saveEntranceData={saveEntranceData}
          calculationName={"Vasc"}
          showErrorMessage={showErrorMessage}
          saveCalculationResult={saveCalculationResult}
          TRH={calculationResults.TRH}
          TRHCalculationId={"TRH-calculation"}
        />
      </DesignSection>

      <div className="design-section-separator"></div>

      <div id = "design-lazy-button" className = "my-container">
        {showLazyElement?
          <button className = "design-page-generate-report-button">
            <PDFDownloadLink 
              document={
                <DesignReport 
                  frontPageTitle = "Diseño de Reactor de Tratamiento"
                  entranceData={entranceData}
                  calculationResults={calculationResults}
                  />
                }
                fileName="Diseño de Reactor de Tratamiento.pdf"
                className="generate-pdf-link"
              >
                {({ loading }) =>
                  loading ? "Cargando documento..." : "Generar Reporte"
                }
            </PDFDownloadLink>
          </button>
          :null
        }
      </div>
    </section>
  );
}

export default TreatmentBiodigestorsDesign;
