import axios from "axios";

// MOVIE LIST
export const listMovie = () => async (dispatch) => {
    try {
      dispatch({ type: "MOVIE_LIST_REQUEST" });
      const { data } = await axios("https://api.themoviedb.org/3/discover/movie?api_key=f093b7f56c445a5255c4568aea1a539d&page=1"); 
      dispatch({ type: "MOVIE_LIST_SUCCESS", payload: data.results.slice(0, 10) });
    } catch (error) {
      dispatch({
        type: "MOVIE_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// SINGLE PRODUCT
