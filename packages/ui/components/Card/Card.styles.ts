import styled from 'styled-components'



const Cards = styled.div`
    display: grid;
    background-clip: border-box;
    grid-template-columns: auto auto auto;
    gap: 16px;
    justify-content: center;
    padding-left: 0px;
    padding-right: 0px;
    margin: 0 64px;
`

const CardContainer = styled.div`
    /* display: flex; */
    padding: 16px;
    /* flex-direction: column; */
    background: white;
    min-width: 0;
    width: auto;
    border: 1px solid rgb(208,213,221);
    border-radius: 8px;
    height: auto;
    overflow: hidden;
`

const CardCategory = styled.h3`
    text-transform: uppercase;
    font-family: 'Satoshi Variable';
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 10px;
/* identical to box height, or 100% */

letter-spacing: 0.56px;

/* Indigo/indigo.70 */

color: #3538CD;

    margin-bottom: 8px;
`

const CardTitle = styled.h2`
    font-family: 'Satoshi Variable';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: -0.6px;
    margin: 0px 0px 8px 0px;
`


const CardBody = styled.p`
    font-family: 'Satoshi Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
    letter-spacing: 0px;
    margin: 0px;
`
const CardImage = styled.div`
    background-image: url(https://images.unsplash.com/photo-1598331668826-20cecc596b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80);
    background-size: cover;
    height: 256px;
    margin-bottom: 16px;
    border-radius: 10px;
`

const AvatarImage = styled.img` 
    background-image: url(https://images.unsplash.com/photo-1598331668826-20cecc596b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80);
    border-radius: 50%;
    display: block;
    width: 32px;
    height: 32px;
    margin-right: 8px;
    
`
export const CardLayout = Object.assign({},{
    Cards,
    AvatarImage,
    CardTitle,
    CardContainer,
    CardImage,
    CardCategory,
    CardBody
})