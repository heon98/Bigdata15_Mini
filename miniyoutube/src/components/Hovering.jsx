import React, { useEffect, useState } from "react";
import Play from "./Play";
import Row from "./Row";

const API_KEY = 'AIzaSyBeymQmQdVEAPAciY51spK3v0kvJM-Um4o';

const Hovering = props => {

    const [isHovering, setIsHovering] = useState(0);

    return (
        <div onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}>
            {isHovering ? <Play /> : <Row />}

        </div>
        // <Row onMouseOver={() => setIsHovering(1)}
        //     onMouseOut={() => setIsHovering(0)}>
        //     {`<Play />`}
        // </Row>
    )

}
export default Hovering;