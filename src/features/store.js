import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movies/movieSlice'

export const store  = configureStore({
    reducer : {
   movies : moviesReducer
},
});

// import configureStore
// export const store 
// reducer -> We are going to create the reducer and then we export those reducer and import the reducer here and add the reducer here  

// import reducer after movieSlice.js
// and moviesReducer to reducer 


// if i want to fetch a value and get a value from the store.js How i can do that