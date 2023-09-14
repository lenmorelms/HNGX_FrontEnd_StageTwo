import React from "react";
import Image from "../Image";

const MovieCard = (props) => {
    return (
        <div className="movie-card">
            <a href={props.href}>
            <div className="movie-poster"> 
                <Image className="movie-poster-img" src={props.src} alt="Movie Poster" />
            </div>
            <div className="movie-title">{props.title}</div>
            <div className="movie-release-date">{props.release_date}</div>
            </a>
        </div>
    )
};

export default MovieCard;