import { useContext } from "react"

import { ThemeContext } from "../contexts/Theme"

const ThemeChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  
  const handleButtonClick = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  console.log(theme)

  return (
    <button onClick={handleButtonClick}>
      Click here to switch theme
    </button>
  )
}

export default ThemeChanger