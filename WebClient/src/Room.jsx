import { MeshReflectorMaterial } from "@react-three/drei"
import { useLayoutEffect, useRef } from "react";
import * as THREE from 'three'

import { useGui } from "./Gui.jsx";
const NUM_MIRRORS = 32; 
const RADIUS = 40;
const MIRROR_WIDTH = 8;
const MIRROR_HEIGHT = 24;

console.log(useGui);
export default function Room() {
    const groupRef = useRef();
    // Point all the mirrors towards the center.
    useLayoutEffect(() => {
        groupRef.current.children.forEach(c => {
            c.lookAt(new THREE.Vector3(0, 0, 0));
        });
    }, []);

    // GUI
    const [room] = useGui();
    const angleIncrement = Math.PI * 2 / room.numMirrors;
    return <>
        <group ref={groupRef}>
            {[...Array(room.numMirrors)].map((v, i) => 
                <mesh 
                    key={i}
                    position-x={RADIUS * Math.cos(i * angleIncrement)}
                    position-z={RADIUS * Math.sin(i * angleIncrement)}
                >
                    <planeGeometry args={[room.mirrorWidth, room.mirrorHeight]}/>
                    <MeshReflectorMaterial 
                        resolution={512}
                        blur={[100, 100]}
                        mixBlur={0.5}
                        mirror={0.8}
                        color={'lightBlue'}
                    />
                </mesh>
            )}
        </group>

        <mesh rotation-x={-Math.PI/2} position-y={-room.mirrorHeight/2}>
            <circleGeometry args={[room.radius * 1.1, 16]} />
            <MeshReflectorMaterial 
                resolution={512}
                mirror={0.25}
                color={'lightBlue'}
            />
        </mesh>

        <mesh rotation-x={Math.PI/2} position-y={room.mirrorHeight/2}>
            <circleGeometry args={[room.radius * 1.1, 16]} />
            <MeshReflectorMaterial 
                resolution={512}
                blur={[100, 100]}
                mixBlur={0.5}
                mirror={0.5}
                color={'lightBlue'}
            />
        </mesh>
    </>
}