import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithWrapper } from '../../../utils'
import RatingCard from './RatingCard'
describe('RatingCard', () => {
  describe('Layout', () => {
    it('There are one heading', () => {
      renderWithWrapper(<RatingCard />)
      const header = screen.getByRole('heading', {
        name: 'How did we do?',
      })
      expect(header).toBeInTheDocument()
    })
    it('There are five score button', () => {
      renderWithWrapper(<RatingCard />)
      const buttons = screen.getAllByRole('button', { name: /1|2|3|4|5/ })
      expect(buttons.length).toEqual(5)
    })
    it('There are one submit button', () => {
      renderWithWrapper(<RatingCard />)
      const button = screen.getByRole('button', { name: /submit/i })
      expect(button).toBeInTheDocument()
    })
  })
  describe('interaction', () => {
    describe('Score buttons', () => {
      it('disable submit button initalily', () => {
        renderWithWrapper(<RatingCard />)
        const buttun = screen.getByRole('button', { name: /submit/i })
        expect(buttun).toBeDisabled()
      })
      it('Enable submit button after click score button', () => {
        renderWithWrapper(<RatingCard />)
        const score5Buttun = screen.getByRole('button', { name: /5/ })
        const submitButtun = screen.getByRole('button', { name: /submit/i })
        userEvent.click(score5Buttun)
        expect(submitButtun).toBeEnabled()
      })
    })
  })
})
