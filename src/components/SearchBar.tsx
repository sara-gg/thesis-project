import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Search } from "grommet-icons";

import "../styles/SearchBar.scss";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const searchHandler = () => {
    redirectToGallery();
  };

  const searchOnEnterHandler = (e: any) => {
    if (e.keyCode === 13) redirectToGallery();
  };

  const redirectToGallery = () => {
    history.push(`/products?title=${searchValue}`);
  };

  return (
    <form className="container">
      <input
        placeholder="eg: wooden table"
        value={searchValue}
        onChange={handleChange}
        onKeyDown={searchOnEnterHandler}
      />
      <Search onClick={searchHandler} size="medium" className="search-icon" />
    </form>
  );
};

export default SearchBar;
