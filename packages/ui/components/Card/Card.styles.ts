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
    color: #3538CD;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 0px;
    margin-bottom: 8px;
`

const CardTitle = styled.h2`
    color: black;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 27px;
    letter-spacing: -0.6px;
    margin-top: 0px;
    margin-bottom: 0px;
`


const CardBody = styled.p`
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
const CardImage = styled.div`
    background-image: url(https://images.unsplash.com/photo-1598331668826-20cecc596b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80);
    background-size: cover;
    height: 256px;
    margin-bottom: 16px;
    border-radius: 10px;
`
const CardAvatar = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-column-gap: 8px;
`
const AvatarText = styled.div`

`

const AvatarName = styled.p`

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
    AvatarText,
    AvatarImage,
    AvatarName,
    CardAvatar,
    CardTitle,
    CardContainer,
    CardImage,
    CardCategory,
    CardBody
})