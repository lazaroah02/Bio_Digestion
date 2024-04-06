import '../commonStyles.css'
import './index.css'
import InfoIcon from '../../../../icons/InfoIcon'
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';

function ShowPropertiesInfo({title = "", description = ""}) {
    const [show, setShow] = useState(false)
    return ( 
        <>
            <span onClick = {() => setShow(true)}>
                <InfoIcon  className = "info-icon"/>
            </span>
            <Dialog
                visible={show}
                onHide={() => setShow(false)}
                position="center"
                draggable={false}
                resizable={false}
                style={{ maxWidth: "93vw" }}
                header={title}
                headerClassName="calculate-indicator-header"
            >
                {description}
            </Dialog>
        </>
     );
}

export default ShowPropertiesInfo;