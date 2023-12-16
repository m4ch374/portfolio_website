import React, { HTMLAttributeAnchorTarget, useState } from "react"
import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"

type TNavBarHighlightLink = {
  className?: string
  children?: string | JSX.Element | JSX.Element[]
  href?: string
  target?: HTMLAttributeAnchorTarget
}

const NavBarHighlightLink: React.FC<TNavBarHighlightLink> = ({
  className,
  children,
  href,
  target,
}) => {
  const [hover, setHover] = useState(false)

  return (
    <a
      className={twMerge("relative p-2", className)}
      href={href}
      target={target}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {hover && (
        <motion.div
          layoutId="socials"
          className="absolute left-0 top-0 -z-10 h-full w-full rounded-md bg-purple-700/50"
        />
      )}
    </a>
  )
}

export default NavBarHighlightLink
