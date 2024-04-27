import OptionsIcon from '../../../icons/OptionsIcon.jsx'
import { Dropdown } from 'primereact/dropdown';
import { useRef } from 'react';
import './index.css'

function OptionsDropdown({optionsProps = []}) {
  const dropdownRef = useRef(null)
  const options = optionsProps.map(option => {
   return {
      name: (
        <button className="start-projects-deletion-button" onClick = {() => {
          option.fun()
          dropdownRef.current.hide()
          }}>
          <span>{option.content}</span>
          {option.icon}
        </button>
      ),
      value: "delete-project",
    }
  })
    
  console.log(options)
  return ( 
      <>
          <section className = "projects-managment-options-dropdown-container" onClick={() => {dropdownRef.current.show()}}>
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