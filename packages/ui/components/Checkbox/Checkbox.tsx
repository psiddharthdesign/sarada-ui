import { CheckboxLayout } from "./Checkbox.styles"

export const Checkbox = () => {
    return <CheckboxLayout.CheckboxContainer>
            <CheckboxLayout.Checkbox1 type="checkbox" />
            <CheckboxLayout.CheckboxTitle>Keep me Signed In</CheckboxLayout.CheckboxTitle>
            
        </CheckboxLayout.CheckboxContainer>
}

