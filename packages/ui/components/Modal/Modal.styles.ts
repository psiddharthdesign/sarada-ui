import styled from 'styled-components'

const ModalTitle = styled.h2`
    color: black;
    margin:0;
    margin-bottom: 16px;
`

const ButtonContainer = styled.div`
    padding: 24px 0px 0px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const SmBaseButton = styled.button`
    outline:none;
    background: #3538CD;
    display: inline;
    color: white;
    border: none;
    font-size: 16px;
    line-height: 24px;
    padding: 12px 20px;
    border-radius: 8px;
    transition: all 0.2s ease;
    margin-right: 16px;
    &:hover {
        cursor: pointer;
        background:#444ce7;
    }
`

const SmOutlineButton = styled.button`
    border: 1px solid #3538CD;
    background:#ffffff;
    color: black;
    font-size: 16px;
    line-height: 24px;
    padding: 12px 20px;
    border-radius: 8px;
    transition: all 0.2s ease;
    &:hover {
        cursor: pointer;
        background:#C7D7FE;
    }
    &:focus {
        border: 2px solid #3538CD;
    }
`

const ModalContainer = styled.div`
     /* display: flex; */
     padding: 16px;
    /* flex-direction: column; */
    background: white;
    width: 504px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(208,213,221);
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: auto;
    overflow: hidden;
`
const ModalText = styled.p`
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    line-height: 20px;
    margin:0;
    /* margin-top: 8px; */
`

export const ModalLayout = Object.assign({},{
    ModalTitle,
    ModalContainer,
    ModalText,
    SmBaseButton,
    SmOutlineButton,
    ButtonContainer
})