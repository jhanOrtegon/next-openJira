// 1. Import `createTheme`
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom values
export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      myColor: '#ff4ecd',
      error: 'red'
    },
    space: {},
    fonts: {}
  }
})