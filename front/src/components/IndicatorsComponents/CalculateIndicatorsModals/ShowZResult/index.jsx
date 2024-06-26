import "./index.css";
import CalculateIndicatorModal from "../CalculateIndicatorModal";
import ShowResult from "../ShowResult";
import CalculateZ from "../CalculateZ";
import { validateNotNullIndicator } from "../../../../utils/validateNotNullIndicator";
import { calculateZ } from "../../../../utils/calculateIndicators";
import { getFromLocalStorageDesiredIndicatorValues } from "../../../../utils/localStorageDesiredIndicatorValues";
import { useState, useEffect } from "react";
import { saveInLocalStorageDesiredIndicatorValues } from "../../../../utils/localStorageDesiredIndicatorValues";
import ShowPropertiesInfo from "../ShowPropertiesInfo";

function ShowZResult({
  result = null,
  indicators,
  indicatorResults,
  updateIndicatorValue,
  resetIndicatorResults,
  setIndicatorResult,
  showErrorMessage,
  showSuccessMessage,
  projectId
}) {
  const [notUpdatedZ, setNotUpdatedZ] = useState(false);
  const [desiredIndicatorValues, setDesiredIndicatorValues] = useState({
    VAN_d: localStorage.getItem(`VAN_d-${projectId}`),
    TRI_d: localStorage.getItem(`TRI_d-${projectId}`),
    TIR_d: localStorage.getItem(`TIR_d-${projectId}`),
    LEC_d: localStorage.getItem(`LEC_d-${projectId}`),
    BPM_d: localStorage.getItem(`BPM_d-${projectId}`),
    n_d: localStorage.getItem(`n_d-${projectId}`),
  });

  //validate if any indicator values is null when the user click on calculate Z button
  function validateIndicatorValues(callback) {
    validateNotNullIndicator({
      VAN: indicators?.VAN,
      TRI: indicators?.TRI,
      TIR: indicators?.TIR,
      LEC: indicators?.LEC,
      BPM: indicators?.BPM,
      n: indicators?.n,
    })
      .then((res) => {
        return callback();
      })
      .catch((err) => {
        showErrorMessage(err);
      });
  }

  //check if the actual Z result correspond with the actual indicator values,
  //making a pre-calculation based on the last desired indicator values entered by the user
  useEffect(() => {
    try {
      const { VAN_d, TRI_d, TIR_d, LEC_d, BPM_d, n_d } = getFromLocalStorageDesiredIndicatorValues({projectId:projectId,});
      if( VAN_d == null, TRI_d == null, TIR_d == null, LEC_d == null, BPM_d == null, n_d == null){
        return
      }  
      let result = calculateZ({
        VAN: parseFloat(indicators?.VAN),
        TRI: parseFloat(indicators?.TRI),
        TIR: parseFloat(indicators?.TIR),
        LEC: parseFloat(indicators?.LEC),
        BPM: parseFloat(indicators?.BPM),
        n: parseFloat(indicators?.n),
        VAN_d: parseFloat(VAN_d),
        TRI_d: parseFloat(TRI_d),
        TIR_d: parseFloat(TIR_d),
        LEC_d: parseFloat(LEC_d),
        BPM_d: parseFloat(BPM_d),
        n_d: parseFloat(n_d),
      });
      if (parseFloat(result).toFixed(2) !== parseFloat(indicators?.Z).toFixed(2)) {
        setNotUpdatedZ(true);
      } else {
        setNotUpdatedZ(false);
      }
    } catch(exception){}
  }, [indicators]);

  //this function happend when the user click the "save new result" button in the aside of the calculate indicator modal
  function handleUpdateIndicatorValue({ indicatorName, newValue }) {
    updateIndicatorValue({ indicatorName: indicatorName, newValue: newValue });

    //save in local storage the desired indicators values for future
    //comprobations every time the user saves the Z calculation result
    saveInLocalStorageDesiredIndicatorValues({
      projectId:projectId,
      VAN_d: desiredIndicatorValues.VAN_d,
      TRI_d: desiredIndicatorValues.TRI_d,
      TIR_d: desiredIndicatorValues.TIR_d,
      LEC_d: desiredIndicatorValues.LEC_d,
      BPM_d: desiredIndicatorValues.BPM_d,
      n_d: desiredIndicatorValues.n_d,
    });
  }

  function resetDesiredIndicatorValues() {
    setDesiredIndicatorValues({
      VAN_d: localStorage.getItem(`VAN_d-${projectId}`),
      TRI_d: localStorage.getItem(`TRI_d-${projectId}`),
      TIR_d: localStorage.getItem(`TIR_d-${projectId}`),
      LEC_d: localStorage.getItem(`LEC_d-${projectId}`),
      BPM_d: localStorage.getItem(`BPM_d-${projectId}`),
      n_d: localStorage.getItem(`n_d-${projectId}`),
    });
  }

  function clearDesiredIndicatorValues(){
    setDesiredIndicatorValues({
      VAN_d: "",
      TRI_d: "",
      TIR_d: "",
      LEC_d: "",
      BPM_d: "",
      n_d: "",
    });
  }

  //reset the indicatorResults and desiredIndicatorValues to its default values
  function resetValues() {
    resetIndicatorResults();
    resetDesiredIndicatorValues();
  }

  return (
    <>
      <section className="show-Z-result">
        <div>Valor de Z</div>
        <span>
          {result !== null && result != "NaN" ? (
            <>
              {result}
              {notUpdatedZ ? (
                <ShowPropertiesInfo
                  title="Advertencia"
                  iconClassName="danger"
                  headerClassName="danger"
                  description = {
                    <div>
                      <p>El valor de Z no está actualizado.</p>
                      <p>Se han producido cambios en los valores de los indicadores desde la última vez que se calculó Z.</p> 
                      <p>Es recomendable volver a calcular Z </p>
                    </div>
                  }
                />
              ) : (
                <ShowPropertiesInfo
                  title="Información"
                  iconClassName="success"
                  headerClassName="success"
                  description="El valor de Z está actualizado"
                />
              )}
            </>
          ) : null}
        </span>
        <CalculateIndicatorModal
          title="Calcular Z"
          calculateButtonExtraStyles="calculate-z-button"
          validationBeforeShowModal={validateIndicatorValues}
          asideColor="green"
          asideContent={
            <ShowResult
              result={indicatorResults?.Z}
              indicatorName="Z"
              updateIndicatorValue={handleUpdateIndicatorValue}
              key="Z"
              showErrorMessage={showErrorMessage}
              showSuccessMessage={showSuccessMessage}
            />
          }
          indicatorForm={
            <CalculateZ
              indicators={indicators}
              setZresult={setIndicatorResult}
              showErrorMessage={showErrorMessage}
              desiredIndicatorValues={desiredIndicatorValues}
              setDesiredIndicatorValues={setDesiredIndicatorValues}
              clearDesiredIndicatorValues = {clearDesiredIndicatorValues}
            />
          }
          key="calculate-z"
          resetIndicatorResults={resetValues}
        />
      </section>
    </>
  );
}

export default ShowZResult;
