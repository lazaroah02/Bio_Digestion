import BackIcon from "../../icons/BackIcon";
import './index.css'

function GoBackButton() {
    return ( 
        <div className = "go-back-button" onClick={() => history.back()}>
            <BackIcon/>
        </div>
     );
}

export default GoBackButton;