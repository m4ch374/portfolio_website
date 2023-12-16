import LinkedIn from "assets/Icons/LinkedIn"
import React, { useRef, useState } from "react"
import NavBarHighlightLink from "./NavBarHighlightLink"
import Github from "assets/Icons/Github"
import Burger from "assets/Icons/Burger"
import MenuModal from "./MenuModal"
import { motion, AnimatePresence } from "framer-motion"

const NavBar: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null!)
  const [showModal, setShowModal] = useState(false)

  return (
    <nav className="fixed z-50 my-4 flex h-16 w-full items-center justify-center">
      <div className="flex h-full w-[90%] items-center justify-between rounded-xl border border-zinc-700/50 bg-black/10 p-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <motion.button
            className="block md:hidden"
            onClick={() => setShowModal(s => !s)}
            ref={buttonRef}
            whileTap={{ scale: 0.7 }}
          >
            <Burger />
          </motion.button>
          <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text font-logo text-2xl tracking-tighter text-transparent">
            Henry <span className="font-sans font-bold">Wan</span>
          </span>
        </div>

        <div className="m-4 ml-8 hidden w-[50%] rounded-md border border-zinc-400/20 bg-zinc-900/20 p-1 text-center font-thin md:flex">
          <NavBarHighlightLink className="inline-block w-full">
            About
          </NavBarHighlightLink>
          <NavBarHighlightLink className="inline-block w-full">
            Experience
          </NavBarHighlightLink>
          <NavBarHighlightLink className="inline-block w-full">
            Projects
          </NavBarHighlightLink>
        </div>

        <div className="flex p-2 text-violet-200">
          <NavBarHighlightLink
            href="https://www.linkedin.com/in/henry-wan-dev/"
            target="_blank"
          >
            <Github />
          </NavBarHighlightLink>
          <NavBarHighlightLink
            href="https://github.com/m4ch374"
            target="_blank"
          >
            <LinkedIn />
          </NavBarHighlightLink>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <MenuModal triggerButton={buttonRef} setVisible={setShowModal} />
        )}
      </AnimatePresence>
    </nav>
  )
}

export default NavBar
