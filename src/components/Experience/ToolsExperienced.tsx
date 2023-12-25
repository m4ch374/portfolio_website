import React, { useCallback, useEffect, useRef } from "react"
import ExpertiseCard from "./ExperteseCard"
import CodeBracket from "assets/Icons/CodeBracket"
import PaintBrush from "assets/Icons/PaintBrush"
import Mobile from "assets/Icons/Mobile"

const BreakPoint: React.FC = () => {
  return (
    <h3 className="font-mono">
      {"<"}
      <span className="text-red-400">br</span>
      {" />"}
    </h3>
  )
}

const ToolsExperienced: React.FC = () => {
  const selfRef = useRef<HTMLDivElement>(null!)

  const mouseOver = useCallback((e: MouseEvent) => {
    const section = selfRef.current
    for (const box of section.getElementsByClassName("card")) {
      const bound = box.getBoundingClientRect()

      const x = e.clientX - bound.left
      const y = e.clientY - bound.top

      const node = box as HTMLElement

      node.style.setProperty("--mouse-x", `${x}px`)
      node.style.setProperty("--mouse-y", `${y}px`)
    }
  }, [])

  useEffect(() => {
    const sectionRef = selfRef.current
    sectionRef.addEventListener("mousemove", mouseOver)

    return () => sectionRef.removeEventListener("mousemove", mouseOver)
  }, [mouseOver])

  return (
    <section className="mx-auto mb-8 flex w-[90%] max-w-[1100px] flex-col items-center rounded-lg">
      <h1 className="m-4 text-4xl font-bold">Skills & Expertise</h1>
      <div ref={selfRef} id="cards" className="flex w-full flex-wrap gap-2">
        <ExpertiseCard
          title="Software Development"
          icon={<CodeBracket />}
          innerGlowColor="#f87171"
          titleClassName="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
        >
          <>
            Spending 3 years at school, and another year in the industry, I
            mastered various concepts from OOP to functional programming.
            <BreakPoint />
            Expereinced in languages including C, Java, JavaScript, TypeScript
            and more.
          </>
        </ExpertiseCard>
        <ExpertiseCard
          title="Frontend Development"
          icon={<PaintBrush />}
          innerGlowColor="#059669"
          titleClassName="bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 bg-clip-text text-transparent"
        >
          Interested in building beautiful frontend solution, I am experienced
          in using React, Tailwind, Framer Motion and other frameworks.
        </ExpertiseCard>
        <ExpertiseCard
          title="Mobile Development"
          icon={<Mobile />}
          innerGlowColor="#7c3aed"
          titleClassName="bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent"
        >
          <>
            Worked in a tech startup, gained exposure in building cross-platform
            solutions leveraging React Native and Expo.
            <BreakPoint />
            Handled AWS services such as cognito and S3 for authentication and
            content delivery.
          </>
        </ExpertiseCard>
      </div>
    </section>
  )
}

export default ToolsExperienced
