import { ModalLayout } from "./Modal.styles"

export const Modal = () => {
    return <ModalLayout.ModalContainer>
            <ModalLayout.ModalTitle>Share with People</ModalLayout.ModalTitle>
            <ModalLayout.ModalText>Malesuada amet auctor sollicitudin ipsum pellentesque nulla enim nisi, tincidunt. Eleifend in tincidunt </ModalLayout.ModalText>
            <ModalLayout.ButtonContainer>
                <ModalLayout.SmBaseButton>Apply</ModalLayout.SmBaseButton>
                <ModalLayout.SmOutlineButton>Cancel</ModalLayout.SmOutlineButton> 
            </ModalLayout.ButtonContainer>
        </ModalLayout.ModalContainer>
}

