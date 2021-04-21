// outer
import React, { FunctionComponent } from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";


// local
import Robot from "../elements/Robot";



interface OwnProps {}

type Props = OwnProps;

const RobotCanvas: FunctionComponent<Props> = (props) => {

  return (
      <Canvas className="canvas" style={{height: "600px"}} >
          <OrbitControls/>
          <ambientLight intensity={0.5}/>
          <Robot/>
      </Canvas>
  );
};

export default RobotCanvas;
