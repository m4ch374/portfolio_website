/* eslint-disable react/no-unknown-property */
import { Canvas, useLoader } from "@react-three/fiber"
import TailwindBreakpoints from "constants/TailwindBreakpoint"
import useDimensions from "hooks/Dimensions.hooks"
import React, { Suspense } from "react"
// eslint-disable-next-line import/extensions
import { GLTFLoader } from "three/examples/jsm/Addons.js"

const Potato: React.FC = () => {
  const loader = useLoader(GLTFLoader, "/potato.glb")
  const { width } = useDimensions()

  return (
    <>
      <primitive
        visible={width >= TailwindBreakpoints.lg}
        object={loader.scene}
        position={[-1.8, 0, 0]}
        rotation={[6, 5, 5]}
        scale={10}
      />
      <ambientLight intensity={1} color="white" />
      <directionalLight intensity={4} position={[0, 5, 5]} />
    </>
  )
}

const PotatoForeground: React.FC = () => {
  return (
    <div className="absolute left-0 top-0 -z-10 hidden h-full w-full lg:block">
      <Canvas frameloop="demand" camera={{ fov: 40 }}>
        <Suspense fallback={null}>
          <Potato />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default PotatoForeground
