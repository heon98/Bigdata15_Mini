import React, { useEffect, useState } from "react";
import "./Cat.css";

const Cat = (props) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch(props.fetchUrl)
            .then((response) => response.json())
            .then((data) => {
                const videos = data.items;
                setVideos(videos);
            });
    }, []);
    return (
        <div className="cat">
            {videos.map((video) => (
                <img
                    key={video.id}
                    src={video.snippet.thumbnails.medium.url}
                    alt=""
                />
            ))}
        </div>
    );
};

export default Cat;
