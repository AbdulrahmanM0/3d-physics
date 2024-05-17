import { Box, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics, RigidBody } from "@react-three/rapier"
import Experiance from "./Experiance"

function App() {

  return (
    <>
      <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight position={[-10,10,0]} intensity={0.4} />
        <OrbitControls />
        <Physics debug>


          <RigidBody type="fixed">
            <Box position={[0,0,0]} args={[3,0.4,3]}>
              <meshStandardMaterial color="green"/>
            </Box>
          </RigidBody>

          <Experiance />
        </Physics>
      </Canvas>
    </>
  )
}

export default App
