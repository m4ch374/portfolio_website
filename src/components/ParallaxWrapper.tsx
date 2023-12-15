import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import useDimensions from "hooks/Dimensions.hooks"
import React from "react"

const ParallaxWrapper: React.FC<{
  children: string | JSX.Element | JSX.Element[]
}> = ({ children }) => {
  const { scrollY } = useScroll()
  const { height } = useDimensions()

  const springY = useSpring(scrollY, {
    stiffness: 1000,
    damping: 300,
    restDelta: 0.001,
  })

  const parallaxY = useTransform(() => {
    return height - springY.get() * 0.2
  })

  return (
    <motion.div
      style={{ marginTop: scrollY.get() >= height ? height : parallaxY }}
      className="absolute left-0 top-0 z-10 h-[1000px] w-full bg-gray-800"
    >
      {children}
    </motion.div>
  )
}

export default ParallaxWrapper
