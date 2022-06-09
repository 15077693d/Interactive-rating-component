import { Container } from '..'
import { paymentImgSrc } from '../../../assets'
import { PaymentImg, ScoreBoard } from './ThankyouCard.element'

type ThankyouCardProps = {
  score: number
}
export default function ThankyouCard({ score }: ThankyouCardProps) {
  return (
    <Container alignItems='center'>
      <PaymentImg src={paymentImgSrc.default} />
      <ScoreBoard>You selected {score} out of 5</ScoreBoard>
      <h1>Thank you!</h1>
      <div style={{ textAlign: 'center' }}>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t
        hesitate to get in touch!
      </div>
    </Container>
  )
}
