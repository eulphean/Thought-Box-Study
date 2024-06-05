import { MeshReflectorMaterial } from "@react-three/drei"
import { useLayoutEffect, useRef } from "react";
import * as THREE from 'three'

const NUM_MIRRORS = 10; 
const RADIUS = 12;
const MIRROR_WIDTH = 8;
const MIRROR_HEIGHT = 8;
export default function Mirrors() {
    const angleIncrement = Math.PI * 2 / NUM_MIRRORS;
    const groupRef = useRef();

    useLayoutEffect(() => {
        groupRef.current.children.forEach(c => {
            c.lookAt(new THREE.Vector3(0, 0, 0));
        });
    }, []);
    return <>
        <group ref={groupRef}>
            {[...Array(NUM_MIRRORS)].map((v, i) => 
                <mesh 
                    key={i}
                    position-x={RADIUS * Math.cos(i * angleIncrement)}
                    position-z={RADIUS * Math.sin(i * angleIncrement)}
                >
                    <planeGeometry args={[MIRROR_WIDTH, MIRROR_HEIGHT]}/>
                    <MeshReflectorMaterial 
                        resolution={512}
                        blur={[100, 100]}
                        mixBlur={0.1}
                        mirror={0.5}
                        color={'lightBlue'}
                    />
                </mesh>
            )}
        </group>

        <mesh rotation-x={-Math.PI/2} position-y={-MIRROR_HEIGHT/2}>
            <circleGeometry args={[NUM_MIRRORS*2, NUM_MIRRORS]} />
            <MeshReflectorMaterial 
                resolution={512}
                mirror={0.25}
                color={'lightBlue'}
            />
        </mesh>

        <mesh rotation-x={Math.PI/2} position-y={MIRROR_HEIGHT/2}>
            <circleGeometry args={[NUM_MIRRORS * 2, NUM_MIRRORS]} />
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