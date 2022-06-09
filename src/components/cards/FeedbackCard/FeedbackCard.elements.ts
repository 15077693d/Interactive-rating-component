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

export const ScoreButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StarImg = styled.img`
  width: 16px;
  height: 16px;
`

export const StarImgWrapper = styled.div`
  ${({ theme: { borderRadius, color } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.darkBlue};
    border-radius: ${borderRadius.circle};
    width: 48px;
    height: 48px;
  `}
`

export const SubmitButton = styled.button`
  ${({ theme: { color, borderRadius } }) => css`
    cursor: pointer;
    border-radius: ${borderRadius.primary};
    padding: 15px 0px;
    width: 100%;
    text-transform: uppercase;
    background-color: ${color.orange};
    color: ${color.pureWhite};
    letter-spacing: 2px;
    :disabled {
      cursor: default;
      opacity: 0.5;
    }
    :hover:enabled {
      background-color: ${color.pureWhite};
      color: ${color.orange};
    }
    :active:enabled {
      opacity: 0.8;
    }
  `}
`
