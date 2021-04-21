// outer
import React from 'react';


// local
import './App.css';
import BoxesBlock from "./components/BoxesBlock";
import RobotCanvas from "./components/RobotCanvas";



function App() {
    return (
        <div className="App">
            <BoxesBlock/>
            <RobotCanvas/>

        </div>
    );
}

export default App;
