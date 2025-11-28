'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function RotatingCloud() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        opacity={0.6}
        transparent
        emissive="#60a5fa"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

function OrbitingNode({ position, delay = 0 }: { position: [number, number, number]; delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime + delay
      meshRef.current.position.x = position[0] + Math.sin(time) * 0.2
      meshRef.current.position.y = position[1] + Math.cos(time) * 0.2
      meshRef.current.position.z = position[2] + Math.sin(time * 0.5) * 0.2
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.15, 0.15, 0.15]} />
      <meshStandardMaterial
        color="#10b981"
        emissive="#34d399"
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

function PulsingSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      meshRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial
        color="#6366f1"
        emissive="#818cf8"
        emissiveIntensity={0.6}
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

export default function DevOpsScene() {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ touchAction: 'none' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />
        <RotatingCloud />
        <PulsingSphere />
        <OrbitingNode position={[1.5, 1, 0]} delay={0} />
        <OrbitingNode position={[-1.5, -1, 0]} delay={1} />
        <OrbitingNode position={[0, 1.5, 1]} delay={2} />
        <OrbitingNode position={[0, -1.5, -1]} delay={0.5} />
        <OrbitControls 
          enableZoom={false} 
          autoRotate={false}
          autoRotateSpeed={0.5}
          enablePan={false}
          enableRotate={true}
          touches={{
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.DOLLY_PAN
          }}
        />
      </Canvas>
    </div>
  )
}
