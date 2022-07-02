import styled from 'styled-components'

const ProgressBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 304px;
    padding: 16px;
`
const ProgressBarContainerMain = styled.div`
    width: 80%;
    height: 8px;
    border-radius: 2rem;
    position: relative;
    overflow: hidden;
    transition: all 0.5s;
    will-change: transform;
    background: #e4e7ec;
`

const ProgressBar = styled.div`
    position: absolute;
    right: 100px;
    top:0;
    bottom: 0;
    left: 0;
    height: 8px;
    border-radius: inherit;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items:center;
    color: white;
    font-family: sans-serif;
    transition: all 0.5s;
    will-change: transform;
    background: #3538CD;
`

export const ProgressBarLayout = Object.assign({},{
    ProgressBarContainer, 
    ProgressBarContainerMain,
    ProgressBar
})
