import { React, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import MovieDetails from './partials/MovieDetails';

const Movie = () => {
    const location = useLocation();
    // get movie from TMDB
    function useTMDBAPI(url) {
        const [data, setData] = useState([]);
    
        useEffect(() => {
            const fetchData = async () => {
                const result = await axios(url);
                //returning a single movie
                setData(result.data);
            };
            fetchData();
        }, [url]);
    
       return data;
    }//Extract id from pathname
    const movieId = (location.pathname).split("/")[2];
    console.log();
    const movieData = useTMDBAPI(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f093b7f56c445a5255c4568aea1a539d`);
    return (
        <MovieDetails
            src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`}
            title={movieData.title}
            release_date={Date(movieData.release_date)}
            runtime={movieData.runtime}
            overview={movieData.overview}
        />
    );
}

export default Movie;