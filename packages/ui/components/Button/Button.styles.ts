import styled from 'styled-components'

const ButtonContainer = styled.div`
    padding: 16px;
    display: inline-grid;
    grid-template-columns: auto auto;
    gap: 16px;
`

const SmBaseButton = styled.button`
    outline:none;
    background:#3538CD;
    display: inline-block;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease;
    &:hover {
        cursor: pointer;
        background:#444ce7;
    }
`

// const SmBaseIconLeftButton = styled.button`
//     outline:none;
//     background:#3538CD;
//     display: inline;
//     ;
//     color: white;
//     border: none;
//     padding: 8px 16px;
//     border-radius: 4px;
//     transition: all 0.2s ease;
//     &:hover {
//         cursor: pointer;
//         background:#444ce7;
//     }
// `

const SmOutlineButton = styled.button`
    border: 1px solid #3538CD;
    background:#ffffff;
    color: black;
    display: inline-block;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease;
    &:hover {
        cursor: pointer;
        background:#C7D7FE;
    }
    &:focus {
        border: 2px solid #3538CD;
    }
`


export const ButtonLayout = Object.assign({}, {
    SmOutlineButton,
    SmBaseButton,
    ButtonContainer,
    // SmBaseIconLeftButton
})

