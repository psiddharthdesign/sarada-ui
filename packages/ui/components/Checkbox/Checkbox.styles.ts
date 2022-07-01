import styled from 'styled-components'

const CheckboxTitle = styled.h3`
    color: black;
`

const CheckboxContainer = styled.div`
    display: inline-block;
  width: 16px;
  height: 16px;

  border-radius: 3px;
  transition: all 150ms;
`
const CheckboxText = styled.p`
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

export const CheckboxLayout = Object.assign({},{
    CheckboxTitle,
    CheckboxContainer,
    CheckboxText
})