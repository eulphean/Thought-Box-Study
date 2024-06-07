import { useControls } from 'leva' 

export const useGui = () => {
    const room = useControls('Room', {
        numMirrors: { value: 32, min: 16, max: 50, step: 1},
        radius: {value: 40, min:20, max: 100, step: 1},
        mirrorHeight: {value: 25, min: 20, max: 150, step: 1},
        mirrorWidth: {value: 8, min: 5, max:50, step: 1}
    });

    const thoughtBox = useControls('ThoughtBox', {
        num: {value: 1, min: 0, max: 1, step: 1}
    });

    return [room, thoughtBox];
}
