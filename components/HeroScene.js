'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

// Soft floating particles / fireflies
function Fireflies({ count = 200 }) {
  const mesh = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.getElapsedTime()
    const pos = mesh.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(t + i) * 0.002
      pos[i * 3] += Math.cos(t * 0.5 + i) * 0.001
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.rotation.y = t * 0.03
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#f5b8c8" transparent opacity={0.8} sizeAttenuation depthWrite={false} />
    </points>
  )
}

// Floating soft petals / flowers
function Petals({ count = 40 }) {
  const group = useRef()
  const petals = useMemo(() => Array.from({ length: count }, (_, i) => ({
    x: (Math.random() - 0.5) * 16,
    y: (Math.random() - 0.5) * 10,
    z: (Math.random() - 0.5) * 6,
    r: Math.random() * Math.PI,
    scale: 0.1 + Math.random() * 0.15,
    color: ['#f5c1cc', '#ffd7bd', '#e0d4f0', '#f8dfe2'][i % 4],
    speed: 0.2 + Math.random() * 0.4,
  })), [count])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.children.forEach((child, i) => {
      const p = petals[i]
      child.position.y = p.y + Math.sin(t * p.speed + i) * 0.5
      child.position.x = p.x + Math.cos(t * p.speed * 0.6 + i) * 0.3
      child.rotation.z = p.r + t * 0.15
    })
  })

  return (
    <group ref={group}>
      {petals.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]} scale={p.scale}>
          <circleGeometry args={[1, 8]} />
          <meshBasicMaterial color={p.color} transparent opacity={0.7} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.8} />
      <Fireflies count={220} />
      <Petals count={50} />
    </Canvas>
  )
}
