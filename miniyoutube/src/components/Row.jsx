import React, { useEffect, useState } from "react";

const Row = (props) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBeymQmQdVEAPAciY51spK3v0kvJM-Um4o"
        )
            .then((response) => response.json())
            .then((data) => {
                const movies = data;
                setMovies(movies);

                console.log(movies);
            });
    }, []);

    return <></>;
};

export default Row;
