import React, { useState } from "react";
import "../movielist/Movielist.css";
import MovieCard from "../moviecard/MovieCard";
import Filter from "../filter/Filter";
import Addmovie from "../addmovie/Addmovie";

// import React from 'react'

const MovieList = () => {
  const [movieToggle, setMovieToggle] = useState(false);


  const movieobj = [
    {
      movieimage:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      title: "Queen of the West",
      desc: "Romantic",
      url: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      
      rate: "9"
    },
    {
      movieimage:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      title: "Queen of the north",
      desc: "Adventure",
      url: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    
      rate: "7"
    },
    {
      movieimage:
        "https://i.pinimg.com/474x/de/2d/5c/de2d5ca52c675b3bebb27a02a965716d.jpg",
      title: "Queen of the south",
      desc: "Action",
      url: "https://i.pinimg.com/474x/de/2d/5c/de2d5ca52c675b3bebb27a02a965716d.jpg",
      
      rate: "6"
    },
  ];

  const [ movies, setMovies ] = useState([movieobj]);
  console.log("newmovie", movies)

  // const addMovie = () => {
  //   setMovies([...movies, ])
  // }
  
  

  return (
    <div>
      {/* <button onClick={addMovie}>add mov</button> */}
      <Filter  />
      <button onClick={ () => setMovieToggle(!movieToggle)}>Add Movie</button>
      <div>{movieToggle && <Addmovie  />}</div>
      <div>
      {movieobj.map((item) => {
        return (
          <div key={item.title}>
            <MovieCard moviedata={item} />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default MovieList;

