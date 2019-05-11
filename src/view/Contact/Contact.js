import React, { Component } from 'react'

import Dropdown from 'components/Dropdown'
import { Input } from 'components/TabClient'
import plus from 'assets/plus-1.svg'
import './Contact.css'

class Contact extends Component {
  constructor(props) {
      super(props);
  
      this.state = { isOpen: false };
      this.toggleContainer = React.createRef();
  
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }
  
    componentDidMount() {
      window.addEventListener('click', this.onClickOutsideHandler);
    }
  
    componentWillUnmount() {
      window.removeEventListener('click', this.onClickOutsideHandler);
    }
  
    onClickHandler() {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen
      }));
    }
  
    onClickOutsideHandler(event) {
      if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
        this.setState({ isOpen: false });
      }
    }
  
    render() {
      return (
        <div className="contact" key={this.props.item.id}>
          <div className="type">{this.props.item.type}:</div>
          <div ref={this.toggleContainer}>
            {
              true
                ? <>
                    <img src={plus}/>
                    <span onClick={this.onClickHandler}>{this.props.item.data}</span>
                  </>
                : <Input />
            }
            {this.state.isOpen ? <Dropdown /> : null}
          </div>
        </div>
      );
    }
  }

  export default Contact