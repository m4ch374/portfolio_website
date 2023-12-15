/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import React, { useEffect } from "react"
// eslint-disable-next-line import/extensions
import { GLTFLoader } from "three/examples/jsm/Addons.js"

const IntroLaptop: React.FC = () => {
  const loader = useLoader(GLTFLoader, "/laptop.glb")

  useEffect(() => {
    loader.scene.rotation.y = 1.5 * Math.PI
    loader.scene.position.x = -2.3
    loader.scene.position.y = -1
    loader.scene.position.z = 1.5
  }, [loader])

  return (
    <Canvas
      camera={{ aspect: 1, fov: 40, position: [0, 5, 18] }}
      frameloop="demand"
      className="h-full w-full"
    >
      <ambientLight intensity={1} color="white" />
      <directionalLight
        intensity={4}
        position={[10, 5, 20]}
        color={"#ede9fe"}
      />
      <mesh>
        <primitive object={loader.scene} />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

export default IntroLaptop
