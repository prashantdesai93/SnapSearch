import React from 'react';
import PropTypes from 'prop-types';

// This component renders a search bar that allows the user to enter a search term and click a button to search for images.
// It receives a searchImage state and a setSearchImage function as props to manage the search term state.
// This component also handles the submit event of the search form and passes the search term to the parent component using a callback function.
// If the search term is empty, it displays an error message.

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

SearchBar.propTypes = {
    searchImage: PropTypes.string.isRequired,
    setSearchImage: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

  
export default SearchBar;

