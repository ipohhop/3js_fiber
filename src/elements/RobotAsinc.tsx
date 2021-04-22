// outer
import React, {useEffect, FunctionComponent} from 'react'
import {useAnimations, useGLTF} from "@react-three/drei";


interface OwnProps {}

type Props = OwnProps;

const RobotAsinc: FunctionComponent<Props> = (props) => {

    const { nodes,animations } = useGLTF("models/robot/scene.gltf",'/draco-gltf/')
    const { ref, actions, names } = useAnimations(animations)

    useEffect(() => {
        actions["Take 001"].reset().fadeIn(0.5).play()
    }, [ actions, names])

    return (
        <group ref={ref} {...props} dispose={null}>
                <primitive
                    rotation={[0.4,0,0]}
                    scale={"0.08"}
                    object={nodes["000846fff9e546569ee038af7e24655afbx"]} />
        </group>
    )

}


export default RobotAsinc
