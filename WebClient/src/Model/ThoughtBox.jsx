import { TransformControls } from "@react-three/drei";
import Model, {MODEL_TYPE} from "./Model";
import Placeholder from "./Placeholder";
import { Suspense, useRef } from "react";
import useGui from "../Gui";
import Base from "./Base";
import useStore from "../Stores/useStore";

// Create the right kind of based based on the model. 
export default function ThoughtBox(props) {
    const [room, thoughtBox] = useGui();
    const getGeometry = () => {
        if (props.modelType === MODEL_TYPE.SIT) {
            return (
                <>
                    <Model modelType={props.modelType} position-x={0} rotation-x={0.39} position-z={0.1} position-y={2.0} scale={6} />
                    <Base modelType={props.modelType} position-y={1} scale={[7, 2, 5]} />
                </>
            )
        } else if (props.modelType === MODEL_TYPE.WALK) {
            return (
                <>
                    <Model modelType={props.modelType} position-x={0} position-y={1.} scale={6} />
                    <Base modelType={props.modelType} position-y={0.5} scale={[8, 1, 8]}/>
                </>
            )
        } else if (props.modelType === MODEL_TYPE.SQUAT) {
            return (
                <>
                    <Model modelType={props.modelType} position-x={0} position-y={1.0} scale={6} />
                    <Base modelType={props.modelType} position-y={0.5} scale={[8, 1, 8]} />
                </>
            )
        } else if (props.modelType === MODEL_TYPE.LAUGH) {
            return (
                <>
                    <Model modelType={props.modelType} position-x={0} position-y={1} scale={6} />
                    <Base modelType={props.modelType} position-y={1.8} position-z={-1} scale={[7, 3.6, 4]} />
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
        {thoughtBox.controls ? <TransformControls object={tbRef} visible mode="translate" /> : <></>}
     
    </>
}