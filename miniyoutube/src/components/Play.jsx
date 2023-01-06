import React, { useEffect, useState } from 'react'

const Play = props => {
    const [video, setVideo] = useState([]);
    useEffect(() => {
        fetch(
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBeymQmQdVEAPAciY51spK3v0kvJM-Um4o"
        )
            .then((response) => response.json())
            .then((data) => {
                const videos = data;
                setVideo(videos);

                console.log(video);
            });
    }, []);

    return (
        <iframe
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            src="https://www.youtube.com/embed/_uS8QRe2qfE"
            // src={`https://www.youtube.com/embed/${video.items[0].id}`}
            // src={`https://www.youtube.com/embed/_uS8QRe2qfE`}
            frameborder="0"
            allowfullscreen="allowfullscreen"
        ></iframe>
      )
}

export default Play