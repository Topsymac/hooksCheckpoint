import React from "react";
import { useNavigate } from "react-router-dom";

const MovieDescription = () => {
  const navigate = useNavigate();
  

  return (
    <div>
      <div className="back">
      <button onClick={() => navigate("/")}>Back</button>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/oJM7v0Jpn3E"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h2>Movie Description</h2>
      <p>
        She's a local cook with big dreams. Will they come true? Selina is
        written and produced by Uduak Oguamanam
      </p>
    </div>
  );
};

export default MovieDescription;
