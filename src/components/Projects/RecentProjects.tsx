import React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import Wifi from "assets/Icons/Wifi"
import ArrowUpRight from "assets/Icons/ArrowUpRight"

const RecentProjects: React.FC = () => {
  const x = useMotionValue(200)
  const y = useMotionValue(200)

  const rotateX = useTransform(y, [0, 400], [10, -10])
  const rotateY = useTransform(x, [0, 400], [-15, 15])

  return (
    <div className="mx-auto my-10 w-[90%] max-w-[900px]">
      <h1 className="mb-8 text-center text-4xl font-bold">Recent Project</h1>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div
          style={{ perspective: 400 }}
          onMouseMove={e => {
            const bound = e.currentTarget.getBoundingClientRect()

            x.set(e.clientX - bound.left)
            y.set(e.clientY - bound.top)
          }}
          onMouseLeave={() => {
            x.set(200)
            y.set(200)
          }}
        >
          <motion.img
            src="/showcase2.png"
            className="aspect-auto rounded-xl border-2 border-zinc-200/20 object-cover drop-shadow-night-sun"
            style={{ rotateX, rotateY }}
          />
        </div>
        <div className="flex flex-col items-center justify-between md:items-start">
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <div className="flex select-none items-center gap-2 overflow-hidden rounded-md border border-zinc-200/20 bg-zinc-800 px-2 py-1 text-3xl font-bold">
              <Wifi className="h-8 w-8" />
              <h3 className="tracking-tighter">GigConnect</h3>
            </div>
            <p className="mt-4 font-thin">
              GigConnect is a fully responsive, easy-to-use platform for
              companies to gain contact with hidden talents. Work could be
              outsourced on this platform, where talents could apply for the
              work that they are interested in.
            </p>
          </div>
          <a
            href="https://github.com/m4ch374/gigconnect"
            target="_blank"
            className="flex items-center gap-2 rounded-md border border-sky-900 bg-sky-800/40 px-2.5 py-1.5 font-thin text-sky-300/80 backdrop-blur-sm transition-colors duration-300 hover:border-sky-700 hover:bg-sky-900/80 hover:text-sky-200 md:mb-8"
            rel="noreferrer"
          >
            <ArrowUpRight className="h-5 w-5" />
            <h3>View Project</h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default RecentProjects
