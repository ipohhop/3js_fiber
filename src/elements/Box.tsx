// outer
import React, {FunctionComponent, useRef, useState} from 'react'
import { useFrame } from '@react-three/fiber'

// local



interface OwnProps {
    position : any
}

type Props = OwnProps;

const Box: FunctionComponent<Props> = (props) => {
// This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {

        // @ts-ignore
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
    return (

        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
};

export default Box;
