import React, { Component } from 'react'
import './Dropdown.css'

class Dropdown extends Component {
  render() {
    const { copy, edit, remove, id, type, data, hide } = this.props 
    return (
      <div className="dropdown-content" onClick={hide}>
        <li onClick={copy}>Копировать</li>
        <li onClick={edit}>Редактировать</li>
        <li onClick={() => remove(id, type, data)}>Удалить</li>
      </div>
    )
  }
}
 
export default Dropdown;