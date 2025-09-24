import React, { useEffect } from 'react'
import { ClipLoader } from 'react-spinners';
import MovieListing from '../MovieListing/MovieListing'
import movieapi from '../../common/apis/movieApi'
import {APIKey} from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies, addShows } from '../../features/movies/movieSlice'
import { useState } from 'react';
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const movieKeywords = ["Harry", "Avengers", "Batman", "Spiderman", "Matrix"];
  const showKeywords = ["Friends", "Breaking Bad", "Game of Thrones", "The Office", "Stranger Things"];

  const getRandomKeyword = (arr) => arr[Math.floor(Math.random() * arr.length)];

    
    
    useEffect(() => {
    

    const fetchMovies = async() => {
      const randomMovie = getRandomKeyword(movieKeywords);

      const response = await movieapi.get(`?apiKey=${APIKey}&s=${randomMovie}&type=movie`)
     .catch((err) => {
        console.log("Movie Error :", err);
     });  
      // console.log("The response from API ", response);
      dispatch(addMovies(response.data)); // we want to dispatch an action and action is addMovies and pass the response.data data is the key which contain all the result 
    };

     const fetchShows = async () => {
      const randomShow = getRandomKeyword(showKeywords);
      const response = await movieapi.get(`?apiKey=${APIKey}&s=${randomShow}&type=series`)
        .catch((err) => {
          console.log("Shows Error:", err);
        });
      dispatch(addShows(response.data));
    };

    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([fetchMovies(), fetchShows()]);
      setIsLoading(false);
    };
    fetchData();
  },[dispatch]);
   return (
    <div>
      <div className='banner-img'></div>
      {isLoading ? (
        <div className="loading-indicator">
          <ClipLoader color="#00BFFF" size={80} />
        </div>
      ) : (
        <MovieListing />
      )}
    </div>
  );
};

export default Home;

// use useEffect create fetchMovies arrow function  
// after get bracket we search endpoint in api . &s means search Result. &type = movie (this all things are available in OMDB website)


// after movieSlice.js 
// whenever i get the value from the api i want to dispatch an action so that after doing the dispatch this will go to the reducer and reducer will update the state. const disptach = useDispatch(); 
