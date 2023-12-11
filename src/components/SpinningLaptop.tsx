/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei"
import React, { useRef } from "react"
import { Mesh } from "three"

const SpinningLaptop: React.FC = () => {
  const boxMesh = useRef<Mesh>(null!)

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh ref={boxMesh} castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
      <OrbitControls autoRotate />
    </>
  )
}

export default SpinningLaptop
