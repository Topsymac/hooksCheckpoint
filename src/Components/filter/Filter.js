import React, { useState } from "react";
import "../filter/Filter.css";

const Filter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <div className="search">
        <div>
          <label htmlFor="Search">Filter by title & rating:</label>
          <input
            type="text"
            name="Search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;


