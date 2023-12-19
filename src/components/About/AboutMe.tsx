import Check from "assets/Icons/Check"
import React from "react"

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="mx-auto my-8 flex w-[90%] max-w-[700px] flex-col items-center rounded-lg p-4 shadow-2xl"
    >
      <img
        src="/myself.jpg"
        className="my-8 aspect-square w-36 rounded-full drop-shadow-night-sun"
      />
      <h3 className="text-xl font-thin text-zinc-300">Henry is a</h3>
      <h1 className="text-4xl font-bold">Problem Solver</h1>

      <div className="mt-8 flex w-[100%] max-w-[550px] flex-wrap justify-between gap-2 text-xs text-zinc-400">
        <div className="flex items-center">
          <Check />
          <h3>2x Industry Experience</h3>
        </div>

        <div className="flex items-center">
          <Check />
          <h3>UNSW CSESoc Director</h3>
        </div>

        <div className="flex items-center">
          <Check />
          <h3>Programming Tutor</h3>
        </div>
      </div>

      <p className="my-8 text-justify">
        Hello, My name is Henry. I am a full-stack developer currently employed
        in{" "}
        <a
          className="text-violet-300 underline underline-offset-4 transition-colors hover:text-violet-500"
          href="https://www.linkedin.com/company/stomble/"
          target="_blank"
          rel="noreferrer"
        >
          Stomble
        </a>
        {". "}
        And a fresh graduate from the{" "}
        <a
          className="text-violet-300 underline underline-offset-4 transition-colors hover:text-violet-500"
          href="https://www.unsw.edu.au/"
          target="_blank"
          rel="noreferrer"
        >
          University of New South Wales{" ("}UNSW{")"}
        </a>
        ! My expertiese lies on developing beautiful frontend on the web and
        mobile with full backend integration.
        <br />
        <br />I am constantly seeking improvement and currently exploring ways
        to incorporate 3D model and rendering into websites to make them more
        interactive. {"("}This stars background is 3D generated in real-time, on
        your computer!{")"}
      </p>
    </section>
  )
}

export default AboutMe
