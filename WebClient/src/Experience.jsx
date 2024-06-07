import { OrbitControls, TransformControls } from '@react-three/drei'
import { useRef, Suspense} from 'react'
import Room from './Room';
import useStore from './Stores/useStore';

const Experience = () =>
{
    const instances = useStore((state) => state.instances);
    return <>
        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <Room />
        {instances}
    </>
}

export default Experience;