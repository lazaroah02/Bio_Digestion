import { useLocation } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";
import IndicatorsGrid from "../components/IndicatorsComponents/IndicatorsGrid";
import { useManageIndicators } from "../hooks/useManageIndicators";
import { useState } from "react";
import "./pagesStyles/indicators.css";
import { useIsMobileMode } from "../hooks/useIsMobileMode";
import ShowZResult from "../components/IndicatorsComponents/CalculateIndicatorsModals/ShowZResult";
import { useToast } from "../hooks/useToast";

function Indicators() {
  const location = useLocation();
  const project = location.state;
  const {toast, showErrorMessage, showSuccessMessage} = useToast()
  const { indicators, loadingIndicators, updateIndicatorValue } =
    useManageIndicators({ projectId: project.id });
  const { mobileMode } = useIsMobileMode({ mobileWidth: 950 });
  const [indicatorResults, setIndicatorResults] = useState({
    VAN: null,
    VANpartialResults: [],
    TIR: null,
    TRI: null,
    LEC: null,
    BPM: null,
    Z: null,
  });

  function setIndicatorResult({ indicatorName, result }) {
    setIndicatorResults((prev) => ({ ...prev, [indicatorName]: result }));
  }

  function resetIndicatorResults() {
    setIndicatorResults({
      VAN: null,
      VANpartialResults: [],
      TIR: null,
      TRI: null,
      LEC: null,
      BPM: null,
      Z: null,
    });
  }

  return (
    <article className="indicators-page">
        {toast()}
      <div className="indicators-page-main">
        <header className="header">
          <GoBackButton />
          <h4>{project.name}</h4>
        </header>
        <div className="advise">Selecciona para calcular</div>
        <section className="indicators-grid-container">
          {mobileMode ? (
            <aside className="indicators-page-aside-section">
              <div className="show-Z-value-container">
                <ShowZResult
                    result={indicators?.Z}
                    indicators={indicators}
                    indicatorResults={indicatorResults}
                    updateIndicatorValue={updateIndicatorValue}
                    resetIndicatorResults={resetIndicatorResults}
                    setIndicatorResult={setIndicatorResult}
                    showErrorMessage={showErrorMessage}
                />
              </div>
              <div className="show-Z-graphic-container"></div>
            </aside>
          ) : null}
          <IndicatorsGrid
            resetIndicatorResults={resetIndicatorResults}
            indicators={indicators}
            updateIndicatorValue={updateIndicatorValue}
            indicatorResults={indicatorResults}
            setIndicatorResult={setIndicatorResult}
            showErrorMessage={showErrorMessage}
            showSuccessMessage = {showSuccessMessage}
          />
        </section>
      </div>
      {!mobileMode ? (
        <aside className="indicators-page-aside-section">
          <div className="show-Z-value-container">
            <ShowZResult
              result={indicators?.Z}
              indicators={indicators}
              indicatorResults={indicatorResults}
              updateIndicatorValue={updateIndicatorValue}
              resetIndicatorResults={resetIndicatorResults}
              setIndicatorResult={setIndicatorResult}
              showErrorMessage={showErrorMessage}
            />
          </div>
          <div className="show-Z-graphic-container"></div>
        </aside>
      ) : null}
    </article>
  );
}

export default Indicators;
