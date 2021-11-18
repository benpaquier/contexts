import { useContext } from "react"
import { ThemeContext } from "../contexts/Theme"

const Text = props => {
  const { theme } = useContext(ThemeContext)

  return (
    <p style={{ color: theme === "dark" ? "beige" : "darkblue" }}>
      {props.children}
    </p>
  )
}

export default Text
