// outer
import * as THREE from 'three'
import React, {useEffect, useState, Dispatch, SetStateAction, useRef, FunctionComponent} from 'react'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useFrame} from "@react-three/fiber";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import {Group} from "three";
import {useAnimations, useGLTF} from "@react-three/drei";

interface OwnProps {
}

type Props = OwnProps;

const RobotAsinc: FunctionComponent<Props> = (props) => {

    const mesh = useRef()

    let animation

    const { nodes,animations } = useGLTF("models/robot/scene.gltf",'/draco-gltf/')



    const { ref, mixer, names, actions, clips } = useAnimations(animations)



    useEffect(()=>{
        console.log(nodes)

        // @ts-ignore
        mesh.current.object = nodes
    },[])

    useFrame(() => {

    })

    // if (model) {
        return (
            <primitive
                ref={mesh}
                scale={"0.08"}
                object={nodes}
            />
        );
    // }
    // return null

}


export default RobotAsinc
