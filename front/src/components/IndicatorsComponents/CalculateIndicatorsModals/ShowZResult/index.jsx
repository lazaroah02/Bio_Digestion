import "./index.css";
import CalculateIndicatorModal from "../CalculateIndicatorModal";
import ShowResult from "../ShowResult";
import CalculateZ from '../CalculateZ'

function ShowZResult({ result = null }) {
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
            result={null}
            indicatorName="Z"
            updateIndicatorValue={() => {}}
            key="Z"
          />
        }
        indicatorForm={
            <CalculateZ/>
        }
        key="calculate-z"
        resetIndicatorResults={() => {}}
      />
    </section>
  );
}

export default ShowZResult;
