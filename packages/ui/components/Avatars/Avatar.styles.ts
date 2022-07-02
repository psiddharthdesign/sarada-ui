import styled from 'styled-components'

const AvatarFrame = styled.div` 
    padding: 16px;
    display: inline-grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 16px;

`

const SmAvatar1 = styled.img` 
    background-image: url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80");
    background-size: cover;
    border-radius: 50%;
    display: block;
    width: 48px;
    height: 48px;
    margin-right:-24px; 
    z-index: 0;
    border: 1px solid black;
    &:hover {
        cursor: pointer;
        transition: 0.3s ease;
        transform: translateY(-8px);   
    }
`

const SmAvatar2 = styled.img` 
    background-image: url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
    background-size: cover;
    border-radius: 50%;
    display: block;
    width: 48px;
    height: 48px;
    margin-right:-24px; 
    z-index: 1;
    border: 1px solid black;
    &:hover {
        cursor: pointer;
        transition: 0.3s ease;
        transform: translateY(-8px);   
    }
`

const SmAvatar3 = styled.img` 
    background-image: url("https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80");
    background-size: cover;
    border-radius: 50%;
    display: block;
    width: 48px;
    height: 48px;
    margin-right: -24px; 
    z-index: 3;
    border: 1px solid black;
    &:hover {
        cursor: pointer;
        transition: 0.3s ease;
        transform: translateY(-8px);   
    }
`

const SmAvatar4 = styled.img` 
    background-image: url("https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80");
    background-size: cover;
    border-radius: 50%;
    display: block;
    width: 48px;
    height: 48px;
    margin-right: -24px; 
    border: 1px solid black;
    z-index: 4;
    &:hover {
        cursor: pointer;
        transition: 0.3s ease;
        transform: translateY(-8px);   
    }
`

const SmAvatar5 = styled.img` 
    background-image: url("https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80");
    background-size: cover;
    border-radius: 50%;
    display: block;
    width: 48px;
    height: 48px;
    margin-right: -24px; 
    border: 1px solid black;
    z-index: 4;
    &:hover {
        cursor: pointer;
        transition: 0.3s ease;
        transform: translateY(-8px);   
    }
`

export const AvatarSizes = Object.assign({},{
    SmAvatar1,
    SmAvatar2,
    SmAvatar3,
    SmAvatar4,
    SmAvatar5,
    AvatarFrame
})

