import {Link} from 'react-router-dom'
import './index.css'

function SelectBiodigestorTypeMenu() {
    return ( 
        <section className = "select-biodigestor-type-menu-page">
            <div className = "select-biodigestor-type-menu">
                <Link to = "trataiment-biodigestors">Trataiment</Link>
                <Link to = "post-trataiment-biodigestors">PostTrataiment</Link>
            </div>
        </section>
     );
}

export default SelectBiodigestorTypeMenu;