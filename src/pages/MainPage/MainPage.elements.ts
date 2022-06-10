import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: ${theme.color.veryDarkBlue};
  `}
`
export { Container }
