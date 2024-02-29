import OptionsIcon from '../../../icons/OptionsIcon.jsx'
import { Dropdown } from 'primereact/dropdown';
import TrashIcon from '../../../icons/TrashIcon.jsx';
import { useRef } from 'react';
import './index.css'

function OptionsDropdown({setDeletingProjects}) {
    const dropdownRef = useRef(null)
    const options = [
        {
          name: (
            <button className="start-projects-deletion-button" onClick = {() => {
              setDeletingProjects(true)
              }}>
              <span>Eliminar Proyecto</span>
              <TrashIcon color = {'rgba(0, 0, 0, 0.9)'} width = {'20px'}/>
            </button>
          ),
          value: "delete-project",
        },
      ];
    
    return ( 
        <>
            <section className = "projects-managment-options-dropdown-container" onClick={() => dropdownRef.current.show()}>
                <Dropdown
                    ref = {dropdownRef}
                    onChange={(e) => {}}
                    options={options}
                    optionLabel="name"
                    className="projects-managment-options-dropdown"
                />
                <OptionsIcon className = "options-icon"/>
            </section>
        </>
     );
}

export default OptionsDropdown;