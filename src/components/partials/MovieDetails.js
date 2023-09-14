import React from "react";
import Image from "../Image";

const MovieCard = (props) => {
    return (
        <div className="movie-details">
            <div className="movie-poster"> 
                <Image className="movie-details-img" src={props.src} alt="Movie Poster" />
            </div>
            <div className="movie-details-summary">
                <div className="movie-title">{props.title}</div>
                <div className="movie-release-date">{props.release_date}</div>
                <div className="movie-runtime">{props.runtime}</div>
            </div>
            <div className="movie-details-overview">{props.overview}</div>
        </div>
    )
};

export default MovieCard;