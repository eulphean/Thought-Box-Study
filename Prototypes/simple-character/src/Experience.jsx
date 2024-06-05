import { Float, Text, Html, OrbitControls, TransformControls, PivotControls, MeshReflectorMaterial } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Experience()
{
    const cubeRef = useRef();
    const sphereRef = useRef();
    return <>
        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <PivotControls 
            anchor={[0, 0, 0]} 
            depthTest={false} 
            lineWidth={1}
            axisColors={[ "#9381ff", "#ff4d6d", "#7ae582" ]}
            scale={1}
        >
            <mesh ref={sphereRef} position-x={ - 2 } scale={1}>
                <sphereGeometry />
                {/* <meshStandardMaterial color="orange" /> */}
                <Html 
                    wrapperClass="label" 
                    position={[1, 1, 0]}
                    distanceFactor={5}
                    // occlude={[cubeRef, sphereRef]}
                >   Jammy Pants
                </Html>
            </mesh>
        </PivotControls>

        <mesh ref={cubeRef} position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={cubeRef} mode={'translate'} />

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
            <MeshReflectorMaterial 
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={1}
                mirror={0.5}
                color={'lightBlue'}
            />
        </mesh>

        <Float
            speed={2}
            floatIntensity={3}
            >
            <Text
                font={"./bangers-v20-latin-regular.woff"}
                fontSize={1}
                // color={"blue"}
                position-y={2}
                maxWidth={1}
                textAlign='center'
            >
                <meshStandardMaterial color={"red"} side={THREE.DoubleSide} />
                Chacha Bihari
            </Text>
        </Float>
    </>
}