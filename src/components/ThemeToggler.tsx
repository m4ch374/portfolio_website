import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import useDarkTheme from "hooks/DarkTheme.hooks"
import Cloud from "assets/icons/Cloud"
import Sparkle from "assets/icons/Sparkle"

const ThemeToggler: React.FC = () => {
  const { isLight, setIsLight } = useDarkTheme()

  return (
    <div
      className={`flex h-[40px] w-[85px] cursor-pointer overflow-hidden rounded-full border-2 border-white/50 bg-sky-300 p-1 drop-shadow-md transition-colors dark:justify-end dark:bg-slate-700`}
      onClick={() => setIsLight(s => !s)}
    >
      <motion.div
        layout
        className={`relative aspect-square h-full rounded-full bg-amber-400 transition-colors duration-1000 dark:bg-white`}
      >
        <div
          className={`relative bottom-1 right-2 h-full w-full overflow-hidden rounded-full bg-transparent transition-colors dark:bg-slate-700`}
        />
      </motion.div>

      <AnimatePresence>
        {isLight ? (
          <motion.div
            key="day"
            initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
                delay: 0.2,
              },
            }}
            exit={{ opacity: 0, y: 45 }}
            className="absolute left-0 top-0"
          >
            <Cloud className="absolute left-5 top-4 h-5 w-5 text-white" />
            <Cloud className="absolute left-11 top-1 h-4 w-4 scale-x-[-1]" />
            <Cloud className="absolute left-16 top-5 h-3 w-3" />
          </motion.div>
        ) : (
          <motion.div
            key="night"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: "tween",
                ease: "backIn",
                duration: 0.3,
                delay: 0.2,
              },
            }}
            exit={{ opacity: 0, y: 45 }}
            className="absolute left-0 top-0 text-amber-300"
          >
            <Sparkle className="absolute left-2 top-1 h-3 w-3" />
            <Sparkle className="absolute left-6 top-3 scale-x-[-1]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ThemeToggler
