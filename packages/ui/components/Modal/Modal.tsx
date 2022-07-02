import { ModalLayout } from "./Modal.styles"

export const Modal = () => {
    return <ModalLayout.ModalContainer>
            <ModalLayout.ModalDiv>
                <ModalLayout.ModalTitle>Share with People</ModalLayout.ModalTitle>
                <ModalLayout.ModalParagraph>Malesuada amet auctor sollicitudin ipsum pellentesque nulla enim nisi, tincidunt. Eleifend in tincidunt </ModalLayout.ModalParagraph>
            </ModalLayout.ModalDiv>
            <ModalLayout.ButtonContainer>
                <ModalLayout.SmBaseButton>Apply</ModalLayout.SmBaseButton>
                <ModalLayout.SmOutlineButton>Cancel</ModalLayout.SmOutlineButton> 
            </ModalLayout.ButtonContainer>
        </ModalLayout.ModalContainer>
}

