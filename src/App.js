import { useState } from 'react'

import { ThemeContextProvider } from './contexts/Theme'
import Nav from './components/Nav'

const App = () => {
  return (
    <ThemeContextProvider> 
      <Nav />
    </ThemeContextProvider>
  )
}

export default App
