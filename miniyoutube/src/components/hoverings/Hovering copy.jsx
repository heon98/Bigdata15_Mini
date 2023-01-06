import React, { useEffect, useState } from "react";
import Play from "../Play/Play";
import Cat from "../cats/Cat";
import requests from "../../requests";



const Hovering = props => {

    const [isHovering, setIsHovering] = useState(0);

    return (
        <div onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}>
            {isHovering ?
                <Play title="BasicTrending Now" fetchUrl={requests.BasicTrending} />
                : <Cat title="BasicTrending Now" fetchUrl={requests.BasicTrending} />}

        </div>
    )

}
export default Hovering;