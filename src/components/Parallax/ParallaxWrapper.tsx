import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import useDimensions from "hooks/Dimensions.hooks"
import React from "react"
import StarsBackground from "./StarsBackground"

const ParallaxWrapper: React.FC<{
  children?: string | JSX.Element | JSX.Element[]
}> = ({ children }) => {
  const { scrollY } = useScroll()
  const { height, width } = useDimensions()

  const springY = useSpring(scrollY, {
    stiffness: 1000,
    damping: 300,
    restDelta: 0.001,
  })

  const widthY = useTransform(() => {
    if (springY.get() >= height) return width - 17
    return (springY.get() / height) * width
  })

  return (
    <div
      style={{ marginTop: height }}
      className="absolute left-0 top-0 z-0 w-full overflow-x-hidden bg-[#111111]"
    >
      <motion.div
        style={{ width: widthY }}
        className="relative z-10 h-1 bg-violet-800"
      />
      {/* <PotatoForeground /> */}
      {children}
      <StarsBackground />
    </div>
  )
}

export default ParallaxWrapper
