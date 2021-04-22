import React, {FunctionComponent} from 'react';
import RobotAsinc from "./RobotAsinc";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";


interface OwnProps {}

type Props = OwnProps;

const RobotAsincSuspense: FunctionComponent<Props> = (props) => {

    return (
            <Canvas style={{height: "800px"}} >
                <ambientLight intensity={0.5}/>

                    <React.Suspense fallback={null}>
                        <RobotAsinc/>
                    </React.Suspense>

            </Canvas>
    );
};

export default RobotAsincSuspense;
