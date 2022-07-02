import { InputLayout } from "./Input.styles"

export const Input = () => {
    return <InputLayout.InputContainer>
            <InputLayout.InputLabel>Name</InputLayout.InputLabel>
            <InputLayout.InputDiv type="text" placeholder="Placeholder Text"/>
            <InputLayout.InputHint>This is the hint</InputLayout.InputHint>
        </InputLayout.InputContainer>
}

