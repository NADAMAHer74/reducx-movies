import axios from "axios";

export const getAllMovies = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=ecf00043d02fd269283870878895733d"
      );
      // console.log("API Response:", response.data); // Log to check the API response
      dispatch({ type: "Get_Movies", payload: response.data.results });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
};

export const getMovie = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=ecf00043d02fd269283870878895733d`
      );
      if (id) {
        dispatch({
          type: "Get_Movie",
          payload: response.data.results.find((movie) => movie.id == id),
        });
      }
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };
};
