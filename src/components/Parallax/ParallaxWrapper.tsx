import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import useDimensions from "hooks/Dimensions.hooks"
import React from "react"
import { twMerge } from "tailwind-merge"
import StarsBackground from "./StarsBackground"

const ParallaxWrapper: React.FC<{
  children?: string | JSX.Element | JSX.Element[]
  className?: string
}> = ({ children, className }) => {
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
    <motion.div
      style={{ marginTop: height }}
      className={twMerge(
        "absolute z-10 h-[2000px] w-full bg-[#1c1c1c] drop-shadow-2xl overflow-x-hidden",
        className,
      )}
    >
      <motion.div style={{ width: widthY }} className="h-1 bg-violet-800" />
      <StarsBackground />
      {children}
    </motion.div>
  )
}

export default ParallaxWrapper
