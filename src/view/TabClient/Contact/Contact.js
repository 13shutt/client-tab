import React, { Component } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

import Dropdown from 'modules/Dropdown'
import { Input } from 'components/TabClient'
import plus from 'assets/plus-1.svg'
import './Contact.css'

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isDropdownOpen: false,
      isInputOpen: false,
      isEditableClose: true
    }

    this.inputFieldRef = React.createRef()
    this.inputRef = React.createRef()
    this.editInputRef = React.createRef()
  }
  
  handleInputChange = val => val
  
  toggleInput = () => {
    this.setState(currentState => ({
      isInputOpen: !currentState.isInputOpen
    }));
  }

  hideInput = () => {
    if (this.inputRef.current.value !== "") {
      this.props.actions.addItem(this.props.item.id, this.props.item.type, this.props.item.data, this.inputRef.current.value)
      this.setState({ isInputOpen: false })
    } else {
      setTimeout(() => this.setState({ isInputOpen: false }), 150)
    }
  }
  
  toggleDropdown = () => this.setState(currentState => ({isDropdownOpen: !currentState.isDropdownOpen}))

  hideDropdown = () => setTimeout(() => this.setState({ isDropdownOpen: false }), 50)

  copy = () => navigator.clipboard.writeText(this.props.item.data)

  showEditInput = () => this.setState({isEditableClose: false})

  hideEditInput = () => {
    this.props.actions.editItem(this.props.item.id, this.props.item.type, this.props.item.data, this.editInputRef.current.value)
    this.setState({ isEditableClose: true })
  }

  render() {
    const { item, actions } = this.props
    return (
      <>
        <div className="contact" key={item.id}>
          <div className="type">{item.type}:</div>
          <div>
            {this.state.isEditableClose
              ? <>
                  <img src={plus} onClick={this.toggleInput} alt="" />
                  <span onClick={this.toggleDropdown}>{item.data}</span>
                </>
              : <OutsideClickHandler onOutsideClick={()=>this.hideEditInput()}>
                  <Input 
                    handleChange={()=>{this.handleInputChange(this.state.data)}}  
                    value={item.data}
                    ref={this.editInputRef}
                  />
                </OutsideClickHandler>
            }
            {this.state.isDropdownOpen && 
              <OutsideClickHandler onOutsideClick={()=>this.hideDropdown()}>
                <Dropdown 
                  copy={this.copy}
                  remove={actions.deleteItem}
                  id={item.id} 
                  type={item.type}
                  data={item.data}
                  edit={this.showEditInput}
                  hide={()=>this.hideDropdown()}
                />
              </OutsideClickHandler>
            }
          </div>
        </div>
        {this.state.isInputOpen && 
            <div className="contact" ref={this.inputFieldRef}>
              <div className="type">{item.type}:</div>
              <Input blur={() => this.hideInput()} ref={this.inputRef} />
            </div>
        }
      </>
    );
  }
}

export default Contact