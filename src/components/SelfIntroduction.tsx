import React from "react"
import SpinningLaptop from "./SpinningLaptop"
import { Canvas } from "@react-three/fiber"

const SelfIntroduction: React.FC = () => {
  return (
    <div className="flex h-[1000px] justify-center bg-[#b3734b] to-50% transition-colors delay-300 duration-200 ease-in dark:bg-[#1c0522]">
      <div className="w-[90%] max-w-[800px] pt-20">
        <Canvas>
          <SpinningLaptop />
        </Canvas>
      </div>
    </div>
  )
}

export default SelfIntroduction
