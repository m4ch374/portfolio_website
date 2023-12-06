import React from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import useDarkTheme from "hooks/DarkTheme.hooks"

const ParallaxBanner: React.FC = () => {
  const { isLight } = useDarkTheme()

  const { scrollY } = useScroll()
  const frontDropY = useTransform(() => scrollY.get() * 0.15)
  const backDropY = useTransform(() => scrollY.get() * 0.35)

  return (
    <div className="select-none">
      <div className="absolute left-0 top-0 z-[60] mt-20 flex h-full w-full justify-center">
        <h1 className="text-4xl font-thin drop-shadow-md">
          Hi, I&apos;m{" "}
          <span className="font-semibold text-sky-400 transition-colors delay-200 duration-1000 dark:text-violet-400">
            Henry Wan
          </span>
        </h1>
      </div>

      <AnimatePresence initial={false} mode="popLayout">
        {isLight ? (
          <motion.div
            key="day"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { type: "tween", duration: 1, delay: 0.3 },
            }}
            exit={{
              opacity: 0,
              transition: { type: "tween", duration: 1, delay: 0.3 },
            }}
            className="bg-gradient-to-b from-sky-600 to-amber-100 pt-10"
          >
            <div className="relative flex h-[110vh] w-full justify-center overflow-hidden">
              <motion.img
                src="/front_rock.svg"
                className="absolute left-0 top-10 z-30 h-full w-full scale-x-110 object-cover object-center"
                draggable={false}
              />

              <motion.img
                src="/front_mountain.svg"
                className="absolute bottom-20 z-20 ml-60 mt-56 aspect-auto w-[1200px] min-w-[1200px]"
                style={{ translateY: frontDropY }}
                draggable={false}
              />

              <motion.img
                src="back_mountain.svg"
                className="absolute bottom-40 z-10 ml-96 aspect-auto w-[600px] min-w-[600px] opacity-70"
                style={{ translateY: backDropY }}
                draggable={false}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="night"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { type: "tween", duration: 1, delay: 0.3 },
            }}
            exit={{
              opacity: 0,
              transition: { type: "tween", duration: 1, delay: 0.3 },
            }}
            className="bg-gradient-to-b from-violet-950 to-sky-400 pt-10"
          >
            <div className="relative flex h-[110vh] w-full justify-center overflow-hidden">
              <motion.img
                src="/front_rock_night.svg"
                className="absolute left-0 top-10 z-30 h-full w-full scale-x-110 object-cover object-center"
                draggable={false}
              />

              <motion.img
                src="/front_mountain_night.svg"
                className="absolute bottom-14 z-20 mr-20 mt-56 aspect-auto w-[1000px] min-w-[1000px]"
                style={{ translateY: frontDropY }}
                draggable={false}
              />

              <motion.img
                src="/back_mountain_night.svg"
                className="absolute bottom-40 z-10 ml-96 aspect-auto w-[600px] min-w-[600px] opacity-70"
                style={{ translateY: backDropY }}
                draggable={false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ParallaxBanner
