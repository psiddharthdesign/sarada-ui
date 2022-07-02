import styled from 'styled-components'

const ListTitle = styled.h3`
    color: black;
`

const ListContainer = styled.div`
     padding: 16px;
     align-items: center;
     justify-content: center;
`
const ListInputDiv = styled.div`
    display: inline-flex;
    padding: 4px 8px;
    justify-content: center;
    background: #E0EAFF ;
    border-radius: 8px ;
`

const ListInputText = styled.p`
    font-family: 'Satoshi Variable';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #6172F3;
    margin: 0px;
`

export const ListLayout = Object.assign({},{
    ListTitle,
    ListContainer,
    ListInputDiv,
    ListInputText
})