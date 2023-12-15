import React, { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const IntroTextSection: React.FC = () => {
  const [currHi, setCurrHi] = useState(0)
  const allHi = useMemo(() => {
    return [
      "你好",
      "안녕하세요",
      "Bonjour",
      "ٱلسَّلَامُ عَلَيْكُمْ",
      "Hola",
      "नमस्ते",
      "Hello",
    ]
  }, [])

  useEffect(() => {
    if (currHi >= allHi.length - 1) return

    const timeout = setTimeout(() => {
      setCurrHi(s => s + 1)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [allHi.length, currHi])

  return (
    <div className="flex flex-col items-center justify-center gap-3 px-8 md:flex-row">
      <div>
        <AnimatePresence mode="wait">
          <h1 className="mb-4 flex justify-center text-3xl font-thin tracking-tight md:mb-12 md:flex-wrap md:justify-start md:text-[2.5rem]">
            <motion.div
              key={allHi[currHi]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              layout
            >
              {allHi[currHi]}
            </motion.div>
            <motion.div layout="position">
              <span>, I am </span>
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text font-semibold text-transparent">
                Henry Wan.
              </span>
            </motion.div>
          </h1>
        </AnimatePresence>

        <motion.h3
          layout
          className="max-w-[500px] text-center text-zinc-400 md:text-start"
        >
          I am an aspiring front-end programmer, experienced in website, mobile
          and Software Engineering. I am also a fresh graduate from the
          University of New South Wales!
        </motion.h3>
      </div>

      <div className="flex aspect-square w-[400px] max-w-[400px] items-center justify-center rounded-md bg-zinc-800">
        Place reserved for 3d model
      </div>
    </div>
  )
}

export default IntroTextSection
