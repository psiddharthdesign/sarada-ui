import styled from 'styled-components'

const TableTitle = styled.h3`
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const TableContainer = styled.div`
     /* display: flex; */
     padding: 16px;
     margin: 32px;
    /* flex-direction: column; */
    
`
const TableDiv = styled.table`
    border-collapse: separate !important;
    border-spacing: 0;
    border-top:1px solid #D0D5DD;
    border-left:1px solid #D0D5DD;
    border-bottom:1px solid #D0D5DD;
    border: 1px solid #D0D5DD;
    border-radius: 8px;
    
    margin: 16px 0px;
    line-height:24px;
    min-width: 500px;
    th{
        text-align: left;
        background-color: #F2F4F7;
        padding: 8px 16px;
        font-family: 'Satoshi Variable';
        font-style: bold;
        border-bottom: 1px solid #D0D5DD;
        border-right: 1px solid #D0D5DD
    }
    td{
        text-align: left;
        background-color: #ffffff;
        padding: 8px 16px;
        font-family: 'Satoshi Variable';
    font-style: normal;
        border-right: 1px solid #D0D5DD;
        border-bottom: 1px solid #D0D5DD;
    }


`   

export const TableLayout = Object.assign({},{
    TableTitle,
    TableContainer,
    TableDiv
})