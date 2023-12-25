import React from "react"
import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"

type TBackdrop = {
  children?: string | JSX.Element | JSX.Element[]
  backdropClassName: string
}

const Backdrop: React.FC<TBackdrop> = ({ children, backdropClassName }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={twMerge(
        "fixed left-0 top-0 z-[60] h-screen w-full backdrop-blur-sm",
        backdropClassName,
      )}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
