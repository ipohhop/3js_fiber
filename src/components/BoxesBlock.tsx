// outer
import React, {FunctionComponent} from 'react'
import {Canvas} from '@react-three/fiber'


// local
import Box from "../elements/Box";




interface OwnProps {
}

type Props = OwnProps;

const BoxesBlock: FunctionComponent<Props> = (props) => {

    return (
        <Canvas>
            <ambientLight intensity={0.5}/>
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
            <pointLight position={[-10, -10, -10]}/>
            <Box position={[-1.2, 0, 0]}/>
            <Box position={[1.2, 0, 0]}/>
        </Canvas>
    )
};

export default BoxesBlock;
