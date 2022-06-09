import { Container } from '..'
import { starImgSrc } from '../../../assets'
import {
  ScoreButton,
  ScoreButtonsWrapper,
  StarImg,
  StarImgWrapper,
  SubmitButton,
} from './FeedbackCard.elements'

type FeedbackCardProps = {
  score: number | null
  setScore: React.Dispatch<React.SetStateAction<number | null>>
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}
export default function FeedbackCard({
  score: selectedScore,
  setScore,
  setSubmitted,
}: FeedbackCardProps) {
  const handleClickScore = (score: number) => {
    setScore(score)
  }
  return (
    <Container>
      <StarImgWrapper>
        <StarImg src={starImgSrc.default} alt={'star icon'} />
      </StarImgWrapper>
      <h1>How did we do?</h1>
      <div>
        Please let us know how we did with your support request. All feedback is appreciated to help
        us improve our offering!
      </div>
      <ScoreButtonsWrapper>
        {[1, 2, 3, 4, 5].map((score) => (
          <ScoreButton
            onClick={() => handleClickScore(score)}
            active={selectedScore === score}
            key={`score_${score}`}
          >
            {score}
          </ScoreButton>
        ))}
      </ScoreButtonsWrapper>
      <SubmitButton onClick={() => setSubmitted(true)} disabled={selectedScore === null}>
        submit
      </SubmitButton>
    </Container>
  )
}
