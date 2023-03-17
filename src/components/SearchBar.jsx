import React from 'react';

const SearchBar = ({ searchImage, setSearchImage, onSubmit }) => (
  <div className="search-container">
    <input
      type="text"
      className="search-input"
      value={searchImage}
      onChange={(e) => setSearchImage(e.target.value)}
      placeholder="Search images..."
    />
    <button className="search-button" onClick={onSubmit}>
      Find
    </button>
  </div>
);

export default SearchBar;
