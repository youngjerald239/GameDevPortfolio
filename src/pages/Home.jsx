import React from 'react'
import {useState, Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import  Loader from '../components/Loader'
import Sky from '../models/Sky'
import Island from '../models/Island'
import Hovercar from '../models/Hovercar'
import Plane from '../models/Plane'


{/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */}

const Home = () => {

  const [isRotating, setIsRotating] = useState()

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

  const adjustHovercarForScreenSize = () => {
    let screenScale, screenPosition
    

    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
    } else 
    {
      screenScale = [3, 2, 2]
      screenPosition=[0, -4, -4]
    }
    
    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
  const [hovercarScale, hovercarPosition, ] = adjustHovercarForScreenSize()

  return (
    <section className="w-full h-screen relative">
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight  postion={[1, 1, 1]} intensity={1}/>
          <ambientLight intensity={-4}/>
          <pointLight postion={[1, 1, 1]} intensity={800}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#b1e1ff" intensity={1}/>
          <Plane 
                     
          /> 
          <Sky />
          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
          <Hovercar 
            isRotating={isRotating}
            hovercarScale={hovercarScale}
            hovercarPosition={hovercarPosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home