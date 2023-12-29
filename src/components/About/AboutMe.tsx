import Check from "assets/Icons/Check"
import React, { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import useMeasure from "hooks/Measure.hooks"

const AboutMe: React.FC = () => {
  const titles = useMemo(
    () => [
      "Programmer",
      "Problem Solver",
      "Developer",
      "Software Engineer",
      "Gamer",
    ],
    [],
  )

  const [currIdx, setCurrIdx] = useState(0)

  const [titleRef, { width }] = useMeasure<HTMLHeadingElement>()

  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setCurrIdx(s => {
          return s === titles.length - 1 ? 0 : s + 1
        }),
      2000,
    )

    return () => clearTimeout(timeout)
  }, [currIdx, titles.length])

  return (
    <section
      id="about"
      className="mx-auto flex w-[90%] max-w-[700px] flex-col items-center rounded-lg p-4 py-10"
    >
      <img
        src="/myself.jpg"
        className="my-8 aspect-square w-36 rounded-full drop-shadow-night-sun"
      />
      <div className="text-center">
        <h3 className="text-xl font-thin text-zinc-300">Henry is a</h3>
        <div
          className="
            conic-card
            mt-2
            flex
            items-center
            justify-center
            rounded-md
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ width: width + 40 }}
              className="m-[1px] flex h-[calc(100%-2px)] w-[calc(100%-2px)] items-center justify-center rounded-[inherit] bg-zinc-800 px-3 py-1 text-4xl font-bold"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.3 },
                }}
                exit={{ opacity: 0 }}
                key={titles[currIdx]}
                ref={titleRef}
                className="whitespace-nowrap"
              >
                {titles[currIdx]}
              </motion.h3>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-8 flex w-[100%] max-w-[550px] flex-wrap justify-between gap-2 text-xs text-zinc-400">
        <div className="flex items-center">
          <Check />
          <h3>2x Industry Experience</h3>
        </div>

        <div className="flex items-center">
          <Check />
          <h3>UNSW CSESoc Director</h3>
        </div>

        <div className="flex items-center">
          <Check />
          <h3>Programming Tutor</h3>
        </div>
      </div>

      <p className="my-8 text-justify">
        Hello, My name is Henry. I am a full-stack developer currently employed
        in{" "}
        <a
          className="text-violet-300 underline underline-offset-4 transition-colors hover:text-violet-500"
          href="https://www.linkedin.com/company/stomble/"
          target="_blank"
          rel="noreferrer"
        >
          Stomble
        </a>
        {". "}
        And a fresh graduate from the{" "}
        <a
          className="text-violet-300 underline underline-offset-4 transition-colors hover:text-violet-500"
          href="https://www.unsw.edu.au/"
          target="_blank"
          rel="noreferrer"
        >
          University of New South Wales{" ("}UNSW{")"}
        </a>
        ! My expertiese lies on developing beautiful frontend on the web and
        mobile with full backend integration.
        <br />
        <br />I am constantly seeking improvement and currently exploring ways
        to incorporate 3D model and rendering into websites to make them more
        interactive. {"("}This stars background is 3D generated in real-time, on
        your computer!{")"}
      </p>
    </section>
  )
}

export default AboutMe
