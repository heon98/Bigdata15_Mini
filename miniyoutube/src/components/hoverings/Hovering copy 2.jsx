import React, { useEffect, useState } from "react";
import Play2 from "../Play/Play2";
import Cat2 from "../cats/Cat2";
import requests from "../../requests";



const Hovering = props => {

    const [isHovering, setIsHovering] = useState(0);

    return (
        <div onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}>
            {isHovering ?
                <Play2 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />
                : <Cat2 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />}

        </div>
    )

}
export default Hovering;