import styled from 'styled-components'

// const PaginationTitle = styled.h3`
//     color: black;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// `

const PaginationContainer = styled.div`
    padding: 16px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;align-items: center;
/* padding: 0px; */
    gap: 166px;
    width: 768px;
`
const PaginationDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
`

const PaginationText = styled.p`
    font-family: 'Satoshi Variable';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 125%;
/* identical to box height, or 18px */
letter-spacing: -0.5px;

`

const PaginationNumberSelected = styled.p`
   padding: 8px;
   display: flex;
   flex-direction: column;
   background-color: #F2F4F7;
   width: 40px;
   height: 40px;
   color: black;
   font-family: 'Satoshi Variable';
font-style: normal;font-size: 16px;
    line-height: 24px;
   border-radius: 8px;
   text-align: center;
   justify-content: center;
`

const PaginationNumberUnSelected = styled.p`
   padding: 8px;
   display: flex;
   flex-direction: column;
   /* background-color: #F2F4F7; */
   width: 40px;
   height: 40px;
   color: black;
   font-family: 'Satoshi Variable';
font-style: normal;font-size: 16px;
    line-height: 24px;
   border-radius: 8px;
   text-align: center;
   justify-content: center;
`

export const PaginationLayout = Object.assign({},{
    // PaginationTitle,
    PaginationContainer,
    PaginationDiv,
    PaginationNumberSelected,
    PaginationNumberUnSelected,
    PaginationText
})