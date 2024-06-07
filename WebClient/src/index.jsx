import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Stage } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.01,
            far: 200,
            position: [ 0, 1, 0.1 ]
        } }
    >   
        <Stage 
            preset={'soft'}
            shadows={'false'}
            intensity={0.1}
            adjustCamera={true}
        >
            <group position-y={5.5}>
                <Experience />
            </group>
        </Stage>
    </Canvas>
)