import React from 'react'
import './Dropdown.css'

const Dropdown = (props) => (
  <div className="dropdown-content">
    <li onClick={props.copy}>Копировать</li>
    <li>Редактировать</li>
    <li>Удалить</li>
  </div>
)
 
export default Dropdown;