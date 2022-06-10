import styled, { css } from 'styled-components'

export const ScoreBoard = styled.div`
  ${({ theme: { color, borderRadius } }) =>
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${color.orange};
      background-color: ${color.darkBlue};
      width: 193px;
      height: 32px;
      border-radius: ${borderRadius.primary};
    `}
`
