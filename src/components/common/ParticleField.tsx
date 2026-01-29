import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Sphere } from '@react-three/drei'
import { useRef } from 'react'
import { Group } from 'three'
import { useFrame } from '@react-three/fiber'

const CloudInfrastructure = () => {
  const groupRef = useRef<Group>(null)
  const orbitsRef = useRef<Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15
    }
    if (orbitsRef.current) {
      orbitsRef.current.rotation.y = clock.getElapsedTime() * 0.3
    }
  })

  return (
    <>
      {/* Central core */}
      <Sphere args={[0.4, 32, 32]}>
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>

      {/* Orbiting nodes */}
      <group ref={orbitsRef}>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2
          const radius = 2.5
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          const y = Math.sin(i) * 0.5

          return (
            <Sphere key={i} position={[x, y, z]} args={[0.2, 16, 16]}>
              <meshStandardMaterial
                color={i % 2 === 0 ? "#00d9ff" : "#ff9a3c"}
                emissive={i % 2 === 0 ? "#00d9ff" : "#ff9a3c"}
                emissiveIntensity={0.4}
                metalness={0.7}
                roughness={0.3}
              />
            </Sphere>
          )
        })}
      </group>

      {/* Outer ring */}
      <group ref={groupRef}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const angle = (i / 8) * Math.PI * 2
          const radius = 4
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius

          return (
            <Sphere key={i} position={[x, 0, z]} args={[0.12, 12, 12]}>
              <meshStandardMaterial
                color="#00d9ff"
                emissive="#00d9ff"
                emissiveIntensity={0.3}
                metalness={0.6}
                roughness={0.4}
                opacity={0.8}
                transparent
              />
            </Sphere>
          )
        })}
      </group>
    </>
  )
}

export const ParticleField: React.FC = () => {
  return (
    <div className="w-full h-80 rounded-lg overflow-hidden border border-dark-tertiary/50 bg-dark-secondary/30">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#00d9ff" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ff9a3c" />
        <CloudInfrastructure />
      </Canvas>
    </div>
  )
}
