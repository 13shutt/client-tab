import React from 'react'
import './Dropdown.css'

const Dropdown = (props) => (
  <div className="dropdown-content">
    <li onClick={props.copy}>Копировать</li>
    <li>Редактировать</li>
    <li onClick={() => props.delete(props.id, props.type, props.data)}>Удалить</li>
  </div>
)
 
export default Dropdown;