// outer
import React from 'react';


// local
import './App.css';
import BoxesBlock from "./components/BoxesBlock";
import RobotCanvas from "./components/RobotCanvas";
import RobotAsincSuspense from "./elements/RobotAsincSuspense";
import {Canvas} from "@react-three/fiber";





function App() {
    return (
        <div className="App">
            <BoxesBlock/>
            <RobotCanvas/>
            <RobotAsincSuspense/>
        </div>
    );
}

export default App;
