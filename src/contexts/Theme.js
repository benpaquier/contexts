import { createContext, useState } from "react"

const ThemeContext = createContext({})

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState("light")

  const value = {
    theme: theme,
    setTheme: setTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContextProvider,
  ThemeContext
}
