import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Torus } from '@react-three/drei'
import { useRef } from 'react'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

const FloatingRings = () => {
  const ring1Ref = useRef<Mesh>(null)
  const ring2Ref = useRef<Mesh>(null)
  const ring3Ref = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3
      ring1Ref.current.rotation.y = t * 0.2
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * 0.2
      ring2Ref.current.rotation.z = t * 0.3
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.4
      ring3Ref.current.rotation.z = t * 0.1
    }
  })

  return (
    <>
      <Torus ref={ring1Ref} args={[1.5, 0.05, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.6}
        />
      </Torus>
      <Torus ref={ring2Ref} args={[1.2, 0.05, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#ff9a3c"
          emissive="#ff9a3c"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.5}
        />
      </Torus>
      <Torus ref={ring3Ref} args={[0.9, 0.05, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.4}
        />
      </Torus>
    </>
  )
}

export const FloatingTech: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#00d9ff" />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#ff9a3c" />
        <FloatingRings />
      </Canvas>
    </div>
  )
}