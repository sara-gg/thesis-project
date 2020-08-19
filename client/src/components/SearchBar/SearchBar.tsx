import React, { useState } from "react";
import { Search } from "grommet-icons";
import './SearchBar.css';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  }

  const searchHandler = () => {
    redirectToGallery();
  }

  const searchOnEnterHandler = (e: any) => {
    if (e.keyCode === 13)
      redirectToGallery();
  }

  const redirectToGallery = () => {
    window.location.replace(`http://localhost:3000/product?${searchValue}`);
  }

  return (
    <div className='container'>
      <input
        placeholder='eg: wooden table'
        value={searchValue}
        onChange={handleChange}
        onKeyDown={searchOnEnterHandler}
      />
      <Search
        onClick={searchHandler}
        size="medium"
        className='search-icon'
      />
    </div>
  );
};

export default SearchBar;