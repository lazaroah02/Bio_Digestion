import {useNavigate} from 'react-router-dom'
import './index.css'

function SelectBiodigestorTypeMenu() {
    const navigate = useNavigate()
    return ( 
        <section className = "select-biodigestor-type-menu-page">
            <div className = "select-biodigestor-type-menu">
                <div onClick = {() => navigate("treatment-biodigestors")}>
                    <p>Biodigestores</p>
                    <p>de</p> 
                    <p>Tratamiento</p>
                </div>
                <div onClick = {() => navigate("post-treatment-biodigestors")}>
                    <p>Biodigestores</p>
                    <p>de</p> 
                    <p>Postratamiento</p>
                </div>
            </div>
        </section>
     );
}

export default SelectBiodigestorTypeMenu;