import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: ${theme.color.veryDarkBlue};
    font-family: 'Overpass', sans-serif;
    font: ${theme.font.body};
    h1 {
      font: ${theme.font.headingLarge};
    }
  }
`}

`

export const theme: DefaultTheme = {
  borderRadius: {
    circle: '50px',
    primary: '22.5px',
  },
  font: {
    headingLarge: '700 28px Overpass;',
    headingMedium: '700 15px Overpass;',
    rating: '700 16px/24px Overpass;',
    body: '400 15px/24px Overpass;',
  },
  color: {
    darkBlue: '#262E38',
    lightGrey: '#969FAD',
    mediumGrey: '#7C8798',
    orange: '#FC7614',
    pureWhite: '#FFFFFF',
    veryDarkBlue: '#131518',
    gradientBlack: 'radial-gradient(circle, rgba(35,42,52,1) 0%, rgba(24,30,39,1) 100%);',
  },
  mediaQuery: {
    maxWidth: '500px',
  },
}
