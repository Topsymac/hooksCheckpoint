import React from 'react'
import "../moviecard/MovieCard.css"

const MovieCard = ({moviedata}) => {

    const {movieimage, title, desc, url, rate } = moviedata
  return (
    <div>
        <div className="movieOne">
                <img src={movieimage} alt="movie" /> <br></br>
                <div className="info">
                <h3>Title: {title}</h3>
                <p><b>Description:</b> {desc}</p>
                <p><b>PosterUrl:</b> <a href={url}> See movie</a></p>
                <p><b>Rating: </b> {rate}</p>
                </div>
            </div>
    </div>
  )
}

export default MovieCard