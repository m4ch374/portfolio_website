import { Dispatch, SetStateAction, createContext } from "react"

const DarkTheme = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([
  false,
  () => {},
])

export default DarkTheme
