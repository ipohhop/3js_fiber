import React, {FunctionComponent} from 'react';
import RobotAsinc from "./RobotAsinc";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";




// const RobotAsinc = React.lazy(() => import("./RobotAsinc")); // Ленивая загрузка




interface OwnProps {}

type Props = OwnProps;

const RobotAsincSuspense: FunctionComponent<Props> = (props) => {

    return (
        // <React.Suspense fallback={null}>

            <Canvas className="canvas" style={{height: "600px"}}>
                <OrbitControls/>
                <ambientLight intensity={0.5}/>

                <group position={[0, -1, 0]}>


                    <React.Suspense fallback={null}>
                        <RobotAsinc/>
                    </React.Suspense>


                </group>

            </Canvas>


        // {/*</React.Suspense>*/}

    );
};

export default RobotAsincSuspense;
