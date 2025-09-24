<!--
Step 1: Delete Files -> logo192.png, logo512.png , manifest.json, robots.txt, App.test.js , index.css, logo.svg, reportWebVitals.js, setupTests.js 

Step 2: Remove all import file from existing 
file 

Step 3: npm install redux react-redux @reduxjs/toolkit

Step 4: npm install axios // For API Call

Step 5 : npm install react-router-dom

Step 6 : npm install sass 

Step 7 : App.css -> App.scss

Step 8 : create folder

common  -> colors.scss

components  
-> Footer -> Footer.js , Footer.scss 
-> Header -> Header.js , Header.scss
-> Home -> Home.js , Home.scss
-> MovieListing -> MovieListing.js , MovieListing.scss
-> MovieCard -> MovieCard.js , MovieCard.scss
-> MovieDetail -> MovieDetail.js , MovieDetail.scss
-> PageNotFound -> PageNotFound.js , PageNotFound.scss


features -> 

images ->  


Step 9 : 
MovieDetail.js -> rafce
MovieCard.js -> rafce
PageNotFound.js -> rafce
MovieListing.js -> rafce
Home.js -> rafce
Header.js -> rafce
Footer.js -> rafce

Step 10 : use OMDB API

In common -> Create apis folder  -> movieApi.js , MovieApiKey.js

MovieApiKey.js -> export const APIKey = "ceb4a5";

movieApi.js -> import axios from "axios";

export default axios.create({
baseURL : "https://www.omdbapi.com", 
})

step 11 App.js 
Edit App.css -> App.scss

Build a Routing 
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

Full Code of Routing Logic

import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Routes>
        <Route path="/"  element={<Home />} />
        <Route path='/movie/:imdbID' element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

Step 12 Style Header -> Header.js, Header.scss

Step 13 Style Footer -> Footer.js , Footer.scss

Step 14 Style Home.js 
use Axios for API Call

Follow Steps to Create Configure etc of Redux Toolkit from Offical website Redux Toolkit 

Step 15 Adding Redux to Project 
In features -> Create file store.js
In features -> Create folder movies

store.js

index.js (Creating the Store we just provide our store to our components)

In features -> movies folder -> Create Slice

In MovieSlice.js
import {createSlice} from reduxjs/toolkit

const initialState  // set initialState

Create the Reducer 
In features -> movies -> Create movieSlice.js file.  





want all movies use useSelector 
In MovieListing.js 

const movies = useSelector(getAllMovies);

and in Store.js 
reducer : {
   movies : moviesReducer
},


Now we want to display all movies on are MovieListing Component 
create let renderMovies 
renderMovies = 


MovieListing.scss 

pass a props to MovieCard.js

->