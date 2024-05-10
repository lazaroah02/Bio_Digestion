import './pagesStyles/graphics.css'
import './pagesStyles/commonStyles.css'
import {useManageProjects} from '../hooks/useManageProjects'
import Loader from '../components/Loader'
import CompareProjectIndicatorsGraphics from '../components/Graphics/CompareProjectIndicatorsGraphics'

function Graphics() {
    const {projects, loadingProjects} = useManageProjects()

    return ( 
        <section className = "graphics-page">
            <div className = "top-page-white-bar"></div>
            {loadingProjects?
                <section className="graphics-page-loader-container">
                    <div>
                        <Loader />
                    </div>
                </section>
                :null
            }
        <CompareProjectIndicatorsGraphics projects={projects} />  
        </section>
    );
}

export default Graphics;