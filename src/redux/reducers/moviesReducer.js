const initialState = { movies: [] };

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Get_Movies":
      // console.log("Movies in Reducer:", action.payload); // Log to ensure action payload has data
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};
