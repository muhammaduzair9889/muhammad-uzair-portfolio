import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Sphere, Line } from '@react-three/drei'
import { useRef } from 'react'
import { Group, Vector3 } from 'three'
import { useFrame } from '@react-three/fiber'

const NetworkNodes = () => {
  const groupRef = useRef<Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
    }
  })

  // Create network node positions
  const nodes = [
    new Vector3(0, 0, 0),
    new Vector3(2, 1, 0),
    new Vector3(-2, 1, 0),
    new Vector3(0, 2, 1),
    new Vector3(1.5, -1, 0.5),
    new Vector3(-1.5, -1, 0.5),
    new Vector3(0, -2, -0.5),
  ]

  // Create connections between nodes
  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 3], [2, 3], [4, 6], [5, 6], [1, 4], [2, 5]
  ]

  return (
    <group ref={groupRef}>
      {/* Draw nodes */}
      {nodes.map((pos, idx) => (
        <Sphere key={idx} position={pos} args={[0.15, 16, 16]}>
          <meshStandardMaterial
            color="#00d9ff"
            emissive="#00d9ff"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>
      ))}
      
      {/* Draw connections */}
      {connections.map(([start, end], idx) => (
        <Line
          key={idx}
          points={[nodes[start], nodes[end]]}
          color="#00d9ff"
          lineWidth={1}
          opacity={0.4}
          transparent
        />
      ))}
    </group>
  )
}

export const CubeVisualization: React.FC = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border border-dark-tertiary/50 bg-dark-secondary/30">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00d9ff" />
        <pointLight position={[-5, -5, 5]} intensity={0.6} color="#ff9a3c" />
        <NetworkNodes />
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}
