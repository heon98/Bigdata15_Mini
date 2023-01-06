import React, { useEffect, useState } from "react";
import "./Row.css";

const Row = (props) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch(
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=KR&key=AIzaSyBeymQmQdVEAPAciY51spK3v0kvJM-Um4o"
        )
            .then((response) => response.json())
            .then((data) => {
                const videos = data.items;
                setVideos(videos);
            });
    }, []);

    return (
        <div>
            {videos.map((video) => (
                <img
                    key={video.id}
                    src={video?.snippet.thumbnails.medium.url}
                    alt=""
                />
            ))}
        </div>
        // <p>dd</p>
    );
};

export default Row;

// console.log(video.items[0].snippet.thumbnails.default.url);
