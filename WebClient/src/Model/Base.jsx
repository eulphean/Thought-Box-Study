import { MeshReflectorMaterial } from "@react-three/drei";
import { MODEL_TYPE } from "./Model"
export default function Base(props) {
    const getBase = () => {
        if (props.modelType === MODEL_TYPE.SIT) {
            return (
                <mesh position-y={0.5} scale={[7, 2, 5]}>
                    <boxGeometry />
                    <MeshReflectorMaterial 
                        resolution={512}
                        mirror={1.}
                        color={'lightBlue'}
                    />
                </mesh>
            );
        } else if (props.modelType === MODEL_TYPE.WALK) {
            return (
                <mesh position-y={1} scale={[8, 1, 8]}>
                    <cylinderGeometry args={[0.75, 0.75, 1, 16]}/>
                    <MeshReflectorMaterial 
                        resolution={512}
                        mirror={1.}
                        color={'lightBlue'}
                    />
                </mesh>
            );
        } else if (props.modelType === MODEL_TYPE.LAUGH) {
            return (
                <mesh position-y={1.8} position-z={-1} scale={[7, 3.6, 4]}>
                    <boxGeometry />
                    <MeshReflectorMaterial 
                        resolution={512}
                        mirror={1.}
                        color={'lightBlue'}
                    />
                </mesh>
            );
        } else if (props.modelType === MODEL_TYPE.SQUAT) {
            return (
                <mesh position-y={1} scale={[8, 1, 8]}>
                    <cylinderGeometry args={[0.75, 0.75, 1, 16]}/>
                    <MeshReflectorMaterial 
                        resolution={512}
                        mirror={1.}
                        color={'lightBlue'}
                    />
                </mesh>
            );
        }
    }

    const geo = getBase();
    return geo;
}