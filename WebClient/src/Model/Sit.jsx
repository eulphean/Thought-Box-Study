import ThoughtBox, {ANIMATION} from "./ThoughtBox";
import Placeholder from "../Placeholder";
import { Suspense } from "react";

export default function Sit() {
    return <>
        <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />} >
            <ThoughtBox animation={ANIMATION.SIT} position-x={0} position-y={-8} scale={6} />
        </Suspense>
    </>
}