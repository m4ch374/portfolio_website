import React from "react"
import IntroTextSection from "./IntroTextSection"

const IntroBanner: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="absolute inset-0 bottom-1/2 -z-20 mx-auto aspect-square w-[65%] translate-y-[-75%] rounded-full bg-violet-500/50 blur-[100px]" />
      <IntroTextSection />
    </div>
  )
}

export default IntroBanner
