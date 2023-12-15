import React, { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ArrowUpRight from "assets/Icons/ArrowUpRight"
import Terminal from "assets/Icons/Terminal"
import useDimensions from "hooks/Dimensions.hooks"
import TailwindBreakpoints from "constants/TailwindBreakpoint"

const IntroTextSection: React.FC = () => {
  const { width } = useDimensions()
  const isMd = useMemo(() => width >= TailwindBreakpoints.md, [width])

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

    const timeout = setTimeout(
      () => {
        setCurrHi(s => s + 1)
      },
      !currHi ? 1500 : 1000,
    )

    return () => clearTimeout(timeout)
  }, [allHi.length, currHi])

  return (
    <div className="flex flex-col items-center justify-center gap-3 px-8 md:flex-row">
      <div className="flex flex-col items-center md:items-start">
        <motion.h3
          layout
          initial={{ opacity: 0, y: -40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, ease: "easeOut", duration: 0.5 },
          }}
          className="mb-2 flex cursor-default gap-1 rounded-full border border-violet-800 bg-black px-2 py-1 font-thin text-violet-400 transition-colors hover:border-violet-700 hover:bg-zinc-900 hover:text-violet-300"
        >
          <Terminal />
          Full-Stack Developer
        </motion.h3>
        <AnimatePresence mode="wait">
          <motion.h1
            initial={{ opacity: 0, ...(isMd ? { x: -200 } : { y: 40 }) }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { duration: 0.5 },
            }}
            className="mb-4 flex justify-center text-3xl font-thin tracking-tight md:mb-12 md:flex-wrap md:justify-start md:text-[2.5rem]"
          >
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
          </motion.h1>
        </AnimatePresence>

        <motion.h3
          layout
          initial={{ opacity: 0, ...(isMd ? { x: -200 } : { y: 100 }) }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { delay: 0.2, ease: "easeOut", duration: 0.5 },
          }}
          className="max-w-[500px] text-center text-zinc-400 md:text-start"
        >
          I am an aspiring full-stack programmer, experienced in website, mobile
          and Software Engineering. I am also a fresh graduate from the
          University of New South Wales!
        </motion.h3>

        <motion.a
          layout
          href="https://www.linkedin.com/in/henry-wan-dev/"
          target="_blank"
          initial={{ opacity: 0, ...(isMd ? { x: -200 } : { y: 100 }) }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { delay: 0.4, ease: "easeOut", duration: 0.5 },
          }}
          className="mt-2 flex gap-1 rounded-md border border-violet-900 bg-violet-950/30 px-4 py-2 font-thin text-violet-300/80 transition-colors duration-300 hover:border-violet-800 hover:bg-violet-950/80 hover:text-violet-200"
        >
          View My LinkedIn
          <ArrowUpRight />
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, ...(isMd ? { x: 400 } : { y: 200 }) }}
        animate={{
          opacity: 1,
          y: 0,
          x: 0,
          transition: { delay: 0.6, ease: "easeOut", duration: 0.5 },
        }}
        className="flex aspect-square w-[400px] max-w-[400px] items-center justify-center rounded-md bg-zinc-800"
      >
        Place reserved for 3d model
      </motion.div>
    </div>
  )
}

export default IntroTextSection
