import React from 'react'
import hovercarScene from '../assets/hovercar.glb'
import { useGLTF } from '@react-three/drei'

const Hovercar = ({isRotating, ...props}) => {
  const { scene, animations } = useGLTF(hovercarScene)
  return (
    <mesh {...props} position={[-3, 0, 1]} scale={[0.001, 0.00115, 0.00113]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Hovercar