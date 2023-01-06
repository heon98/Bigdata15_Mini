import React, { useEffect, useState } from "react";
import Play8 from "../Play/Play8";
import Cat8 from "../cats/Cat8";
import requests from "../../requests";



const Hovering = props => {

    const [isHovering, setIsHovering] = useState(0);

    return (
        <div onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}>
            {isHovering ?
                <Play8 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />
                : <Cat8 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />}

        </div>
    )

}
export default Hovering;