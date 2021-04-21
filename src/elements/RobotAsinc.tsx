// outer
import * as THREE from 'three'
import React, {useEffect, useState, Dispatch, SetStateAction, useRef, FunctionComponent} from 'react'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useFrame} from "@react-three/fiber";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import {Group} from "three";
import {useAnimations} from "@react-three/drei";

interface OwnProps {
}

type Props = OwnProps;

const RobotAsinc: FunctionComponent<Props> = (props) => {

    const mesh = useRef()



    const [model, setModel] = useState(new THREE.Group()) as [THREE.Group, Dispatch<SetStateAction<THREE.Group>>];
    const [animation, setAnimation] = useState() as [THREE.AnimationClip[],Dispatch<SetStateAction<THREE.AnimationClip[]>>];

    // const { ref, mixer, names, actions, clips } = useAnimations(animation)

    useEffect(() => {
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();

        dracoLoader.setDecoderPath('../node_modules/three/examples/js/libs/draco');
        loader.setDRACOLoader(dracoLoader);

        loader.load("models/robot/scene.gltf", function (gltf) {
                const robot = gltf.scene
                robot.animations = gltf.animations
                console.log(robot)
            setAnimation(gltf.animations)
                setModel(robot)
            },
            undefined,
            function (error) {
                console.error(error)
            })
    }, [])

    useEffect(()=>{

    },[])

    useFrame(() => {

    })

    // if (model) {
        return (
            <primitive
                ref={mesh}
                scale={"0.08"}
                object={model}
            />
        );
    // }
    // return null

}


export default RobotAsinc
