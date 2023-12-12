/* eslint-disable react/no-unknown-property */
import { BakeShadows, OrbitControls } from "@react-three/drei"
import { Canvas, Vector3, useLoader } from "@react-three/fiber"
import React, { useEffect } from "react"
// eslint-disable-next-line import/extensions
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

const CAMERA_POS: Vector3 = [10, 5, 8]
const PERSPECTIVE_CAMERA_FOV = 40

const LIGHT_INTENSITY = 2
const LIGHT_COLOR = "white"
const DIRECTION_LIGHT_POS: Vector3 = [30, 5, 50]

const MODEL_INITIAL_POS: Vector3 = [-2, -2, 1]
const MODEL_INITIAL_SCALE = 1
const MODEL_INITIAL_Y_ROTATION = -0.7

const SpinningLaptop: React.FC = () => {
  const loader = useLoader(GLTFLoader, "/laptop.glb")
  useEffect(() => {
    const model = loader.scene

    model.rotation.y = MODEL_INITIAL_Y_ROTATION
    model.position.set(
      MODEL_INITIAL_POS[0],
      MODEL_INITIAL_POS[1],
      MODEL_INITIAL_POS[2],
    )
    model.scale.setScalar(MODEL_INITIAL_SCALE)
    model.castShadow = true
  }, [loader])

  return (
    <div className="flex h-[240px] w-[366px] items-center justify-center place-self-center bg-white/20 lg:h-[480px] lg:w-[700px]">
      <Canvas
        shadows
        camera={{
          position: CAMERA_POS,
          fov: PERSPECTIVE_CAMERA_FOV,
        }}
      >
        <ambientLight color={LIGHT_COLOR} intensity={LIGHT_INTENSITY} />
        <directionalLight
          color={LIGHT_COLOR}
          intensity={1}
          position={DIRECTION_LIGHT_POS}
        />

        <primitive object={loader.scene} children-0-castShadow />

        <BakeShadows />
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default SpinningLaptop
