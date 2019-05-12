import React from 'react'
import './Dropdown.css'

const Dropdown = React.forwardRef((props, ref) => (
  <div className="dropdown-content" ref={ref}>
    <li onClick={props.copy}>Копировать</li>
    <li>Редактировать</li>
    <li>Удалить</li>
  </div>
))
 
export default Dropdown;