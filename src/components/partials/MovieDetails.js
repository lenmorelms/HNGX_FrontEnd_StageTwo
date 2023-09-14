import React from "react";
import Image from "../Image";

const MovieCard = (props) => {
    return (
        <div className="movie-details">
            <div className="movie-poster"> 
                <Image className="movie-details-img" src={props.src} alt="Movie Poster" />
            </div>
            <div className="movie-details-summary">
                <div className="movie-title"><h3 data-testid="movie-title">{props.title}</h3></div>
                <div className="movie-release-date"><h3 data-testid="movie-release-date">{props.release_date}</h3></div>
                <div className="movie-runtime"><h3 data-testid="movie-runtime">{props.runtime}</h3></div>
            </div>
            <div className="movie-details-overview">
                <div data-testid="movie-overview" className="movie-details-overview-msg">{props.overview}</div>
                <div><button className="movie-details-overview-btn">Add to Favourites</button></div>
            </div>
        </div>
    )
};

export default MovieCard;