import { createContext, useContext, useState } from 'react'
import { paymentImgSrc, starImgSrc } from '../../../assets'
import { ButtonGroup } from '../../Button/ButtonGroup/ButtonGroup.elements'
import { ScoreButton } from '../../Button/ScoreButton/ScoreButton.elements'
import { SubmitButton } from '../../Button/SubmitButton/SubmitButton.elements'
import Image from '../../Image/Image'
import BaseCard from '../BaseCard/BaseCard'
import { ScoreBoard } from './RatingCard.elements'

type RatingFormType = {
  submitted: boolean
  selectedScore: number | null
}

const initalRatingForm = {
  submitted: false,
  selectedScore: null,
}

type ContextReturnType = RatingFormType & {
  submitted: boolean
  selectedScore: number | null
  setRatingForm: React.Dispatch<React.SetStateAction<RatingFormType>>
}

const contextInitalValue: ContextReturnType = {
  ...initalRatingForm,
  setRatingForm: () => {
    return
  },
}
const RatingCardContext = createContext<ContextReturnType>(contextInitalValue)

const useRatingCardContext = () => useContext(RatingCardContext)

function FeedbackCard() {
  const { selectedScore, setRatingForm } = useRatingCardContext()
  return (
    <BaseCard>
      <Image src={starImgSrc.default} width={'16px'} height={'16px'} padding />
      <BaseCard.Title>How did we do?</BaseCard.Title>
      <BaseCard.Paragraph>
        Please let us know how we did with your support request. All feedback is appreciated to help
        us improve our offering!
      </BaseCard.Paragraph>
      <ButtonGroup>
        {[1, 2, 3, 4, 5].map((score) => (
          <ScoreButton
            onClick={() => {
              console.log(123)
              setRatingForm((prev) => ({
                ...prev,
                selectedScore: score,
              }))
            }}
            active={selectedScore === score}
            key={`score_${score}`}
          >
            {score}
          </ScoreButton>
        ))}
      </ButtonGroup>
      <SubmitButton
        onClick={() =>
          setRatingForm((prev) => ({
            ...prev,
            submitted: true,
          }))
        }
        disabled={selectedScore === null}
      >
        submit
      </SubmitButton>
    </BaseCard>
  )
}

function ThankyouCard() {
  const { selectedScore } = useRatingCardContext()
  return (
    <BaseCard alignItems='center'>
      <Image src={paymentImgSrc.default} width={'162px'} height={'108px'} />
      <BaseCard.Title>Thank you!</BaseCard.Title>
      <BaseCard.Paragraph textAlign={'center'}>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t
        hesitate to get in touch!
      </BaseCard.Paragraph>
      <ScoreBoard>You selected {selectedScore} out of 5</ScoreBoard>
    </BaseCard>
  )
}

export default function RatingCard() {
  const [ratingForm, setRatingForm] = useState<RatingFormType>(initalRatingForm)
  return (
    <RatingCardContext.Provider value={{ ...ratingForm, setRatingForm }}>
      {ratingForm.submitted ? <ThankyouCard /> : <FeedbackCard />}
    </RatingCardContext.Provider>
  )
}
