import React from 'react'
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import  Loader from '../components/Loader'
import Sky from '../models/Sky'
import Island from '../models/Island'


{/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */}

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
      screenPosition = [0, -6.5, -43]
    } else 
    {
      screenScale = [0.3, 2, 2]
    }
    
    return [screenScale, screenPosition, rotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()

  return (
    <section className="w-full h-screen relative">
      <Canvas className="w-full h-screen bg-transparent" camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight  postion={[1, 1, 1]} intensity={1}/>
          <ambientLight intensity={-4}/>
          <pointLight postion={[1, 1, 1]} intensity={5000}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#b1e1ff" intensity={1}/>
          <Sky />
          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home