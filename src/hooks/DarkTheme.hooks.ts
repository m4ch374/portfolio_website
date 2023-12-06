import { useContext } from "react"
import DarkTheme from "utils/DarkTheme"

const useDarkTheme = () => {
  const [isLight, setIsLight] = useContext(DarkTheme)

  return { isLight, setIsLight }
}

export default useDarkTheme
