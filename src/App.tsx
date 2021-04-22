// outer
import React from 'react';


// local
import './App.css';
import BoxesBlock from "./components/BoxesBlock";
import RobotCanvas from "./components/RobotCanvas";
import RobotAsincSuspense from "./elements/RobotAsincSuspense";
import {Canvas} from "@react-three/fiber";
import ModelCanvas from "./components/ModelCanvas";





function App() {
    return (
        <div className="App">
            {/*<BoxesBlock/>*/}
            {/*<RobotCanvas/>*/}
            <RobotAsincSuspense/>

            {/*<ModelCanvas/>*/}
        </div>
    );
}

export default App;
