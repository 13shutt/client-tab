import React, { Component } from 'react'

import Dropdown from 'components/Dropdown'
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

    this.toggleContainerRef = React.createRef()
    this.dropdownRef = React.createRef()
    this.inputRef = React.createRef()
    this.editInputRef = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.onClickOutsideHandler);
  }

  onClickHandler = () => {
    this.setState(currentState => ({
      isDropdownOpen: !currentState.isDropdownOpen
    }));
  }

  onClickOutsideHandler = event => {
    if ((this.state.isDropdownOpen && !this.toggleContainerRef.current.contains(event.target))) {
      this.setState({ isDropdownOpen: false });
    }
    // multiple pluses
    if ((this.state.isInputOpen && event.target.tagName !== 'IMG' && this.inputRef.current !== event.target)) {
      this.props.actions.addItem(this.props.item.id, this.props.item.type, this.props.item.data, this.inputRef.current.value)
      this.setState({ isInputOpen: false });
    }
    if (!this.state.isEditableClose && this.editInputRef.current !== event.target) {
      this.props.actions.editItem(this.props.item.id, this.props.item.type, this.props.item.data, this.editInputRef.current.value)
      this.setState({isEditableClose: true})
    }
  }

  handleInputChange(val) {
      return val;
  }

  onClickPlus = () => {
    this.setState(currentState => ({
      isInputOpen: !currentState.isInputOpen
    }));
  }

  copy = () => {
    navigator.clipboard.writeText(this.props.item.data)
    this.onClickHandler()
  }

  showEditInput = () => {
    this.setState({isEditableClose: false}, this.onClickHandler())
  }

  render() {
    const { item, actions } = this.props
    return (
      <>
        <div className="contact" key={item.id}>
          <div className="type">{item.type}:</div>
          <div ref={this.toggleContainerRef}>
            {this.state.isEditableClose
              ? <>
                  <img src={plus} onClick={this.onClickPlus}/>
                  <span onClick={this.onClickHandler}>{item.data}</span>
                </>
              : <Input 
                  handleChange={()=>{this.handleInputChange(this.state.data)}}  
                  value={item.data}
                  ref={this.editInputRef}
                />
            }
            {this.state.isDropdownOpen && 
                <Dropdown 
                  copy={this.copy} 
                  ref={this.dropdownRef}
                  remove={actions.deleteItem}
                  id={item.id} 
                  type={item.type}
                  data={item.data}
                  edit={this.showEditInput}
                />
            }
          </div>
        </div>
        {this.state.isInputOpen && 
            <div className="contact">
              <div className="type">{item.type}:</div>
              <Input ref={this.inputRef} />
            </div>
        }
      </>
    );
  }
}

export default Contact