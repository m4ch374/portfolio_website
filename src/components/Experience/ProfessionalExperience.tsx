import React from "react"
import ExperienceThumbnail from "./ExperienceThumbnail"
import Download from "assets/Icons/Download"

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
        <div className="mt-8 flex justify-center">
          <a
            href="/Resume.pdf"
            download
            className="flex gap-2 rounded-full border border-violet-400 bg-violet-900/40 px-4 py-2 text-violet-300 backdrop-blur-sm transition-colors hover:bg-violet-900/60"
          >
            <Download />
            <h3>Download my CV</h3>
          </a>
        </div>
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
