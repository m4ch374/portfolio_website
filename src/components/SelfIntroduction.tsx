import React from "react"
import SpinningLaptop from "./SpinningLaptop"
import { Canvas } from "@react-three/fiber"

const SelfIntroduction: React.FC = () => {
  return (
    <div className="flex h-[1000px] justify-center bg-[#b3734b] to-50% transition-colors delay-300 duration-200 ease-in dark:bg-[#1c0522]">
      <div className="flex w-[90%] max-w-[800px] flex-col pt-8">
        <div className="h-[400px] w-[400px] place-self-center bg-white">
          <Canvas>
            <SpinningLaptop />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default SelfIntroduction
