import React from "react";
import styles from "./searchBar.module.scss";
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className={styles.searchBarMain}>
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
