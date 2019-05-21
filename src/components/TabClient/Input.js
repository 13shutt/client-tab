import React from 'react'
import styled from 'styled-components'

const StyledDiv =  styled.div`
  input {
    padding: 0px 0px 1px 3px;
    border: none;
    font-size: 16px;
    border-bottom: 1px solid #2196f3;
    width: auto;
    color: #928a8a;
    font-family: 'Roboto', sans-serif;
    &:focus {
      border: none;
      outline-offset: 0px;
      outline: 0px;
      border-bottom: 1px solid #2196f3;
    }
  }
`

export const Input = React.forwardRef((props, ref) => (
  <StyledDiv>
    <input 
      onBlur={props.blur}
      autoFocus 
      onChange={props.handleChange}
      type="text"
      defaultValue={props.value}
      ref={ref}
    />
  </StyledDiv>
))