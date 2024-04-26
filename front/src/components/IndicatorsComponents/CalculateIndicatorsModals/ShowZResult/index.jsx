import "./index.css";
import CalculateIndicatorModal from "../CalculateIndicatorModal";
import ShowResult from "../ShowResult";
import CalculateZ from '../CalculateZ'
import {validateNotNullIndicator} from '../../../../utils/validateNotNullIndicator'

function ShowZResult({ result = null, indicators, indicatorResults, updateIndicatorValue, resetIndicatorResults, setIndicatorResult, showErrorMessage, showSuccessMessage }) {

  function validateIndicatorValues(callback){
    validateNotNullIndicator({
      VAN:indicators?.VAN, 
      TRI:indicators?.TRI, 
      TIR:indicators?.TIR, 
      LEC:indicators?.LEC, 
      BPM:indicators?.BPM, 
      n:indicators?.n
    })
    .then((res) => {return callback()})
    .catch(err => {showErrorMessage(err)})
  }

  return (
    <>
      <section className="show-Z-result">
        <div>Valor de Z</div>
        <span>{result !== null && result != "NaN" ? result : null}</span>
        <CalculateIndicatorModal
          title="Calcular Z"
          calculateButtonExtraStyles="calculate-z-button"
          validationBeforeShowModal = {validateIndicatorValues}
          asideColor="green"
          asideContent={
            <ShowResult
              result={indicatorResults?.Z}
              indicatorName="Z"
              updateIndicatorValue={updateIndicatorValue}
              key="Z"
              showErrorMessage={showErrorMessage}
              showSuccessMessage={showSuccessMessage}
            />
          }
          indicatorForm={
              <CalculateZ indicators={indicators} setZresult={setIndicatorResult} showErrorMessage={showErrorMessage}/>
          }
          key="calculate-z"
          resetIndicatorResults={resetIndicatorResults}
        />
      </section>
    </>
  );
}

export default ShowZResult;
