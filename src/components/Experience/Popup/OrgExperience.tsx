import React, { Dispatch, SetStateAction } from "react"
import Backdrop from "./Backdrop"
import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"
import CrossMark from "assets/Icons/CrossMark"

type TOrgExperience = {
  modalClassName: string
  backdropClassName: string
  setClicked: Dispatch<SetStateAction<boolean>>
  hidden: boolean
  setHide: Dispatch<SetStateAction<boolean>>
  srcImg: string
  imgDefaultClassName: string
}

const OrgExperience: React.FC<TOrgExperience> = ({
  modalClassName,
  backdropClassName,
  setClicked,
  hidden,
  setHide,
  srcImg,
  imgDefaultClassName,
}) => {
  return (
    <Backdrop backdropClassName={backdropClassName}>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: 1,
          transition: {
            delay: 0.2,
            type: "spring",
            damping: 55,
            stiffness: 500,
          },
        }}
        className={twMerge(
          "relative origin-bottom bg-amber-50 text-black/90",
          modalClassName,
        )}
      >
        <img
          src={srcImg}
          className={`${
            hidden ? "opacity-100" : "opacity-0"
          } ${imgDefaultClassName}`}
        />

        <button
          className="absolute right-5 top-4"
          onClick={() => {
            setHide(false)
            setClicked(false)
          }}
        >
          <CrossMark />
        </button>
      </motion.div>
    </Backdrop>
  )
}

export default OrgExperience
