import { OrbitControls, TransformControls } from '@react-three/drei'
import { useRef } from 'react'
import Mirrors from './Mirrors';

export default function Experience()
{
    const cubeRef = useRef();
    return <>
        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh ref={cubeRef}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={cubeRef} mode="translate" />
        
        <Mirrors />
    </>
}