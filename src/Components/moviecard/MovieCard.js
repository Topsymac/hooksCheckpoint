import React from "react";
import { useNavigate } from "react-router-dom";
import "../moviecard/MovieCard.css";

const MovieCard = ({ moviedata }) => {
  const navigate = useNavigate();
  // const { movieimage, title, desc, url, rate } = moviedata;
  return (
    <div onClick={()=> navigate("/movie-description")} >
      {moviedata.map((movie, index) => {
        const { movieimage, title, desc, url, rate } = movie;
        
        return (
          <div key={index} className="movieOne">
            <img src={movieimage} alt="movie" /> <br></br>
            <div className="info">
              <h3>Title: {title}</h3>
              <p>
                <b>Description:</b> {desc}
              </p>
              <p>
                <b>PosterUrl:</b> <a href={url}> See movie</a>
              </p>
              <p>
                <b>Rating: </b> {rate}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
