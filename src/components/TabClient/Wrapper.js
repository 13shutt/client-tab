import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ main }) => 
    main && css`
      padding: 10px 20px 10px 20px;
      background-color: white;
      font-family: 'SF Display', sans-serif;
      width: 28%;
      border: 1px solid #ececec;
      border-radius: 5px;
      h3 {
        font-weight: 600;
        font-size: 18px;
      }
      p {
        text-align: justify;
        color: #928a8a;
        margin: 4px 0px;
        padding: 2px 2px 2px 0px;
      }
    `
  }

  ${({ column }) => 
    column && css`
      display: flex;
      flex-direction: column;
    `
  }

  ${({ row }) => 
    row && css`
      display: flex;
      flex-direction: row;
    `
  }

  ${({ list }) => 
    list && css`
      display: flex;
      flex-direction: column;
      margin: 4px 0px;
      * {
        margin-top: 2px;
        margin-bottom: 2px;
      }
    `
  }

  ${({ posts }) => 
    posts && css`
      
    `
  }
  
  
`