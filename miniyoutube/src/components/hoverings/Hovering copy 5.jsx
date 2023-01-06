import React, { useEffect, useState } from "react";
import Play5 from "../Play/Play5";
import Cat5 from "../cats/Cat5";
import requests from "../../requests";



const Hovering = props => {

    const [isHovering, setIsHovering] = useState(0);

    return (
        <div onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}>
            {isHovering ?
                <Play5 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />
                : <Cat5 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />}

        </div>
    )

}
export default Hovering;