import React from 'react'
import styled from 'styled-components'

import { Input } from 'components/TabClient'
import Dropdown from 'components/Dropdown'
import plus from 'assets/plus-1.svg'

const StyledDiv =  styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  .type {
    width: 80px;
  }
  img {
    height: 17px;
    width: 17px;
    position: relative;
    top: 3px;
    right: 4px;
  }
  span {
    color: black !important;
  }
  &:hover {
    color: #2196f3 !important;
    cursor: pointer;
    transition: all 0.1s ease !important;
  }
`

export const Contact = ( { item:{ id, type, data } } ) => (
  <StyledDiv key={id}>
    <div className="type">{type}:</div>
    <div>
      {
        true
          ? <>
              <img src={plus}/>
              <span>{data}</span>
            </>
          : <Input />
      }
      <Dropdown />
    </div>
  </StyledDiv>
)