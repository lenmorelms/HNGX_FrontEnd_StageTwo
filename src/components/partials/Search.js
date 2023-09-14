import React, { useEffect, useState } from "react";
import MoviesArray from "../movies/Movies";

const Search = () => {
    const movies = MoviesArray;
    let a = true;
    const [moviesArray, setMoviesArray] = useState(movies);

    useEffect(()=> {
        setMoviesArray(movies);
    }, [movies]);
    function renderFunction() {
        movies.push(6);
    }
    return (
        <>
        <form className="search-form" action="" method="post">
            <input onFocus={renderFunction} className="search-input" name="search-term"/>
            {moviesArray}
        </form>
        </>
    );
};

export default Search;