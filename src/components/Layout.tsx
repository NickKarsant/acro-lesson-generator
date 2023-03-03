import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { theme } from '../styles/theme'
import Header from '../components/Header'


type Props = {}

export default function Layout({children}: Props) {
  return (<>
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
  </>
  )
}