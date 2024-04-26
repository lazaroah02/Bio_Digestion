import "./index.css";
import CalculateIndicatorModal from "../CalculateIndicatorModal";
import ShowResult from "../ShowResult";
import CalculateZ from '../CalculateZ'

function ShowZResult({ result = null, indicators, indicatorResults, updateIndicatorValue, resetIndicatorResults, setIndicatorResult }) {
  return (
    <section className="show-Z-result">
      <div>Valor de Z</div>
      <span>{result !== null && result != "NaN" ? result : null}</span>
      <CalculateIndicatorModal
        title="Calcular Z"
        calculateButtonExtraStyles="calculate-z-button"
        asideColor="green"
        asideContent={
          <ShowResult
            result={indicatorResults?.Z}
            indicatorName="Z"
            updateIndicatorValue={updateIndicatorValue}
            key="Z"
          />
        }
        indicatorForm={
            <CalculateZ indicators={indicators} setZresult={setIndicatorResult}/>
        }
        key="calculate-z"
        resetIndicatorResults={resetIndicatorResults}
      />
    </section>
  );
}

export default ShowZResult;
