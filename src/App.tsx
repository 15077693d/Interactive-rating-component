import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './assets/themes'
import MainPage from './pages/MainPage/MainPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  )
}

export default App
