import styled from 'styled-components'

const InputLabel = styled.span`
    color: black;
    font-family: 'Satoshi Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
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
    padding: 13px 16px; 
    width: 304px;
    justify-content: center;
    color: #667085;
    background: #FFFFFF ;
    font-family: 'Satoshi Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
    letter-spacing: -0.5px;
    
    border: 2px solid #D0D5DD;
    border-radius: 8px ;
    &:focus {
        outline: none;
        border: 2px solid #6172F3;
    }
`

const InputHint = styled.span`
    color: #667085;
    margin-top: 4px;
    font-family: 'Satoshi Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
    letter-spacing: -0.5px;
`

export const InputLayout = Object.assign({},{
    InputLabel,
    InputContainer,
    InputDiv,
    InputHint
})