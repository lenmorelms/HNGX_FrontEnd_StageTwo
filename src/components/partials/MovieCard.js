import React from "react";
import Image from "../Image";

const MovieCard = (props) => {
    return (
        <div className="movie-card">
            <a href={props.href}>
            <div className="movie-poster"> 
                <Image data-testid="movie-poster" className="movie-poster-img" src={props.src} alt="Movie Poster" />
            </div>
            <div className="movie-title"><h3 data-testid="movie-title">{props.title}</h3></div>
            <div data-testid="movie-release-date" className="movie-release-date">{props.release_date}</div>
            </a>
        </div>
    )
};

export default MovieCard;