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
        isInputOpen: false
      };
      this.toggleContainer = React.createRef();
      this.dropdown = React.createRef()
      this.input = React.createRef()
  
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }
  
    componentDidMount() {
      window.addEventListener('mousedown', this.onClickOutsideHandler);
    }
  
    componentWillUnmount() {
      window.removeEventListener('mousedown', this.onClickOutsideHandler);
    }
  
    onClickHandler() {
      this.setState(currentState => ({
        isDropdownOpen: !currentState.isDropdownOpen
      }));
    }
  
    onClickOutsideHandler(event) {
      if ((this.state.isDropdownOpen && !this.toggleContainer.current.contains(event.target))) {
        this.setState({ isDropdownOpen: false });
      }
      // multiple pluses
      if ((this.state.isInputOpen && event.target.tagName !== 'IMG' && this.input.current !== event.target)) {
        this.props.actions.addItem(this.props.item.id, this.props.item.type, this.input.current.value)
        this.setState({ isInputOpen: false });
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
  
    render() {
      return (
        <>
          <div className="contact" key={this.props.item.id}>
            <div className="type">{this.props.item.type}:</div>
            <div ref={this.toggleContainer}>
              {
                true
                  ? <>
                      <img src={plus} onClick={this.onClickPlus}/>
                      <span onClick={this.onClickHandler}>{this.props.item.data}</span>
                    </>
                  : <Input 
                      handleChange={()=>{this.handleInputChange(this.state.data)}}  
                      value={this.props.item.data}
                    />
              }
              {this.state.isDropdownOpen ? <Dropdown copy={this.copy} ref={this.dropdown} /> : null}
            </div>
          </div>
          {
            this.state.isInputOpen
            ? <div className="contact">
                <div className="type">{this.props.item.type}:</div>
                <Input ref={this.input} />
              </div>
            : null
          }
        </>
      );
    }
  }

  export default Contact