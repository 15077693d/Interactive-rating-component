/// <reference types="react-scripts" />

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      circle: string
      primary: string
    }
    font: {
      headingLarge: string
      headingMedium: string
      rating: string
      body: string
    }
    color: {
      darkBlue: string
      lightGrey: string
      mediumGrey: string
      orange: string
      pureWhite: string
      veryDarkBlue: string
      gradientBlack: string
    }
    mediaQuery: {
      maxWidth: string
    }
  }
}
