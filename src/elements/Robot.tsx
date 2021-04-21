import * as THREE from 'three'
import React, {useEffect, useState, Dispatch, SetStateAction, useRef, FunctionComponent} from 'react'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {Canvas, useFrame} from "@react-three/fiber";

import {OrbitControls} from "@react-three/drei"
interface OwnProps {}

type Props = OwnProps;

const Model: FunctionComponent<Props> = (props) => {

    const [model, setModel] = useState() as unknown as [THREE.Group, Dispatch<SetStateAction<THREE.Group>>];

    const robot = useRef()


    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load("models/robot/scene.gltf", function (gltf) {
            setModel(gltf.scene)
        }, undefined, function (error) {
            console.error(error)
        })
    }, [])

    // useFrame(() => {
        // @ts-ignore
        // robot.current.rotation.x = robot.current.rotation.y += 0.01
    // },1)


    return (
        <>
            <Canvas className="canvas" style={{height: "600px"}}>

                <OrbitControls/>
                <ambientLight intensity={0.5}/>
                {model && <primitive
                    ref = {robot}
                    scale={"0.08"}
                    object={model}
                    />}

            </Canvas>
        </>
    )
}


export default Model
