import './pagesStyles/design.css'
import './pagesStyles/commonStyles.css'
import DesignSection from '../components/BiodigestorsDesign/DesignSection';
import CalculateTotalVolume from '../components/BiodigestorsDesign/DesignCalculations/CalculateTotalVolume';
import {useToast} from '../hooks/useToast'
import ShowResult from '../components/BiodigestorsDesign/DesignCalculations/ShowResult';
import {useIsMobileMode} from '../hooks/useIsMobileMode'

function TreatmentBiodigestorsDesign() {
    const {toast, showErrorMessage} = useToast()
    const {mobileMode} = useIsMobileMode({mobileWidth:650})
    return ( 
        <section  className = "biodigestor-design-page">
            {toast()}
            <div className = "top-page-white-bar"></div>
            <h1 className = "biodigestor-design-title">Diseño de Biodigestores de Tratamiento</h1>
            <DesignSection 
                title = "Cálculo del Volumen Total (m^3)"
                asideContent={<ShowResult result={50.11} unit='m^3' mobileMode={mobileMode}/>}
                mobileMode={mobileMode}
                >
                <CalculateTotalVolume showErrorMessage={showErrorMessage}/>
            </DesignSection>
            <div className = "design-section-separator"></div>
            <DesignSection 
                title = "Cálculo del Volumen Total (m^3)"
                asideContent={<ShowResult result={50.11} unit='m^3' mobileMode={mobileMode}/>}
                mobileMode={mobileMode}
                >
                <CalculateTotalVolume showErrorMessage={showErrorMessage}/>
            </DesignSection>
        </section> 
    );
}

export default TreatmentBiodigestorsDesign;