import React from "react";
import "../filter/Filter.css"


const Filter = () => {
  // const movieobj = [
  //   {
  //     movieimage:
  //       "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
  //     title: "Queen of the West",
  //     desc: "Romantic",
  //     url: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      
  //     rate: "9"
  //   },
  //   {
  //     movieimage:
  //       "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
  //     title: "Queen of the north",
  //     desc: "Adventure",
  //     url: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    
  //     rate: "7"
  //   },
  //   {
  //     movieimage:
  //       "https://i.pinimg.com/474x/de/2d/5c/de2d5ca52c675b3bebb27a02a965716d.jpg",
  //     title: "Queen of the south",
  //     desc: "Action",
  //     url: "https://i.pinimg.com/474x/de/2d/5c/de2d5ca52c675b3bebb27a02a965716d.jpg",
      
  //     rate: "6"
  //   },
  // ];
  
  return (
    <div>
      <div className="search">
        <div>
        <label htmlFor="Search">Filter by title:</label>
        <input type="text" name="Search" />
        </div>
        <div>
        <label htmlFor="Search">Filter by Rating:</label>
        <input type="text" name="Search" />
        </div>
        {/* <button onClick={movieobj.filter(movie => movie.includes('Queen of the West', 'Queen of the north', 'Queen of the south')).map(filteredMovie => (<p>{filteredMovie.title}</p>))}>Filter</button> */}
      </div>
    </div>
  );
};

export default Filter;
