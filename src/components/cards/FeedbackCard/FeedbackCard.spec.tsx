import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FeedbackCard from './FeedbackCard'

describe('FeedbackCard', () => {
  describe('Layout', () => {
    it('There are one heading', () => {
      render(<FeedbackCard />)
      const header = screen.getByRole('heading', {
        name: 'How did we do?',
      })
      expect(header).toBeInTheDocument()
    })
    it('There are one form', () => {
      render(<FeedbackCard />)
      const form = screen.getByRole('form')
      expect(form).toBeInTheDocument()
    })
    it('There are five score button', () => {
      render(<FeedbackCard />)
      const buttons = screen.getAllByRole('button', { description: /1|2|3|4|5/ })
      expect(buttons.length).toEqual(5)
    })
    it('There are one submit button', () => {
      render(<FeedbackCard />)
      const button = screen.getByRole('button', { description: /submit/i })
      expect(button).toBeInTheDocument()
    })
  })
  describe('interaction', () => {
    describe('Score buttons', () => {
      it('disable submit button initalily', () => {
        render(<FeedbackCard />)
        const buttun = screen.getByRole('button', { description: /submit/i })
        expect(buttun).toBeDisabled()
      })
      it('Enable submit button after click score button', () => {
        render(<FeedbackCard />)
        const score5Buttun = screen.getByRole('button', { description: /5/ })
        const submitButtun = screen.getByRole('button', { description: /submit/i })
        userEvent.click(score5Buttun)
        expect(submitButtun).toBeEnabled()
      })
    })
  })
})
