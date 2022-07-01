import styled from 'styled-components'

const InputLabel = styled.span`
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 6px;
    
`

const InputContainer = styled.div`
     padding: 16px;
     align-items: left;
     display: flex;
     flex-direction: column;
     justify-content: left;
`
const InputDiv = styled.input`
    display: inline-flex;
    padding: 10px 16px; 
    width: 304px;
    font-size: 14px;
    line-height: 20px;
    justify-content: center;
    color: #667085;
    background: #FFFFFF ;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 2px solid #D0D5DD;
    border-radius: 8px ;
    &:focus {
        outline: none;
        border: 2px solid #6172F3;
    }
`

const InputHint = styled.span`
    color: #667085;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 4px;
    font-size: 14px;
    line-height: 20px;
`

export const InputLayout = Object.assign({},{
    InputLabel,
    InputContainer,
    InputDiv,
    InputHint
})