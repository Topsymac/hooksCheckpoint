import React, { useState } from "react";
import "../movielist/Movielist.css";
import MovieCard from "../moviecard/MovieCard";
import Filter from "../filter/Filter";
import Addmovie from "../addmovie/Addmovie";

import { movieobj } from "../../utility/moviedata";

const MovieList = () => {
  const [movieToggle, setMovieToggle] = useState(false);
  const [movies, setMovies] = useState(movieobj);
  const [query, setQuery] = useState("");


  const addNewMovie = (data) => {
    setMovies([...movies, data]);
  };

  const filtermovies = (data) => {
    return movies.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.rate.toLowerCase().includes(query)
    );
  };

  return (
    <div>
      <Filter onSearch={setQuery} />

      <button onClick={() => setMovieToggle(!movieToggle)}>Add Movie</button>

      <div>{movieToggle && <Addmovie onAdd={addNewMovie} />}</div>

      <div>
        <MovieCard moviedata={filtermovies()} />
      </div>
    </div>
  );
};

export default MovieList;
