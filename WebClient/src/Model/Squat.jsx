import ThoughtBox, {ANIMATION} from "./ThoughtBox";
import Placeholder from "../Placeholder";
import { Suspense } from "react";
import { useGui } from "../Gui";

export default function Squat() {
    const [room] = useGui();
    return <>
        <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />} >
            <ThoughtBox animation={ANIMATION.SQUAT} position-x={0} position-y={-room.mirrorHeight/2} scale={6} />
        </Suspense>
    </>
}