import './pagesStyles/graphics.css'
import {useManageProjects} from '../hooks/useManageProjects'
import Loader from '../components/Loader'

function Graphics() {
    const {projects, loadingProjects} = useManageProjects()
    return ( 
        <section className = "graphics-page">
            {loadingProjects?
                <section className="graphics-page-loader-container">
                    <div>
                        <Loader />
                    </div>
                </section>
                :null
            }
        </section>
    );
}

export default Graphics;