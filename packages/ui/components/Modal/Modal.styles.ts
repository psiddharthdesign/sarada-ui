import styled from 'styled-components'

const ModalTitle = styled.h2`
    font-family: 'Satoshi Variable';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    margin: 0px;
    letter-spacing: -0.8px;
    color: black;
`
const ModalParagraph = styled.p`
    color: black;
    font-family: 'Satoshi Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin:0;
    /* margin-top: 8px; */
`

const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

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
    font-family: 'Satoshi Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
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
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
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
     padding: 24px;
    /* flex-direction: column; */
    background: white;
    width: 504px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(208,213,221);
    border-radius: 8px;
    height: auto;
    overflow: hidden;
`

export const ModalLayout = Object.assign({},{
    ModalTitle,
    ModalContainer,
    ModalParagraph,
    ModalDiv,
    SmBaseButton,
    SmOutlineButton,
    ButtonContainer
})