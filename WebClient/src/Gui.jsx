import { useControls, button } from 'leva' 
import useStore from './Stores/useStore';
import { MODEL_TYPE } from './Model/Model';

export const TRANSFORM_MODE = {
    Translate: 'translate',
    Rotate: 'rotate',
    Scale: 'scale'
};

export default function useGui() {
    const room = useControls('Room', {
        numMirrors: { value: 32, min: 16, max: 50, step: 1},
        radius: {value: 60, min:20, max: 100, step: 1},
        mirrorHeight: {value: 25, min: 20, max: 150, step: 1},
        mirrorWidth: {value: 12, min: 5, max:50, step: 1}
    });

    // Retrieve the state update function from the store.
    const addInstance = useStore(state => state.addInstance);
    const updateModelType = useStore(state => state.updateModelType);
    const updateTransformMode = useStore(state => state.updateTransformMode)
    const thoughtBox = useControls('ThoughtBox', {
        num: {value: 10, min: 16, max: 10, step: 1},
        type: {
            options: {Sit: MODEL_TYPE.SIT, Walk: MODEL_TYPE.WALK, Squat: MODEL_TYPE.SQUAT, Laugh: MODEL_TYPE.LAUGH},
            onChange: (v) => updateModelType(v)
        },
        create: button(() => { 
            addInstance()
        }),
        controls: false,
        mode: {
            options: {Translate: TRANSFORM_MODE.Translate, Rotate: TRANSFORM_MODE.Rotate, Scale: TRANSFORM_MODE.Scale},
            onChange: (v) => updateTransformMode(v)
        }
    });

    return [room, thoughtBox];
}
