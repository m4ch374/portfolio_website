/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/no-unknown-property */
import { PointMaterial, Points } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useInView } from "framer-motion"
import { random } from "maath"
import React, { Suspense, useRef, useState } from "react"

const AllStars = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref: any = useRef()
  const [stars] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 }),
  )

  useFrame((_, delta) => {
    if (!ref.current) return

    ref.current.rotation.x += delta / 10
    ref.current.rotation.y += delta / 20
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ref={ref}
        positions={stars as Float32Array}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          color="white"
          transparent
          size={0.002}
          sizeAttenuation
          dethWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsBackground: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null!)
  const inView = useInView(ref)

  return (
    <div ref={ref} className="absolute left-0 top-0 -z-50 h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        frameloop={inView ? "always" : "demand"}
      >
        <Suspense fallback={false}>
          <AllStars />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarsBackground
