import React, { useEffect, useState } from "react";
import Play6 from "../Play/Play6";
import Cat6 from "../cats/Cat6";
import requests from "../../requests";



const Hovering = props => {

    const [isHovering, setIsHovering] = useState(0);

    return (
        <div onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}>
            {isHovering ?
                <Play6 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />
                : <Cat6 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />}

        </div>
    )

}
export default Hovering;