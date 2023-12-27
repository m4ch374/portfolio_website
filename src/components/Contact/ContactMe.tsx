import GMail from "assets/Icons/GMail"
import Github from "assets/Icons/Github"
import Instagram from "assets/Icons/Instagram"
import LinkedIn from "assets/Icons/LinkedIn"
import React from "react"
import { motion } from "framer-motion"
import CreativeCommons from "assets/Icons/CreativeCommons"

const ContactMe: React.FC = () => {
  return (
    <div className="-mt-1 flex w-full flex-col overflow-hidden bg-violet-500 bg-gradient-to-b from-violet-500 to-indigo-500 pb-4">
      <div className="mx-auto flex w-[90%] max-w-[800px] flex-col justify-center gap-8 md:flex-row">
        <div className="flex-1 text-center md:text-start">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <h3 className="mt-2 text-lg font-thin">
            Find me interesting? Or just want to reach out? Feel free to shoot
            me a message, send me an email or add me on LinkedIn! I am always
            excited for new opportunities and meeting new people!
          </h3>
        </div>
        <div className="mx-auto flex w-[80%] flex-1 justify-between md:grid md:grid-cols-2 md:grid-rows-2 md:items-center md:justify-center md:justify-items-center">
          <motion.a
            href="https://www.linkedin.com/in/henry-wan-dev/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 0.9 }}
          >
            <LinkedIn className="h-8 w-8 md:h-12 md:w-12" />
          </motion.a>
          <motion.a
            href="https://github.com/m4ch374"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 0.9 }}
          >
            <Github className="h-8 w-8 md:h-12 md:w-12" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/m4ch373?igsh=MWljM3B4Ynltb3czcA=="
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 0.9 }}
          >
            <Instagram className="h-8 w-8 md:h-12 md:w-12" />
          </motion.a>
          <motion.a
            href="mailto: wanngaitin@gmail.com"
            rel="noreferrer"
            whileHover={{ scale: 0.9 }}
          >
            <GMail className="h-8 w-8 md:h-12 md:w-12" />
          </motion.a>
        </div>
      </div>
      <hr className="mx-auto mt-10 w-[80%] max-w-[1000px] border-zinc-300/30" />
      <div className="mt-4 flex items-center justify-center gap-1 font-semibold text-zinc-100">
        <h3>CC-BY-NC 4.0</h3>
        <CreativeCommons className="h-5 w-5" />
        <h3>Henry Wan 2023 - 2024</h3>
      </div>
    </div>
  )
}

export default ContactMe
