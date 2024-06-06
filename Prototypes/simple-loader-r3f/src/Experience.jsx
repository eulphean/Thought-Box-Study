import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import Placeholder from './Placeholder.jsx'
import ThoughtBox from './ThoughtBox.jsx'

export default function Experience()
{
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={0.04} />
        <ambientLight intensity={ 0.5 } />

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />} >
            <ThoughtBox animation={"sit"} position-x={-3} position-y={-1} scale={2} />
        </Suspense>

        <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />} >
            <ThoughtBox animation={"squats"} position-x={0} position-y={-1} scale={2} />
        </Suspense>

        <Suspense fallback={<Placeholder position-x={3} scale={[2, 3, 2]} />} >
            <ThoughtBox animation={"walk"} position-x={3} position-y={-1} scale={2} />
        </Suspense>
    </>
}