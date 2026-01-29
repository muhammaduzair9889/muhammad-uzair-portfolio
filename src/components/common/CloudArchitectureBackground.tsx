import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Sphere, Line } from '@react-three/drei'
import { useRef, useMemo, useState, useEffect } from 'react'
import { Group, Vector3 } from 'three'

interface CloudNode {
  position: Vector3
  connections: number[]
  size: number
}

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

const DataFlowParticle = ({ start, end, delay }: { start: Vector3; end: Vector3; delay: number }) => {
  const particleRef = useRef<any>(null)

  useFrame(({ clock }) => {
    if (particleRef.current) {
      const t = ((clock.getElapsedTime() * 0.2 + delay) % 1)
      const pos = new Vector3().lerpVectors(start, end, t)
      particleRef.current.position.copy(pos)
      
      // Fade in/out effect
      const opacity = Math.sin(t * Math.PI) * 0.7
      particleRef.current.material.opacity = opacity
    }
  })

  return (
    <Sphere ref={particleRef} args={[0.06, 8, 8]}>
      <meshStandardMaterial 
        color="#00d9ff" 
        emissive="#00d9ff"
        emissiveIntensity={0.6}
        transparent 
        opacity={0.8} 
      />
    </Sphere>
  )
}

const CloudArchitecture = () => {
  const groupRef = useRef<Group>(null)

  // Define cloud nodes (services) - larger diamond/octahedron structure
  const isMobile = useMediaQuery('(max-width: 768px)')
  const nodes: CloudNode[] = useMemo(() => {
    const nodeList: CloudNode[] = []
    const size = isMobile ? 2.8 : 4.5 // Smaller on mobile, wider on desktop
    const baseSize = isMobile ? 0.7 : 1.0 // Scale down node sizes on mobile
    
    // Central core node - larger
    nodeList.push({ position: new Vector3(0, 0, 0), connections: [1, 2, 3, 4, 5, 6], size: 0.45 * baseSize })
    
    // Top vertex
    nodeList.push({ position: new Vector3(0, size, 0), connections: [2, 3, 4, 5, 7, 8, 9, 10], size: 0.4 * baseSize })
    
    // Middle square (4 corners) - wider
    nodeList.push({ position: new Vector3(size, 0, 0), connections: [3, 6, 7, 11], size: 0.35 * baseSize })
    nodeList.push({ position: new Vector3(0, 0, size), connections: [4, 6, 8, 12], size: 0.35 * baseSize })
    nodeList.push({ position: new Vector3(-size, 0, 0), connections: [5, 6, 9, 13], size: 0.35 * baseSize })
    nodeList.push({ position: new Vector3(0, 0, -size), connections: [2, 6, 10, 14], size: 0.35 * baseSize })
    
    // Bottom vertex
    nodeList.push({ position: new Vector3(0, -size, 0), connections: [11, 12, 13, 14], size: 0.4 * baseSize })
    
    // Upper mid-edge nodes
    nodeList.push({ position: new Vector3(size * 0.7, size * 0.55, size * 0.7), connections: [11], size: 0.25 * baseSize })
    nodeList.push({ position: new Vector3(-size * 0.7, size * 0.55, size * 0.7), connections: [12], size: 0.25 * baseSize })
    nodeList.push({ position: new Vector3(-size * 0.7, size * 0.55, -size * 0.7), connections: [13], size: 0.25 * baseSize })
    nodeList.push({ position: new Vector3(size * 0.7, size * 0.55, -size * 0.7), connections: [14], size: 0.25 * baseSize })
    
    // Lower mid-edge nodes
    nodeList.push({ position: new Vector3(size * 0.7, -size * 0.55, size * 0.7), connections: [], size: 0.25 * baseSize })
    nodeList.push({ position: new Vector3(-size * 0.7, -size * 0.55, size * 0.7), connections: [], size: 0.25 * baseSize })
    nodeList.push({ position: new Vector3(-size * 0.7, -size * 0.55, -size * 0.7), connections: [], size: 0.25 * baseSize })
    nodeList.push({ position: new Vector3(size * 0.7, -size * 0.55, -size * 0.7), connections: [], size: 0.25 * baseSize })
    
    // Additional nodes at middle layer for density
    nodeList.push({ position: new Vector3(size * 0.5, 0, size * 0.5), connections: [2, 3], size: 0.2 * baseSize })
    nodeList.push({ position: new Vector3(-size * 0.5, 0, size * 0.5), connections: [3, 4], size: 0.2 * baseSize })
    nodeList.push({ position: new Vector3(-size * 0.5, 0, -size * 0.5), connections: [4, 5], size: 0.2 * baseSize })
    nodeList.push({ position: new Vector3(size * 0.5, 0, -size * 0.5), connections: [5, 2], size: 0.2 * baseSize })
    
    return nodeList
  }, [isMobile])

  // Subtle rotation - slower, more professional
  useFrame(({ clock, camera }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.08) * 0.3
    }
    
    // Subtle camera drift
    camera.position.x = Math.sin(clock.getElapsedTime() * 0.03) * 1
    camera.position.y = 1 + Math.cos(clock.getElapsedTime() * 0.04) * 0.5
    camera.lookAt(0, 0, 0)
  })

  return (
    <group ref={groupRef}>
      {/* Cloud nodes with enhanced professional styling */}
      {nodes.map((node, idx) => {
        const isAccent = idx % 5 === 0
        return (
          <Sphere key={`node-${idx}`} position={node.position} args={[node.size, 24, 24]}>
            <meshStandardMaterial
              color={isAccent ? "#ff9a3c" : "#00d9ff"}
              emissive={isAccent ? "#ff9a3c" : "#00d9ff"}
              emissiveIntensity={idx === 0 ? 0.9 : 0.65}
              metalness={0.8}
              roughness={0.15}
              transparent
              opacity={0.95}
            />
          </Sphere>
        )
      })}

      {/* Connection lines with enhanced visibility */}
      {nodes.map((node, idx) =>
        node.connections.map((targetIdx, connIdx) => {
          if (targetIdx < nodes.length) {
            return (
              <Line
                key={`line-${idx}-${connIdx}`}
                points={[node.position, nodes[targetIdx].position]}
                color="#00d9ff"
                lineWidth={2.5}
                transparent
                opacity={0.5}
              />
            )
          }
          return null
        })
      )}

      {/* Data flow particles */}
      {nodes.map((node, idx) =>
        node.connections.map((targetIdx, connIdx) => {
          if (targetIdx < nodes.length) {
            return (
              <DataFlowParticle
                key={`particle-${idx}-${connIdx}`}
                start={node.position}
                end={nodes[targetIdx].position}
                delay={idx * 0.2 + connIdx * 0.3}
              />
            )
          }
          return null
        })
      )}

      {/* Ambient glow spheres - enhanced */}
      {[0, 1, 2, 3, 4, 5, 6].map((idx) => {
        if (idx < nodes.length) {
          return (
            <Sphere key={`glow-${idx}`} position={nodes[idx].position} args={[nodes[idx].size * 2.5, 16, 16]}>
              <meshBasicMaterial
                color={idx % 5 === 0 ? "#ff9a3c" : "#00d9ff"}
                transparent
                opacity={0.15}
              />
            </Sphere>
          )
        }
        return null
      })}
    </group>
  )
}

export const CloudArchitectureBackground: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas>
        <PerspectiveCamera 
          makeDefault 
          position={isMobile ? [0, 1, 12] : [0, 1.5, 16]} 
          fov={isMobile ? 50 : 45} 
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[12, 12, 12]} intensity={1.2} color="#00d9ff" />
        <pointLight position={[-12, -12, 12]} intensity={0.9} color="#ff9a3c" />
        <pointLight position={[0, 12, -12]} intensity={0.7} color="#00d9ff" />
        <CloudArchitecture />
      </Canvas>
    </div>
  )
}
