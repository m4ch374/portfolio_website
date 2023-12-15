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
  const { height } = useDimensions()

  const springY = useSpring(scrollY, {
    stiffness: 1000,
    damping: 300,
    restDelta: 0.001,
  })

  const parallaxY = useTransform(() => {
    return height - springY.get() * 0.2 + 1
  })

  return (
    <motion.div
      style={{ marginTop: scrollY.get() >= height ? height : parallaxY }}
      className={twMerge(
        "absolute z-10 h-[1000px] w-full bg-[#1c1c1c] drop-shadow-day-sun border-t border-t-zinc-500",
        className,
      )}
    >
      <StarsBackground />
      {children}
    </motion.div>
  )
}

export default ParallaxWrapper
