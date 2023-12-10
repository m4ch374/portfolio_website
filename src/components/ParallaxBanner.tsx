import React from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import useDarkTheme from "hooks/DarkTheme.hooks"
import ParallaxBannerOverlay from "./ParallaxBannerOverlay"

const ParallaxBanner: React.FC = () => {
  const { isLight } = useDarkTheme()

  const { scrollY } = useScroll()
  const frontDropY = useTransform(() => scrollY.get() * 0.15)
  const backDropY = useTransform(() => scrollY.get() * 0.35)

  return (
    <div className="select-none">
      <ParallaxBannerOverlay />

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
                className="absolute bottom-[5%] z-20 ml-[10%] mt-[50%] h-[60%] w-[80%] min-w-[1200px]"
                style={{ translateY: frontDropY }}
                draggable={false}
              />

              <motion.img
                src="back_mountain.svg"
                className="absolute bottom-[15%] z-10 ml-[20%] aspect-auto h-[40%] w-[60%] min-w-[600px] opacity-70"
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
                className="absolute bottom-[10%] z-20 mr-[8%] mt-[50%] h-[65%] w-full min-w-[1000px]"
                style={{ translateY: frontDropY }}
                draggable={false}
              />

              <motion.img
                src="/back_mountain_night.svg"
                className="absolute bottom-[15%] z-10 ml-[20%] aspect-auto h-[40%] w-[60%] min-w-[600px] opacity-70"
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
