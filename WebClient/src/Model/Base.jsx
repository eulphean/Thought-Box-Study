import { MeshReflectorMaterial, MeshRefractionMaterial, MeshTransmissionMaterial } from "@react-three/drei";
import { MODEL_TYPE } from "./Model"
export default function Base(props) {
    const getMat = (color) => {
        return (
            <MeshReflectorMaterial 
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={0.5}
                mirror={0.8}
                color={'red'}
            />
        )
    };

    const getBase = () => {
        if (props.modelType === MODEL_TYPE.SIT) {
            return (
                <mesh {...props}>
                    <boxGeometry />
                    {getMat('lightPink')};
                </mesh>
            );
        } else if (props.modelType === MODEL_TYPE.WALK) {
            return (
                <mesh {...props}>
                    <cylinderGeometry args={[0.75, 0.75, 1, 16]}/>
                    {getMat('lightGreen')};
                </mesh>
            );
        } else if (props.modelType === MODEL_TYPE.LAUGH) {
            return (
                <mesh {...props}>
                    <boxGeometry />
                    {getMat('lightMaroon')};
                </mesh>
            );
        } else if (props.modelType === MODEL_TYPE.SQUAT) {
            return (
                <mesh {...props}>
                    <cylinderGeometry args={[0.75, 0.75, 1, 16]}/>
                    {getMat('white')};
                </mesh>
            );
        }
    }

    const geo = getBase();
    return geo;
}