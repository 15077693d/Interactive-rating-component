import styled, { css } from 'styled-components'
type BaseImageProps = {
  width: string
  height: string
}
export const BaseImage = styled.img<BaseImageProps>`
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
`

export const PaddingWrapper = styled.div`
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
