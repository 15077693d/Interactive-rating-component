import styled, { css } from 'styled-components'

type ContainerProps = {
  alignItems?: 'normal' | 'stretch' | 'center'
}
export const Container = styled.div<ContainerProps>`
  ${({ theme: { color, mediaQuery }, alignItems = 'normal' }) => css`
    box-sizing: border-box;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: ${alignItems};
    width: 412px;
    height: 416px;
    border-radius: 30px;
    background: ${color.gradientBlack};
    color: ${color.lightGrey};
    h1 {
      margin: 0px;
      color: ${color.pureWhite};
    }
    button {
      transition: 0.3s;
      border: none;
      outline: none;
    }
    @media (max-width: ${mediaQuery.maxWidth}) {
      width: 327px;
      height: 400px;
      padding: 35px;
    }
  `}
`
