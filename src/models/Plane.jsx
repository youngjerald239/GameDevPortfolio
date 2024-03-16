import React from 'react'
import planeScene from '../assets/plane.glb'
import { useGLTF } from '@react-three/drei'

const Plane = () => {
  const { scene, animations } = useGLTF(planeScene)
  return (
    <mesh position={[-3, 2, 1]} scale={[0.08, 0.08, 0.08]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane