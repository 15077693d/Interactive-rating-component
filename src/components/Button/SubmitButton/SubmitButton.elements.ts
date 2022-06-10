import styled, { css } from 'styled-components'

export const SubmitButton = styled.button`
  ${({ theme: { color, borderRadius } }) => {
    return css`
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
    `
  }}
`
