// outer
import * as THREE from 'three'
import React, {useEffect, useState, Dispatch, SetStateAction, useRef, FunctionComponent} from 'react'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";


interface OwnProps {}

type Props = OwnProps;

const Robot: FunctionComponent<Props> = (props) => {

    const mesh = useRef()
    const [model, setModel] = useState(new THREE.Group()) as [THREE.Group, Dispatch<SetStateAction<THREE.Group>>];

    useEffect(() => {
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();

        dracoLoader.setDecoderPath('../node_modules/three/examples/js/libs/draco');
        loader.setDRACOLoader(dracoLoader);

        loader.load("models/robot/scene.gltf", function (gltf) {
                const robot = gltf.scene
                robot.animations = gltf.animations
                console.log(robot)

                setModel(robot)
            },
            undefined,
            function (error) {
                console.error(error)
            })
    }, [])

    return (
        <primitive
            ref={mesh}
            scale={"0.08"}
            object={model}
        />
    );

}


export default Robot
