import React, { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const ParallaxBannerOverlay: React.FC = () => {
  const allHello = useMemo(() => {
    return [
      "你好",
      "안녕하세요",
      "नमस्ते",
      "Salve",
      "السلام عليكم",
      "Hola",
      "Hello",
    ]
  }, [])

  const [currHiIdx, setCurrHiIdx] = useState(0)

  useEffect(() => {
    if (currHiIdx >= allHello.length - 1) return

    const timeout = setTimeout(() => setCurrHiIdx(s => s + 1), 1000)

    return () => clearTimeout(timeout)
  }, [allHello.length, currHiIdx])

  return (
    <div className="absolute left-0 top-0 z-[60] mt-20 flex h-full w-full flex-col items-center">
      <img
        draggable={false}
        src="/myself.jpg"
        className="m-14 h-44 w-44 rounded-full border-2 border-orange-500/20 opacity-95 drop-shadow-day-sun transition-all delay-300 duration-1000 dark:border-white/20 dark:drop-shadow-night-sun"
      />
      <AnimatePresence mode="wait">
        <div className="flex justify-center text-4xl font-thin drop-shadow-md">
          <motion.div
            key={allHello[currHiIdx]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
          >
            {allHello[currHiIdx]}
          </motion.div>
          <motion.div layout>
            <span>, I&apos;m </span>
            <span className="font-semibold text-sky-300 transition-colors delay-200 duration-1000 dark:text-violet-400">
              Henry Wan
            </span>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  )
}

export default ParallaxBannerOverlay
