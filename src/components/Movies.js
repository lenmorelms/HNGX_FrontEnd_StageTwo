import { React, useState, useEffect } from 'react';
import axios from "axios";
import Header from './Header';
import Card from './partials/Card';

//f093b7f56c445a5255c4568aea1a539d
const Movies = () => {
    
    // get movies from TMDB
    function useTMDBAPI(url = "https://api.themoviedb.org/3/discover/movie?api_key=f093b7f56c445a5255c4568aea1a539d&page=1") {
        const [moviesData, setMoviesData] = useState([]);
    
        useEffect(() => {
            const fetchData = async () => {
                const result = await axios(url);
                //return only the first 10 movies
                setMoviesData(result.data.results.slice(0, 10));
            };
            fetchData();
        }, [url]);
    
       return moviesData;
    }
    const movieData = useTMDBAPI();
    let movieList = [];
    movieData.forEach((movie)=> { 
        console.log(movie.title);
        movieList.push(<Card
            data-testid="movie-card"
            href={`/movies/${movie.id}`}
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            title={movie.title}
            release_date={movie.release_date}
        />)
    })
    // const dispatch = useDispatch();

    // const movieList = useSelector((state) => state.movieList);
    // const { loading, error, movies } = movieList;

    // useEffect(() => {
    //     dispatch(listMovie());
    // }, [dispatch]);

    return (
        <>
        <Header />
        <h3 className="movie-list-heading">Featured Movies</h3>
        <div className="movie-list">
           {movieList}
        </div>
        </>
    );
}

export default Movies;