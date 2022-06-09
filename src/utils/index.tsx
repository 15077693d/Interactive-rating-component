import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../assets/themes'

const wrapper: React.FC<{
  children: React.ReactNode
}> = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export const renderWithWrapper = (children: JSX.Element) => {
  render(children, { wrapper })
}
