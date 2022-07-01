import styled from 'styled-components'

const TableTitle = styled.h3`
    color: black;
`

const TableContainer = styled.div`
     /* display: flex; */
     padding: 16px;
    /* flex-direction: column; */
    background: white;
    min-width: 0;
    width: 504px;
    align-items: center;
    border: 1px solid rgb(208,213,221);
    border-radius: 8px;
    height: auto;
    overflow: hidden;
`
const TableText = styled.p`
    display: flex;
    flex-direction:column;
    flex: 1 1 auto;
    min-height: 1px;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    line-height: 125%;
    margin-top: 8px;
`

export const TableLayout = Object.assign({},{
    TableTitle,
    TableContainer,
    TableText
})