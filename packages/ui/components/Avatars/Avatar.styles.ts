import styled from 'styled-components'

const AvatarFrame = styled.div` 
    
`


const Avatar1 = styled.img` 
    background-image: url("https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    border-radius: 50%;
    display: block;
    width: 32px;
    height: 32px;
    margin-right: 8px; 
`
    
export const AvatarSizes = Object.assign({},{
   Avatar1,
   AvatarFrame
})