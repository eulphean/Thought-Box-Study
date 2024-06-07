import { MeshReflectorMaterial, MeshTransmissionMaterial } from "@react-three/drei"
import { useLayoutEffect, useRef } from "react";
import * as THREE from 'three'
import useGui from "./Gui.jsx";

export default function Room() {
    const groupRef = useRef();
    // Point all the mirrors towards the center.
    useLayoutEffect(() => {
        groupRef.current.children.forEach(c => {
            c.lookAt(new THREE.Vector3(0, 0, 0));
        });
    }, []);

    const getMat = () => {
        return (
            <MeshReflectorMaterial 
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={0.5}
                mirror={0.8}
                color={'lightPink'}
            />
        )
    }

    // GUI
    const [room] = useGui();
    const angleIncrement = Math.PI * 2 / room.numMirrors;
    return <>
        <group ref={groupRef}>
            {[...Array(room.numMirrors)].map((v, i) => 
                <mesh 
                    key={i}
                    position-x={room.radius * Math.cos(i * angleIncrement)}
                    position-z={room.radius * Math.sin(i * angleIncrement)}
                >
                    <planeGeometry args={[room.mirrorWidth, room.mirrorHeight]}/>
                    {getMat()}
                </mesh>
            )}
        </group>

        <mesh rotation-x={-Math.PI/2} position-y={-room.mirrorHeight/2}>
            <circleGeometry args={[room.radius * 1.1, 16]} />
            {getMat()}
        </mesh>

        <mesh rotation-x={Math.PI/2} position-y={room.mirrorHeight/2}>
            <circleGeometry args={[room.radius * 1.1, 16]} />
            {getMat()}
        </mesh>
    </>
}