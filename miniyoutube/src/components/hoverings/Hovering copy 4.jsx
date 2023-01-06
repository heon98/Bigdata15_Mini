import React, { useEffect, useState } from "react";
import Play4 from "../Play/Play4";
import Cat4 from "../cats/Cat4";
import requests from "../../requests";



const Hovering = props => {

    const [isHovering, setIsHovering] = useState(0);

    return (
        <div onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}>
            {isHovering ?
                <Play4 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />
                : <Cat4 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />}

        </div>
    )

}
export default Hovering;