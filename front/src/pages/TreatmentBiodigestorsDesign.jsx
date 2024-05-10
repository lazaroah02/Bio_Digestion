import './pagesStyles/design.css'
import './pagesStyles/commonStyles.css'
import DesignSection from '../components/BiodigestorsDesign/DesignSection';
import CalculateTotalVolume from '../components/BiodigestorsDesign/DesignCalculations/CalculateTotalVolume';
import {useToast} from '../hooks/useToast'
import ShowResult from '../components/BiodigestorsDesign/DesignCalculations/ShowResult';
import {useIsMobileMode} from '../hooks/useIsMobileMode'
import { useState } from 'react';

function TreatmentBiodigestorsDesign() {
    const {toast, showErrorMessage, showSuccessMessage} = useToast()
    const {mobileMode} = useIsMobileMode({mobileWidth:650})
    const [preCalculationResults, setPreCalculationResults] = useState({
        totalVolume:null
    })
    const [calculationResults, setCalculationResults] = useState({
        totalVolume:null
    })
    function savePreCalculationResult({calculationName, result}){
        setPreCalculationResults(prev => ({...prev, [calculationName]:result}))
    }
    function saveCalculationResult({calculationName, result}){
        setCalculationResults(prev => ({...prev, [calculationName]:result}))
    }
    return ( 
        <section  className = "biodigestor-design-page">
            {toast()}
            <div className = "top-page-white-bar"></div>
            <h1 className = "biodigestor-design-title">Diseño de Biodigestores de Tratamiento</h1>
            <DesignSection 
                title = "Cálculo del Volumen Total (m^3)"
                asideContent={<ShowResult showErrorMessage = {showErrorMessage} showSuccessMessage = {showSuccessMessage} saveResult = {saveCalculationResult} result={preCalculationResults.totalVolume} unit='m^3' mobileMode={mobileMode}/>}
                mobileMode={mobileMode}
                >
                <CalculateTotalVolume calculationName = {"totalVolume"} showErrorMessage={showErrorMessage} savePreCalculationResult = {savePreCalculationResult} />
            </DesignSection>
            <div className = "design-section-separator"></div>
            
        </section> 
    );
}

export default TreatmentBiodigestorsDesign;