import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Do not call onSearch(query) here, instead, call it when the "Search" button is clicked
  };

  const handleSearch = () => {
    // Perform the search using the searchQuery
    onSearch(searchQuery);
  };

  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder='Search'
        value={searchQuery}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
