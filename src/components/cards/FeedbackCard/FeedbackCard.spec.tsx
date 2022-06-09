import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithWrapper } from '../../../utils'
import FeedbackCard from './FeedbackCard'
describe('FeedbackCard', () => {
  describe('Layout', () => {
    it('There are one heading', () => {
      renderWithWrapper(<FeedbackCard setSubmitted={jest.fn()} score={null} setScore={jest.fn()} />)
      const header = screen.getByRole('heading', {
        name: 'How did we do?',
      })
      expect(header).toBeInTheDocument()
    })
    it('There are five score button', () => {
      renderWithWrapper(<FeedbackCard setSubmitted={jest.fn()} score={null} setScore={jest.fn()} />)
      const buttons = screen.getAllByRole('button', { name: /1|2|3|4|5/ })
      expect(buttons.length).toEqual(5)
    })
    it('There are one submit button', () => {
      renderWithWrapper(<FeedbackCard setSubmitted={jest.fn()} score={null} setScore={jest.fn()} />)
      const button = screen.getByRole('button', { name: /submit/i })
      expect(button).toBeInTheDocument()
    })
  })
  describe('interaction', () => {
    describe('Score buttons', () => {
      it('disable submit button initalily', () => {
        renderWithWrapper(
          <FeedbackCard setSubmitted={jest.fn()} score={null} setScore={jest.fn()} />,
        )
        const buttun = screen.getByRole('button', { name: /submit/i })
        expect(buttun).toBeDisabled()
      })
      it('Enable submit button after click score button', () => {
        renderWithWrapper(<FeedbackCard setSubmitted={jest.fn()} score={5} setScore={jest.fn()} />)
        const score5Buttun = screen.getByRole('button', { name: /5/ })
        const submitButtun = screen.getByRole('button', { name: /submit/i })
        userEvent.click(score5Buttun)
        expect(submitButtun).toBeEnabled()
      })
    })
  })
})
