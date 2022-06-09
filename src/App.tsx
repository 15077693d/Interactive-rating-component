import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './assets/themes'
import FeedbackCard from './components/cards/FeedbackCard/FeedbackCard'
import ThankyouCard from './components/cards/ThankyouCard/ThankyouCard'

function App() {
  const [score, setScore] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState<boolean>(false)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {submitted && score !== null ? (
        <ThankyouCard score={score} />
      ) : (
        <FeedbackCard score={score} setScore={setScore} setSubmitted={setSubmitted} />
      )}
    </ThemeProvider>
  )
}

export default App
