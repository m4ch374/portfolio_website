/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei"
import { Canvas, invalidate, useFrame, useLoader } from "@react-three/fiber"
import React, { useCallback, useEffect, useRef } from "react"
// eslint-disable-next-line import/extensions
import { GLTFLoader } from "three/examples/jsm/Addons.js"

const Laptop: React.FC = () => {
  const loader = useLoader(GLTFLoader, "/laptop.glb")

  const easeOutCirc = useCallback((x: number) => {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
  }, [])

  useEffect(() => {
    loader.scene.rotation.y = 1.5 * Math.PI
    loader.scene.position.x = -2.3
    loader.scene.position.y = -1
    loader.scene.position.z = 1.5
  }, [loader])

  const frameNum = useRef(0)
  useFrame(state => {
    if (frameNum.current > 100) return

    const rotSpeed = -easeOutCirc(frameNum.current / 120) * Math.PI * 40

    state.camera.position.x = 10 * Math.cos(rotSpeed) + 15 * Math.sin(rotSpeed)
    state.camera.position.z = 15 * Math.cos(rotSpeed) - 10 * Math.sin(rotSpeed)
    invalidate()
    frameNum.current++
  })

  return (
    <mesh>
      <primitive object={loader.scene} />
    </mesh>
  )
}

const IntroLaptop: React.FC = () => {
  return (
    <Canvas
      camera={{ aspect: 1, fov: 40, position: [0, 5, 18] }}
      className="h-full w-full"
      frameloop="demand"
    >
      <ambientLight intensity={1} color="white" />
      <directionalLight
        intensity={4}
        position={[10, 5, 20]}
        color={"#ede9fe"}
      />
      <Laptop />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

export default IntroLaptop
