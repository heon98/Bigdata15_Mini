import React, { useEffect, useState } from "react";
import Play7 from "../Play/Play7";
import Cat7 from "../cats/Cat7";
import requests from "../../requests";



const Hovering = props => {

    const [isHovering, setIsHovering] = useState(0);

    return (
        <div onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}>
            {isHovering ?
                <Play7 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />
                : <Cat7 title="BasicTrending Now" fetchUrl={requests.BasicTrending} />}

        </div>
    )

}
export default Hovering;