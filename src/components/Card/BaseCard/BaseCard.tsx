import { memo, ReactNode } from 'react'
import Image from '../../Image/Image'
import { Container, Paragraph, Title } from './BaseCard.elements'

type BaseCardProps = {
  children: ReactNode
  alignItems?: 'normal' | 'stretch' | 'center'
}
export default function BaseCard({ children, alignItems }: BaseCardProps) {
  return <Container alignItems={alignItems}>{children}</Container>
}

BaseCard.Paragraph = memo(Paragraph)
BaseCard.Image = memo(Image)
BaseCard.Title = memo(Title)
