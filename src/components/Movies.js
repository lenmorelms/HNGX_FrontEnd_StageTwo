import React from "react";
import { spiderman } from "./Imports/Imports";
import Image from "./Image";

const Movies = () => {
    let MovieList = [];
    for(let i = 0; i < 10; i++) {
        MovieList.push( 
            <div className="movie-card">
                <a href="#">
                <div className="movie-poster"> 
                    <Image className="movie-poster-img" src={spiderman} alt="Movie Poster" />
                </div>
                <div className="movie-title">Spiderman Homecoming</div>
                <div className="movie-release-date">2021-09-09</div>
                </a>
            </div>
        );
    }
    return (
        <div className="movie-list">
           {MovieList}
        </div>
    );
}

export default Movies;