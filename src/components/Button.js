import { useContext } from 'react'

import { ThemeContext } from '../contexts/Theme'
import Text from './Text'

const Button = props => {
  const { theme } = useContext(ThemeContext)

  return (
    <button style={{ background: theme === "dark" ? "darkblue" : "beige" }}>
      <Text>{props.children}</Text>
    </button>
  )
}

export default Button
