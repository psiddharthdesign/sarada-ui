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
    font-family: 'Satoshi Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
    /* identical to box height, or 18px */

    letter-spacing: -0.5px;
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
    font-family: 'Satoshi Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
    letter-spacing: -0.5px;
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

