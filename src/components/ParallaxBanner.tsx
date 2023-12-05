import React from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const ParallaxBanner: React.FC = () => {
  const { scrollY } = useScroll()
  const springY = useSpring(scrollY, {
    stiffness: 200,
    damping: 50,
  })
  const frontDropY = useTransform(() => springY.get() * 0.15)
  const backDropY = useTransform(() => springY.get() * 0.25)

  return (
    <div className="bg-gradient-to-b from-sky-600 to-amber-100 pt-10">
      <div className="relative flex h-[110vh] w-full justify-center overflow-hidden">
        <motion.img
          src="/front_rock.svg"
          className="absolute left-0 top-10 z-30 h-full w-full scale-x-110 object-cover object-center"
        />

        <motion.img
          src="/front_mountain.svg"
          className="absolute bottom-20 z-20 ml-60 mt-56 aspect-auto w-[1200px] min-w-[1200px]"
          style={{ translateY: frontDropY }}
        />

        <motion.img
          src="/back_mountain.svg"
          className="absolute bottom-40 z-10 ml-96 aspect-auto w-[600px] min-w-[600px] opacity-70"
          style={{ translateY: backDropY }}
        />
      </div>
    </div>
  )
}

export default ParallaxBanner
