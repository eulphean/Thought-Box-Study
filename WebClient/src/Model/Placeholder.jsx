export default function Placeholder(props) {
    return <>
        <mesh {...props} >
            <boxGeometry />
            <meshBasicMaterial wireframe color="lightBlue" />
        </mesh>
    </>
}