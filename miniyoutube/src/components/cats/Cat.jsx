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
            {/* {videos.map((video) => (
                <img
                    key={video.id}
                    width="720"
                    height="405"
                    src={video.snippet.thumbnails.medium.url}
                    alt=""
                />
            ))} */}
            <img src={videos[1]?.snippet.thumbnails.medium.url}
                width="720"
                height="405"
                alt="" />
        </div>
    );
};

export default Cat;
