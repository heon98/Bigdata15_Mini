import Hovering from "./components/Hovering";
import Play from "./components/Play/Play";
import Cat from "./components/cats/Cat";
import requests from "./requests";
import React, { useEffect, useState } from "react";


function App() {
    const [isHovering, setIsHovering] = useState(0);

    return (
        <div className="App">
            <Hovering />
        </div>
    );
}

export default App;
