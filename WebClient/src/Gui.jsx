import { useControls, button } from 'leva' 
import useStore from './Stores/useStore';
import { MODEL_TYPE } from './Model/Model';

export default function useGui() {
    const room = useControls('Room', {
        numMirrors: { value: 32, min: 16, max: 50, step: 1},
        radius: {value: 40, min:20, max: 100, step: 1},
        mirrorHeight: {value: 25, min: 20, max: 150, step: 1},
        mirrorWidth: {value: 8, min: 5, max:50, step: 1}
    });

    // Retrieve the state update function from the store.
    const addInstance = useStore(state => state.addInstance);
    const updateModelType = useStore(state => state.updateModelType);
    const thoughtBox = useControls('ThoughtBox', {
        num: {value: 10, min: 16, max: 10, step: 1},
        type: {
            options: {Sit: MODEL_TYPE.SIT, Walk: MODEL_TYPE.WALK, Squat: MODEL_TYPE.SQUAT, Laugh: MODEL_TYPE.LAUGH},
            onChange: (v) => updateModelType(v)
        },
        create: button(() => { 
            addInstance()
        })
    });

    return [room, thoughtBox];
}
