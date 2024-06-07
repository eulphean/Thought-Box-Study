import { TransformControls } from "@react-three/drei";
import Model, {MODEL_TYPE} from "./Model";
import Placeholder from "./Placeholder";
import { Suspense, useRef } from "react";
import useGui from "../Gui";
import Base from "./Base";

// Create the right kind of based based on the model. 
export default function ThoughtBox(props) {
    const [room] = useGui();
    const getGeometry = () => {
        if (props.modelType === MODEL_TYPE.SIT) {
            return (
                <>
                    <Model modelType={props.modelType} position-x={0} rotation-x={0.3} position-y={1.6} scale={6} />
                    <Base modelType={props.modelType} />
                </>
            )
        } else if (props.modelType === MODEL_TYPE.WALK) {
            return (
                <>
                    <Model modelType={props.modelType} position-x={0} position-y={1.} scale={6} />
                    <Base modelType={props.modelType} />
                </>
            )
        } else if (props.modelType === MODEL_TYPE.SQUAT) {
            return (
                <>
                    <Model modelType={props.modelType} position-x={0} position-y={1.0} scale={6} />
                    <Base modelType={props.modelType} />
                </>
            )
        } else if (props.modelType === MODEL_TYPE.LAUGH) {
            return (
                <>
                    <Model modelType={props.modelType} position-x={0} position-y={1} scale={6} />
                    <Base modelType={props.modelType} />
                </>
            )
        }
    }
    const geo = getGeometry();
    const tbRef = useRef();
    return <>
        <group ref={tbRef} position-y={-room.mirrorHeight/2} >
            <Suspense fallback={<Placeholder position-y={1} scale={2} />} >
                {geo}
            
            </Suspense>
        </group>
        <TransformControls object={tbRef} mode="translate" />
    </>
}