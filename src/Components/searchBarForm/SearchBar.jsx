import { useState } from "react";
import styles from "./searchBar.module.css";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form
      className={`search_bar d-flex w-100 position-relative  align-items-center ${styles.search_form}`}
    >
      <input
        className={`w-100 h-100 border-0 shadow ${styles.search_bar}`}
        placeholder="Search for everything"
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        type="submit"
        className={`position-absolute border-0 bg-transparent ${styles.search_icon}`}
      >
        {" "}
        <img src="assets/search.png" alt="" />
      </button>
    </form>
  );
}
