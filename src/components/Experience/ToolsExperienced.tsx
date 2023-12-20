import React, { useCallback, useEffect, useRef } from "react"
import ExpertiseCard from "./ExperteseCard"

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
    <section className="mx-auto mb-8 flex w-[90%] flex-col items-center rounded-lg">
      <h1 className="m-4 text-4xl font-bold">Skills & Expertise</h1>
      <div ref={selfRef} id="cards" className="flex w-full flex-wrap gap-2">
        <ExpertiseCard>hi</ExpertiseCard>
        <ExpertiseCard>hi</ExpertiseCard>
        <ExpertiseCard>hi</ExpertiseCard>
      </div>
    </section>
  )
}

export default ToolsExperienced
