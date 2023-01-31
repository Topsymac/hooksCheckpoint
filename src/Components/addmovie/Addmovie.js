import React from "react";
import { useState } from "react";
import "../addmovie/Addmovie.css";



const Addmovie = () => {
  const [movieurl, setMovieurl] = useState('')
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [url, setUrl] = useState('');
  const [rating, setRating] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    const adding ={movieurl, title, desc, url, rating};

    console.log(adding);
    setMovieurl('')
    setTitle('')
    setDesc('')
    setUrl('')
    setRating('')
    
  }

  
  return (
    <div>
      <form className="moviesearch" onSubmit={handleAdd}>
        <div>
          <label htmlFor="Search">Movieimage Url:</label>
          <input 
          type="text" 
          required 
          value={movieurl} 
          onChange={(e) => setMovieurl(e.target.value)} />
        </div>
        <div>
          <label htmlFor="Search">Title:</label>
          <input 
          type="text" 
          required 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="Search">Description:</label>
          <input 
          type="text" 
          required 
          value={desc} 
          onChange={(e) => setDesc(e.target.value)} />
        </div>
        <div>
          <label htmlFor="Search">Url:</label>
          <input 
          type="text" 
          required 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} />
        </div>
        <div>
          <label htmlFor="Search">Rating:</label>
          <input 
          type="text" 
          required 
          value={rating} 
          onChange={(e) => setRating(e.target.value)} />
        </div>
        <button >Add</button>
        
      </form>
    </div>
  );
};

export default Addmovie;
