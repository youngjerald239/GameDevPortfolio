import React from 'react'
import hovercarScene from '../assets/hovercar.glb'
import { useGLTF } from '@react-three/drei'

const Hovercar = () => {
  const { scene, animations } = useGLTF(hovercarScene)
  return (
    <mesh position={[-3, 0, 1]} scale={[0.001, 0.001, 0.001]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Hovercar