import styled from 'styled-components'


const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    padding: 64px;
`

const CheckboxTitle = styled.h3`
    font-family: 'Satoshi Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
    letter-spacing: -0.5px;
`

const Checkbox1 = styled.input`
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    background-color: red;
`

export const CheckboxLayout = Object.assign({},{
    CheckboxTitle,
    CheckboxContainer,
    Checkbox1
})