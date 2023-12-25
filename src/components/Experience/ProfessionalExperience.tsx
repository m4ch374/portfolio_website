import React from "react"
import ExperienceThumbnail from "./ExperienceThumbnail"

const ProfessionalExperience: React.FC = () => {
  return (
    <section className="mx-auto my-20 flex w-[90%] max-w-[800px] flex-col items-center gap-8">
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
        <a></a>
      </div>
      <div className="grid w-full grid-cols-2 place-items-center gap-y-10 md:grid-cols-3">
        <ExperienceThumbnail imgSrc="/stomble.jpeg" />
        <ExperienceThumbnail imgSrc="/csesoc.jpeg" />
        <ExperienceThumbnail imgSrc="/sas.jpeg" />
        <ExperienceThumbnail imgSrc="/unsw.jpeg" />
        <ExperienceThumbnail imgSrc="/enjoyneer.jpg" />
      </div>
    </section>
  )
}

export default ProfessionalExperience
