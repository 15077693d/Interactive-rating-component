import { BaseImage, PaddingWrapper } from './Image.elements'

type ImageProps = {
  padding?: boolean
  src: string
  width: string
  height: string
}
export default function Image({ padding = false, src, width, height }: ImageProps) {
  if (padding) {
    return (
      <PaddingWrapper>
        <BaseImage src={src} width={width} height={height} />
      </PaddingWrapper>
    )
  }
  return <BaseImage src={src} width={width} height={height} />
}
