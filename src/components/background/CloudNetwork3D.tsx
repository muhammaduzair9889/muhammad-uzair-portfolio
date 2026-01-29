import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo, useEffect, useState } from 'react'

interface CloudNetworkProps {
  opacity?: number
}

const CloudNetworkScene: React.FC<CloudNetworkProps> = ({ opacity = 0.65 }) => {
  const groupRef = useRef<THREE.Group>(null)
  const nodeRefs = useRef<THREE.Mesh[]>([])
  const linesRef = useRef<THREE.LineSegments[]>([])
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Cloud infrastructure-themed nodes representing different cloud components
  const nodes = useMemo(
    () =>
      Array.from({ length: 12 }, (_, idx) => {
        const spread = isMobile ? 3.5 : 6
        const heightSpread = isMobile ? 2.2 : 3.5
        const depthSpread = isMobile ? 2.8 : 5

        return {
          position: new THREE.Vector3(
            THREE.MathUtils.randFloatSpread(spread),
            THREE.MathUtils.randFloatSpread(heightSpread),
            THREE.MathUtils.randFloatSpread(depthSpread)
          ),
          offset: Math.random() * Math.PI * 2,
          size: isMobile ? THREE.MathUtils.randFloat(0.05, 0.08) : THREE.MathUtils.randFloat(0.06, 0.1),
          type: ['database', 'server', 'container', 'network'][idx % 4],
          color: ['#38bdf8', '#0ea5e9', '#7dd3fc', '#0284c7'][idx % 4] // Different shades of cloud blue
        }
      }),
    [isMobile]
  )

  const connections = useMemo(
    () => [
      [0, 3],
      [1, 4],
      [2, 5],
      [3, 6],
      [4, 7],
      [5, 8],
      [6, 9],
      [7, 10],
      [8, 11],
      [1, 7],
      [2, 9]
    ],
    []
  )

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.04
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.05
    }

    nodeRefs.current.forEach((mesh, idx) => {
      const base = nodes[idx].position
      mesh.position.set(base.x, base.y + Math.sin(t + nodes[idx].offset) * 0.25, base.z)
      // Rotate diamonds for visual effect
      mesh.rotation.x += 0.005
      mesh.rotation.y += 0.008
    })

    linesRef.current.forEach((line) => {
      const material = line.material as THREE.LineBasicMaterial
      material.opacity = 0.4 + Math.sin(t) * 0.2
    })
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 4, 6]} intensity={1.1} color="#38bdf8" />
      <pointLight position={[-5, -3, -4]} intensity={0.7} color="#0ea5e9" />
      <spotLight position={[0, 6, 2]} intensity={0.5} color="#7dd3fc" angle={0.6} penumbra={0.5} />

      {/* Cloud infrastructure diamond nodes - representing cloud services */}
      {nodes.map((node, idx) => (
        <mesh
          key={`node-${idx}`}
          ref={(el) => {
            if (el) nodeRefs.current[idx] = el
          }}
          position={node.position}
        >
          <octahedronGeometry args={[node.size, 0]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.7}
            transparent
            opacity={opacity + 0.1}
            wireframe={false}
            metalness={0.4}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Connection lines representing data flow between cloud services */}
      {connections.map((pair, idx) => {
        const start = nodes[pair[0]].position
        const end = nodes[pair[1]].position
        const geometry = new THREE.BufferGeometry().setFromPoints([start, end])
        const lineColor = ['#38bdf8', '#0ea5e9', '#7dd3fc'][idx % 3]
        return (
          <lineSegments
            key={`line-${idx}`}
            ref={(el) => {
              if (el && el instanceof THREE.LineSegments) linesRef.current[idx] = el
            }}
            geometry={geometry}
          >
            <lineBasicMaterial color={lineColor} transparent opacity={0.45} linewidth={2} />
          </lineSegments>
        )
      })}
    </group>
  )
}

export const CloudNetwork3D: React.FC<CloudNetworkProps> = ({ opacity = 0.65 }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <Canvas
        className="absolute inset-0 opacity-100"
        camera={{
          position: isMobile ? [0, 0, 5] : [0, 0, 7],
          fov: isMobile ? 45 : 55
        }}
        gl={{ alpha: true, antialias: true }}
        dpr={isMobile ? 1 : 2}
      >
        <CloudNetworkScene opacity={opacity} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/85 via-dark-bg/50 to-dark-bg" />
    </div>
  )
}
