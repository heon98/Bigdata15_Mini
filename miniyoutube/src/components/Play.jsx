import React, { useEffect, useState } from 'react'

const Play = props => {
    const [video, setVideo] = useState([]);
    useEffect(() => {
        fetch(
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=KR&key=AIzaSyBeymQmQdVEAPAciY51spK3v0kvJM-Um4o"
        )
            .then((response) => response.json())
            .then((data) => {
                const videos = data.items;
                setVideo(videos);
                console.log(videos);

            });
    }, []);

    return (

        <div className='row'>

            <div className='row__posters'>
                {video.map(video =>
                    <iframe
                        id="ytplayer"
                        type="text/html"
                        width="720"
                        height="405"
                        // src="https://www.youtube.com/embed/_ZAgIHmHLdc"
                        src={`https://www.youtube.com/embed/${video?.id}`}
                        // src={`https://www.youtube.com/embed/6LmO6rmDW08`}
                        frameBorder="0"
                        allowFullScreen="allowfullscreen"
                    >
                    </iframe>
                )}
            </div>
        </div>




    )
}

export default Play