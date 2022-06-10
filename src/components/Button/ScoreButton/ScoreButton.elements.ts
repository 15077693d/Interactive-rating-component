import styled, { css } from 'styled-components'

interface ScoreButtonProps {
  active?: boolean
}
export const ScoreButton = styled.button<ScoreButtonProps>`
  ${({ active, theme: { borderRadius, color, font, mediaQuery } }) => css`
    cursor: pointer;
    font: ${font.rating};
    :hover {
      color: ${color.pureWhite};
      background-color: ${active ? color.orange : color.mediumGrey};
    }
    color: ${active ? color.pureWhite : color.mediumGrey};
    background-color: ${active ? color.orange : color.darkBlue};
    border-radius: ${borderRadius.circle};
    height: 51px;
    width: 51px;
    @media (max-width: ${mediaQuery.maxWidth}) {
      height: 42px;
      width: 42px;
    }
  `}
`
