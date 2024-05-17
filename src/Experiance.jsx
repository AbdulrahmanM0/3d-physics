import { Box, Plane, Sphere } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import React, { useRef, useState } from 'react'

function Experiance() {
    const [hover,setHover] = useState(false)
    const cubeRef = useRef()

    const handleClick = () => {
        cubeRef.current.applyImpulse({x:0,y:.2,z:0})
    }
  return (
    <>
    <RigidBody colliders="cuboid" gravityScale={1} >
        <Box position={[-1,2,-1]} args={[1,.1,1]} onPointerEnter={()=>setHover(true)} onPointerOut={()=>setHover(false)}  onClick={handleClick}>
            <meshStandardMaterial color={hover ? "blue" : "pink"}  />
        </Box>
    </RigidBody>
    <RigidBody colliders="cuboid" gravityScale={1} >
        <Box position={[0,2,-1]} args={[1,.1,1]} onPointerEnter={()=>setHover(true)} onPointerOut={()=>setHover(false)}  onClick={handleClick}>
            <meshStandardMaterial color={hover ? "blue" : "red"}  />
        </Box>
    </RigidBody>
    <RigidBody colliders="cuboid" gravityScale={1} >
        <Box position={[1,2,-1]} args={[1,.1,1]} onPointerEnter={()=>setHover(true)} onPointerOut={()=>setHover(false)}  onClick={handleClick}>
            <meshStandardMaterial color={hover ? "blue" : "orange"}  />
        </Box>
    </RigidBody>


    <RigidBody colliders="cuboid" gravityScale={1} >
        <Box position={[-1,2,0]} args={[1,.1,1]} onPointerEnter={()=>setHover(true)} onPointerOut={()=>setHover(false)}  onClick={handleClick}>
            <meshStandardMaterial color={hover ? "blue" : "gray"}  />
        </Box>
    </RigidBody>
    <RigidBody colliders="cuboid" gravityScale={1} >
        <Box position={[0,2,0]} args={[1,.1,1]} onPointerEnter={()=>setHover(true)} onPointerOut={()=>setHover(false)}  onClick={handleClick}>
            <meshStandardMaterial color={hover ? "blue" : "blue"}  />
        </Box>
    </RigidBody>
    <RigidBody colliders="cuboid" gravityScale={1} >
        <Box position={[1,2,0]} args={[1,.1,1]} onPointerEnter={()=>setHover(true)} onPointerOut={()=>setHover(false)}  onClick={handleClick}>
            <meshStandardMaterial color={hover ? "blue" : "yellow"}  />
        </Box>
    </RigidBody>
    <RigidBody colliders="cuboid" gravityScale={1} >
        <Box position={[-1,2,1]} args={[1,.1,1]} onPointerEnter={()=>setHover(true)} onPointerOut={()=>setHover(false)}  onClick={handleClick}>
            <meshStandardMaterial color={hover ? "blue" : "black"}  />
        </Box>
    </RigidBody>
    <RigidBody colliders="cuboid" gravityScale={1} >
        <Box position={[0,2,1]} args={[1,.1,1]} onPointerEnter={()=>setHover(true)} onPointerOut={()=>setHover(false)}  onClick={handleClick}>
            <meshStandardMaterial color={hover ? "blue" : "white"}  />
        </Box>
    </RigidBody>
    <RigidBody colliders="cuboid" gravityScale={1} >
        <Box position={[1,2,1]} args={[1,.1,1]} onPointerEnter={()=>setHover(true)} onPointerOut={()=>setHover(false)}  onClick={handleClick}>
            <meshStandardMaterial color={hover ? "blue" : "green"}  />
        </Box>
    </RigidBody>
    







    
    {/* <RigidBody colliders={"ball"} >
        <Sphere position={[0,5,0]} args={[1,32,32]}>
            <meshStandardMaterial color={"blue"} />
        </Sphere>
    </RigidBody> */}
    </>
  )
}

export default Experiance