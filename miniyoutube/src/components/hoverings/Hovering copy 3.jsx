import React, { useEffect, useState } from "react";
import Play3 from "../Play/Play3";
import Cat3 from "../cats/Cat3";
import requests from "../../requests";



const Hovering = props => {

    const [isHovering, setIsHovering] = useState(0);

    return (
        <div onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}>
            {isHovering ?
                <Play3 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />
                : <Cat3 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />}

        </div>
    )

}
export default Hovering;