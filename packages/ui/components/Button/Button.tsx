import { ButtonLayout } from "./Button.styles";

export const Button = () => {
  return <ButtonLayout.ButtonContainer>
            <ButtonLayout.SmBaseButton>Button Small </ButtonLayout.SmBaseButton>
            <ButtonLayout.SmOutlineButton>Button Outline</ButtonLayout.SmOutlineButton> 
            {/* <ButtonLayout.SmBaseIconLeftButton>Button Outline</ButtonLayout.SmBaseIconLeftButton>  */}
        </ButtonLayout.ButtonContainer>;
};
