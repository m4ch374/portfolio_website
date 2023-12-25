import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import OrgExperience from "./Popup/OrgExperience"

const BACKDROP_CLASSNAME = "flex items-end justify-center"
const CLICKED_BOUNDARY_BOX = "h-[85%] w-full rounded-t-md"
const IMG_DEFAULT_CLASSNAME =
  "h-24 w-24 m-4 rounded-md border border-zinc-400/20 drop-shadow-lg"

type TExperienceThumbnail = {
  imgSrc: string
}

const ExperienceThumbnail: React.FC<TExperienceThumbnail> = ({ imgSrc }) => {
  const [clicked, setClicked] = useState(false)
  const [hide, setHide] = useState(clicked)

  return (
    <>
      <motion.div
        className={`${BACKDROP_CLASSNAME} ${hide && "hidden"} ${
          clicked && "fixed left-0 top-0 z-[70] h-screen w-full bg-black/50"
        }`}
      >
        <motion.div
          layout="position"
          transition={{
            layout: { duration: 0.5, ease: "easeIn", type: "spring" },
          }}
          onLayoutAnimationComplete={() => {
            if (clicked) setTimeout(() => setHide(true), 300)
          }}
          className={`${clicked ? `${CLICKED_BOUNDARY_BOX}` : "relative z-40"}`}
        >
          <motion.img
            draggable={false}
            src={imgSrc}
            className={`cursor-pointer ${IMG_DEFAULT_CLASSNAME}`}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.1 },
            }}
            onClick={() => setClicked(true)}
          />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {clicked && (
          <OrgExperience
            backdropClassName={BACKDROP_CLASSNAME}
            modalClassName={CLICKED_BOUNDARY_BOX}
            setClicked={setClicked}
            hidden={hide}
            setHide={setHide}
            srcImg={imgSrc}
            imgDefaultClassName={IMG_DEFAULT_CLASSNAME}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default ExperienceThumbnail
