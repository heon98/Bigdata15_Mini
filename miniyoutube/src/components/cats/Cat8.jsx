import React, { useEffect, useState } from "react";
import requests from "../../requests";

const Cat = (props) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch(props.fetchUrl)
            .then((response) => response.json())
            .then((data) => {
                const videos = data.items;
                setVideos(videos);
                console.log(videos);
            });
    }, []);
    return (
        <div className="cat">
            <img src={videos[8]?.snippet.thumbnails.medium.url}
                width="720"
                height="405"
                alt="" />
        </div>
    );
};

export default Cat;
