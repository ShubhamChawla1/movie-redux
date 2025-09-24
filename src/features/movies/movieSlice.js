import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    movies: {},
    shows: {}
}

const movieSlice = createSlice({
    name : "movies",
    initialState, 
      reducers: {
        addMovies : (state, {payload}) => {
                state.movies = payload;

        },
        addShows: (state, { payload }) => {
      state.shows = payload;
    }
      },
});


// Whenever i get the movies from payload i just update the state of the movies 
// Their is a difference between redux and redux-toolkit way 
// In Redux-toolkit it uses a internal library called imme for the mutability. we just take the state and we just update the property you want to update. for us in the state we just update the property of movies. In old Redux way we use spread operator for previous state and then add new state like {...state, payload}

export const {addMovies , addShows} = movieSlice.actions;

// export addMovies we have actions which we can import in home component 


// after store.js if i want to fetch and get a value from the store how i can do create a function 
export const getAllMovies = (state) => state.movies.movies // state.movies from name : movies  Goto to the Home.js 
export const getAllShows = (state) => state.movies.shows;

export default movieSlice.reducer;

// export movieSlice reducer 
// Goto our Store.js