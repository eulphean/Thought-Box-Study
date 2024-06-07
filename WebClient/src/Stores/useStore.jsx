import { create } from "zustand";
import ThoughtBox from "../Model/ThoughtBox";

// A store to save all the ThoughtBox instances
const useStore = create((set) => {
    return {
        instances: [],
        modelType: 'sit',
        transformMode: 'translate',
        updateModelType: (newModelType) => set(() => ({modelType: newModelType})),
        updateTransformMode: (newMode) => set(() => ({transformMode: newMode})),
        addInstance: () => {
            set((state) => {
                const k = state.instances.length;
                const type = state.modelType;
                const i = <ThoughtBox key={k} modelType={type} />
                return {instances: [...state.instances, i]}
            });
        }
    }
});

export default useStore;