import { motion, AnimatePresence, Variants } from "framer-motion"
import useDarkTheme from "hooks/DarkTheme.hooks"
import React from "react"

const FadeDevider: React.FC = () => {
  const { isLight } = useDarkTheme()

  const variants: Variants = {
    visible: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { type: "tween", duration: 1, delay: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { type: "tween", duration: 1, delay: 0.3 },
    },
  }

  return (
    <AnimatePresence>
      {isLight ? (
        <motion.div
          key="day"
          variants={variants}
          initial="visible"
          animate="enter"
          exit="exit"
          className="absolute z-50 mt-[-70px] h-[72px] w-full bg-gradient-to-b from-transparent to-[#b3734b] to-90%"
        />
      ) : (
        <motion.div
          key="night"
          variants={variants}
          initial="visible"
          animate="enter"
          exit="exit"
          className="absolute z-50 mt-[-70px] h-[72px] w-full bg-gradient-to-b from-transparent to-[#1c0522]"
        />
      )}
    </AnimatePresence>
  )
}

export default FadeDevider
