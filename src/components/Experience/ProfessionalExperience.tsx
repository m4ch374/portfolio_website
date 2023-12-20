import React, { useState } from "react"
import { motion } from "framer-motion"
import OrgExperience from "./Popup/OrgExperience"

const ProfessionalExperience: React.FC = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <section className="mx-auto flex h-[1000px] w-[90%] max-w-[800px] flex-col items-center gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          I am proud to have worked with{" "}
          <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
            4+
          </span>{" "}
          companies and organizations.
        </h1>
        <p className="mt-4 text-zinc-400">
          Exposed myself to various environments by working in different
          organizations and roles. These experience made me grew immensely both
          on the personal and professional front.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <motion.div
          onClick={() => setClicked(s => !s)}
          layout
          transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
          className={`h-20 w-20 bg-white ${
            clicked ? "fixed left-10 top-32 z-[70]" : "relative z-40"
          }`}
        />
        {clicked && <OrgExperience />}
      </div>
    </section>
  )
}

export default ProfessionalExperience
