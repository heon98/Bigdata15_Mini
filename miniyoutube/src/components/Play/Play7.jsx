import React, { useEffect, useState } from "react";

const Play = (props) => {
    const [video, setVideo] = useState([]);
    useEffect(() => {
        fetch(
            props.fetchUrl)
            .then((response) => response.json())
            .then((data) => {
                const videos = data.items;
                setVideo(videos);
                // console.log(videos);
            });
    }, []);

    return (
        <div className="row">
            <iframe src={`https://www.youtube.com/embed/${video[7]?.id}`} width="720" height="405" />
        </div>
    );
};

export default Play;
