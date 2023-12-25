import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useEffect,
} from "react"
import { motion } from "framer-motion"
import NavBarHighlightLink from "./NavBarHighlightLink"

type TMenuModal = {
  setVisible: Dispatch<SetStateAction<boolean>>
  triggerButton: MutableRefObject<HTMLButtonElement>
}

const MenuModal: React.FC<TMenuModal> = ({ setVisible, triggerButton }) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (
        !triggerButton.current.contains(e.target as Node) &&
        e.target !== e.currentTarget
      )
        setVisible(false)
    },
    [setVisible, triggerButton],
  )

  useEffect(() => {
    document.addEventListener("click", handleClick)

    return () => document.removeEventListener("click", handleClick)
  }, [handleClick])

  return (
    <motion.ul
      onClick={e => e.stopPropagation()}
      className="absolute left-[5%] top-20 block min-w-[200px] origin-top-left rounded-xl border border-zinc-600/20 bg-black/20 shadow-2xl backdrop-blur-md md:hidden"
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: { duration: 0.5, bounce: 0, type: "spring" },
      }}
      exit={{
        scale: 0,
        transition: { duration: 0.5, bounce: 0, type: "spring" },
      }}
    >
      <li className="w-full px-2 py-4 font-thin">
        <NavBarHighlightLink
          className="inline-block w-full"
          href="#about"
          onClick={() => setVisible(false)}
        >
          About
        </NavBarHighlightLink>
        <NavBarHighlightLink className="inline-block w-full">
          Experience
        </NavBarHighlightLink>
        <NavBarHighlightLink className="inline-block w-full">
          Projects
        </NavBarHighlightLink>
      </li>
    </motion.ul>
  )
}

export default MenuModal
